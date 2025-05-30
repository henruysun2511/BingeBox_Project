import { movies, movieComingSoons } from './objectForCinema.js';

if (movies && movieComingSoons) {
  // Hợp nhất 2 mảng phim
  const movieList = movies.concat(movieComingSoons);

  // Lấy tất cả ảnh diễn viên trong danh sách phim
  const actors = [];
  movieList.forEach(movie => {
    movie.actors.forEach(actor => {
      actors.push(actor.actorImage);
    });
  });

  // Nếu có diễn viên thì hiển thị avatar 
  if (actors.length > 0) {
    const actorSection = document.querySelector('.avatar');
    const overlay = document.querySelector('#overlay');
    const nickNameSection = document.querySelector('.nickname');
    const avatarWrap = document.querySelector('.avatar-wrap');

    //Render phần chọn avatar
    avatarWrap.innerHTML = '';
    actors.forEach(actorImage => {
      const avatarImage = document.createElement('div');
      avatarImage.classList.add('avatar-image');
      avatarImage.innerHTML = `<img src="${actorImage}" alt="Actor Image">`;
      avatarWrap.appendChild(avatarImage);

      // Khi click chọn avatar, lưu ảnh avatar vào sessionStorage và chuyển màn hình nhập tên
      avatarImage.addEventListener('click', () => {
        sessionStorage.setItem('actorImage', actorImage);
        actorSection.style.display = 'none';
        nickNameSection.style.display = 'block';
      });
    });

    //Khi ấn xác nhận, lưu tên vào sessionStorage
    const nickNameButton = document.querySelector('.nickname-button');
    nickNameButton.addEventListener('click', () => {
      const nickNameInput = document.querySelector('#nickname-input');
      const nickName = nickNameInput.value.trim();

      if (nickName) {
        sessionStorage.setItem('nickname', nickName);
        nickNameSection.style.display = 'none';
        overlay.style.display = 'none';

        if (movies.length > 0) {
          showMovieDetails(movies[0]);
        }
      } else {
        alert('Vui lòng nhập tên của bạn!');
      }
    });
  }

  const savedData = localStorage.getItem('movieComments');
  if (savedData) {
    const parsedComments = JSON.parse(savedData);
    movies.forEach(movie => {
      const savedMovie = parsedComments.find(m => m.name === movie.name);
      if (savedMovie && savedMovie.comments) {
        movie.comments = savedMovie.comments;
      } else {
        movie.comments = [];
      }
    });
  } else {
    movies.forEach(movie => movie.comments = []);
  }

  // Render danh sách phim bên trái
  const movieWrap = document.querySelector('.movie-wrap');
  movieWrap.innerHTML = '';
  movies.forEach(movie => {
    const movieImage = document.createElement('div');
    movieImage.classList.add('movie-image');
    movieImage.innerHTML = `<img src="${movie.imageUrl}" alt="${movie.name}">`;
    movieImage.addEventListener('click', () => {
      showMovieDetails(movie); // Hiển thị chi tiết phim và bình luận khi click vào ảnh
    });
    movieWrap.appendChild(movieImage);

    if (!movie.comments) movie.comments = [];
  });

  //Hiển thị chi tiết phim và bình luận của từng phim
  function showMovieDetails(movie) {
    renderMovieInfo(movie);
    renderCommentSection(movie);
    setupCommentSubmit(movie);
    setupReplyInteraction(movie);
  }

  // Hàm render thông tin phim
  function renderMovieInfo(movie) {
    const movieDetails = document.querySelector('.movie-info');
    movieDetails.innerHTML = `
      <h2 class="movie-name">${movie.name}</h2>
      <ul>
        <li>${movie.agePermisson}</li>
        <li>${movie.duration}</li>
        <li>${movie.subtitle}</li>
      </ul>
      <div class="movie-desc">${movie.script}</div>
      <div class="movie-row">
        <div class="movie-label">Diễn viên</div>
        <div class="movie-value">${movie.actors.map(actor => actor.actorName).join(", ")}</div>
      </div>
      <div class="movie-row">
        <div class="movie-label">Thể loại</div>
        <div class="movie-value">${movie.categories.join(', ')}</div>
      </div>
      <div class="movie-row">
        <div class="movie-label">Khởi chiếu</div>
        <div class="movie-value">${movie.releaseDate}</div>
      </div>
    `;
  }

  //Hàm render phần bình luận
  function renderCommentSection(movie) {
    const avatarChosen = sessionStorage.getItem('actorImage') || 'assets/images/default.jpg';
    const nickNameChosen = sessionStorage.getItem('nickname') || 'Ẩn danh';

    const commentList = movie.comments.map(comment => `
      <div class="comment-card">
        <div class="comment-bg" style="background-image: url('${movie.bigPoster}')"></div>
        <div class="comment-image">
          <img src="${comment.avatar}" alt="">
        </div>
        <div class="comment-user">
          <h3 class="comment-name">${comment.name}</h3>
          <p class="comment-content">${comment.content}</p>
          <div class="comment-stars">
        ${[1, 2, 3, 4, 5].map(i => `
          <i class="fa-star ${i <= (comment.rating || 0) ? 'fa-solid' : 'fa-star'}"></i>
        `).join('')}
      </div>
      <div class="comment-interact">
        <div class="interact comment-like"><i class="fa-solid fa-thumbs-up"></i></div>
        <div class="interact comment-dislike"><i class="fa-solid fa-thumbs-down"></i></div>
        <div class="interact comment-reply"><i class="fa-solid fa-comment-dots"></i> <p>${(comment.replies?.length || 0)}</p></div>
      </div>
        </div>
        </div>
    `).join('');

    const commentInfo = document.querySelector('.comment-info');
    commentInfo.innerHTML = `
      <h2 class="comment-title">Bình luận phim</h2>
      <div class="comment-list">${commentList}</div>
      <div class="comment-split">
       <div class="comment-box">
        <div class="comment-image">
          <img src="${avatarChosen}" alt="">
        </div>
        <textarea id="comment-input" placeholder="Nhập bình luận..."></textarea>
        <button class="comment-button"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
      <div class="comment-rating">
      ${[1, 2, 3, 4, 5].map(star => `
         <i class="fa-solid fa-star" data-value="${star}"></i>
      `).join('')}
    </div>
      </div>
    `;
  }

  //Viết sự kiện ấn icon reply comment
  function setupReplyInteraction(movie) {
    const replyButtons = document.querySelectorAll('.comment-reply');
    const replyPanel = document.querySelector('.reply-comment');
    const closeButton = document.getElementById('close');

    replyButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        replyPanel.style.display = 'block';
        const comment = movie.comments[index];
        renderReplyComment(comment, movie)
      });
    });

    closeButton.addEventListener('click', () => {
      replyPanel.style.display = 'none';
    });
  }

  //Render cho phần reply comment
  function renderReplyComment(comment, movie) {
    const avatarChosen = sessionStorage.getItem('actorImage') || 'assets/images/default.jpg';
    const nickNameChosen = sessionStorage.getItem('nickname') || 'Ẩn danh';
    const replyComment = document.querySelector('.reply-comment');

    // Render replies nếu có
    const repliesHTML = (comment.replies || []).map(reply => `
    <div class="new-comment">
      <div class="new-comment-avatar">
        <img src="${reply.avatar}" alt="">
      </div>
      <div class="new-comment-content">
        <div class="new-comment-name">${reply.name}</div>
        <div class="new-comment-text">${reply.content}</div>
      </div>
    </div>
  `).join('');

    // Hiển thị old comment + replies
    replyComment.querySelector('.reply-main').innerHTML = `
    <div class="old-comment">
      <div class="old-comment-avatar">
        <img src="${comment.avatar}" alt="">
      </div>
      <div class="old-comment-content">
        <div class="old-comment-name">${comment.name}</div>
        <div class="old-comment-text">${comment.content}</div>
        <div class="old-comment-rating"> ${[1, 2, 3, 4, 5].map(i => `
          <i class="fa-star ${i <= (comment.rating || 0) ? 'fa-solid' : 'fa-star'}"></i>
        `).join('')}</div>
      </div>
    </div>
    ${repliesHTML}
  `;

    replyComment.querySelector('.reply-image').innerHTML = `<img src="${avatarChosen}" alt="">`;

    replyComment.querySelector('#reply-input').value = "";
    // Gắn sự kiện gửi reply
    const replyButton = replyComment.querySelector('.reply-button');
    replyButton.onclick = () => {
      const input = replyComment.querySelector('#reply-input');
      const replyText = input.value.trim();
      if (!replyText) return;

      const reply = {
        name: nickNameChosen,
        avatar: avatarChosen,
        content: replyText
      };

      // Push vào comment.replies
      comment.replies = comment.replies || [];
      comment.replies.push(reply);

      // Re-render panel
      renderReplyComment(comment, movie);
      saveCommentsToLocalStorage(); //Lưu vào local storage
    };
  }

  //Hàm xử lý gửi bình luận
  function setupCommentSubmit(movie) {
    const commentInfo = document.querySelector('.comment-info');
    const sendButton = commentInfo.querySelector('.comment-button');

    // Xử lý chọn sao
    let selectedRating = 0;
    const stars = commentInfo.querySelectorAll('.comment-rating i');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        stars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < selectedRating; i++) {
          stars[i].classList.add('selected');
        }
      });
    });

    sendButton.addEventListener('click', async () => {
      const input = commentInfo.querySelector('#comment-input');
      const text = input.value.trim();
      if (!text) return;

      const avatarChosen = sessionStorage.getItem('actorImage') || 'assets/images/default.jpg';
      const nickNameChosen = sessionStorage.getItem('nickname') || 'Ẩn danh';

      movie.comments.push({
        movieName: movie.name,
        name: nickNameChosen,
        avatar: avatarChosen,
        content: text,
        rating: selectedRating,
        replies: []
      });
      saveCommentsToLocalStorage();
      renderCommentSection(movie);
      setupCommentSubmit(movie); // Gắn lại sự kiện cho nút gửi
      setupReplyInteraction(movie);
    });
  }
}

function saveCommentsToLocalStorage() {
  const commentData = movies.map(movie => ({
    name: movie.name,
    comments: movie.comments || []
  }));
  localStorage.setItem('movieComments', JSON.stringify(commentData));
}