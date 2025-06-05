import { movies } from './objectForCinema.js';
import { isLoggedIn } from './auth.js';


const movieLayout = document.getElementById('movieLayout');

document.addEventListener('DOMContentLoaded', () => {
  const cinemas = [
    { id: 'CB', name: 'Bingebox Cinema Chùa Bộc' },
    { id: 'HK', name: 'Bingebox Cinema Hoàn Kiếm' },
    { id: 'LG', name: 'Bingebox Cinema Metropolis Liễu Giai' },
  ];

  function renderCinemaSelection() {
    const container = document.getElementById('cinemaSelection');
    container.innerHTML = '';

    const title = document.createElement('h2');
    title.innerText = 'Chọn rạp chiếu:';
    container.appendChild(title);

    cinemas.forEach((cinema) => {
      const button = document.createElement('button');
      button.innerText = cinema.name;
      button.onclick = () => selectCinema(cinema.id);
      container.appendChild(button);
    });
  }

  function selectCinema(cinemaId) {
    document.getElementById('cinemaSelection').style.display = 'none';
    document.querySelector('.center').style.height = '5px';

    const cinemaMap = {
      CB: 'Bingebox Cinema Chùa Bộc',
      HK: 'Bingebox Cinema Hoàn Kiếm',
      LG: 'Bingebox Cinema Metropolis Liễu Giai',
    };

    const cinemaName = cinemaMap[cinemaId];
    if (cinemaName) {
      movieLayout.style.display = 'block';
      renderMovie(cinemaName);
    } else {
      movieLayout.style.display = 'none';
    }
  }

  function renderMovie(cinemaName) {
    movieLayout.innerHTML = '';

    const dateButtonDiv = document.createElement('div');
    dateButtonDiv.className = 'date-buttons';
    movieLayout.appendChild(dateButtonDiv);

    const movieListDiv = document.createElement('div');
    movieListDiv.className = 'movie-list';
    movieLayout.appendChild(movieListDiv);

    const dateSet = new Set();

    movies.forEach((movie) => {
      const cinema = movie.cinemas.find((c) => c.cinemaName === cinemaName);
      if (cinema) {
        cinema.schedules.forEach((schedule) => {
          dateSet.add(schedule.date);
        });
      }
    });

    const dateArray = [...dateSet];

    dateArray.forEach((date, index) => {
      const btn = document.createElement('button');
      btn.textContent = date;
      btn.addEventListener('click', () => {
        // Xử lý nút active
        [...dateButtonDiv.children].forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        console.log(btn.textContent);
        renderMoviesByCinemaAndDate(cinemaName, date);
      });

      dateButtonDiv.appendChild(btn);

      if (index === 0) {
        btn.classList.add('active');
        renderMoviesByCinemaAndDate(cinemaName, date);
      }
    });
  }

  function renderMoviesByCinemaAndDate(cinemaName, date) {
    const movieListDiv = movieLayout.querySelector('.movie-list');
    movieListDiv.innerHTML = '';

    movies.forEach((movie) => {
      const cinema = movie.cinemas.find((c) => c.cinemaName === cinemaName);
      if (!cinema) return;

      const schedule = cinema.schedules.find((s) => s.date === date);
      if (!schedule || !schedule.showtimes || schedule.showtimes.length === 0) return;
      const card = document.createElement('div');
      card.className = 'movie-card';

      const tagHTML = `<span class="tag orange">${movie.agePermisson}</span>`;
      const tagHTML2 = `<span class="tag green">${movie.format}</span>`;

      card.innerHTML = `
  <div class="inner-image">
    <img src="${movie.imageUrl}" alt="${movie.name}" />
  </div>
  <div class="movie-info">
    <h3>${movie.name}</h3>
    <div class="tags">
      ${tagHTML} ${tagHTML2}
    </div>
    <p>${movie.script}</p>
    <p>Thời lượng: ${movie.duration}</p>
    <p>Khởi chiếu: ${movie.releaseDate}</p>
    <div class="times"></div>
  </div>
`;

      // Thêm nút showtime có sự kiện click
      const timesDiv = card.querySelector('.times');

      schedule.showtimes.forEach((showtime) => {
        const btn = document.createElement('button');
        btn.textContent = showtime.time;

        btn.addEventListener('click', () => {
          //Chưa đăng nhập
          if (!isLoggedIn()) {
            alert('Vui lòng đăng nhập để tiếp tục đặt vé.');
            window.location.href = './accounts/login/login.html';
            return;
          }

          const bookingInfo = {
            bookingImage: movie.imageUrl,
            bookingName: movie.name,
            bookingFormat: movie.format,
            bookingAge: movie.agePermisson,
            bookingSubtitle: movie.subtitle,
            bookingDuration: movie.duration,
            bookingCinema: cinema.cinemaName,
            bookingRoom: showtime.room,
            bookingTime: showtime.time,
            bookingDate: date,
          };

          sessionStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
          window.location.href = './booking.html';
        });

        timesDiv.appendChild(btn);
      });
      movieListDiv.appendChild(card);
    });
  }



  renderCinemaSelection();
});
