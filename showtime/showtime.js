import { movies } from '../../../BTL-WEB/BingeBox_Cinema/scripts/objectForCinema.js';
const movieLayout = document.getElementById('movieLayout');
const dateButton = document.querySelector('.date-buttons');

// Lấy id phim từ URL

document.addEventListener('DOMContentLoaded', () => {
  const cinemas = [
    { id: 'CB', name: 'Bingebox Cinema Chùa Bộc' },
    { id: 'HK', name: 'Bingebox Cinema Hoàn Kiếm' },
    { id: 'LG', name: 'Bingebox Cinema Metropolis Liễu Giai' },
  ];

  // Định nghĩa HÀM TRƯỚC
  function renderCinemaSelection() {
    const container = document.getElementById('cinemaSelection');

    // Xoá nội dung cũ nếu có
    container.innerHTML = '';

    // Tạo tiêu đề
    const title = document.createElement('h2');
    title.innerText = 'Chọn rạp chiếu:';
    container.appendChild(title);

    // Tạo các nút rạp
    cinemas.forEach((cinema) => {
      const button = document.createElement('button');
      button.innerText = cinema.name;
      button.onclick = () => selectCinema(cinema.id);
      container.appendChild(button);
    });
  }
  function renderMovie(blingboxName) {
    var dateHTML;
    movies.forEach((movie) => {
      if (movie.cinemas.find((c) => c.cinemaName === blingboxName)) {
        // Tạo button date
        const dateSet = new Set();
        (movie.cinemas || []).forEach((cinema) => {
          (cinema.schedules || []).forEach((schedule) => {
            dateSet.add(schedule.date);
          });
        });

        dateHTML = [...dateSet].map((date) => `<button>${date}</button>`).join('');

        const card = document.createElement('div');
        card.className = 'movie-card';

        const tagHTML = `<span class="tag orange">${movie.agePermisson}</span>`;

        // Gộp các times
        const timesHTML =
          movie.cinemas
            ?.map((cinema) => {
              return (cinema.schedules || [])
                .map((schedule) => {
                  return (schedule.showtimes || [])
                    .map((showtime) => {
                      return `<button>${showtime.time}</button>`;
                    })
                    .join('');
                })
                .join('');
            })
            .join('') || '';
        card.innerHTML = `
        <img src="${movie.bigPoster}" alt="${movie.name}" />
        <div class="movie-info">
          <h3>${movie.name}</h3>
          <div class="tags">${tagHTML}</div>
          <p>${movie.script}</p>
          <p>Thời lượng: ${movie.duration}</p>
          <p>Khởi chiếu: ${movie.releaseDate}</p>
          <div class="times">${timesHTML}</div>
        </div>
      `;
        movieLayout.appendChild(card);
      }
    });
    dateButton.appendChild(document.createRange().createContextualFragment(dateHTML));
  }

  function selectCinema(cinemaId) {
    document.getElementById('cinemaSelection').style.display = 'none';
    document.body.classList.remove('center');
    if (cinemaId === 'CB') {
      document.getElementById('movieLayout').style.display = 'block';
      renderMovie('Bingebox Cinema Chùa Bộc');
    } else if (cinemaId === 'HK') {
      document.getElementById('movieLayout').style.display = 'block';
      renderMovie('Bingebox Cinema Hoàn Kiếm');
    } else if (cinemaId === 'LG') {
      document.getElementById('movieLayout').style.display = 'block';
      renderMovie('Bingebox Cinema Metropolis Liễu Giai');
    } else {
      document.getElementById('movieLayout').style.display = 'none';
    }
  }

  // GỌI SAU khi đã định nghĩa
  renderCinemaSelection();
});
