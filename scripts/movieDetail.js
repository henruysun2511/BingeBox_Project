import { movies } from "./objectForCinema.js";

// Lấy id phim từ URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');

// Tìm phim theo id
const movie = movies.find(m => m.id === movieId);

if (movie) {
    var movieBigPoster = document.getElementById('film-poster-big');
    movieBigPoster.innerHTML = `
        <img src="${movie.bigPoster}" alt="${movie.name}">
        <div class="film-overlay"></div>
        <div class="film-icon-play" id="play-button" href="">
            <i class="fa-solid fa-circle-play"></i>
        </div>
    `;

    var movieCommonInformation = document.getElementById('section-2');
    movieCommonInformation.innerHTML =
        `<div class="container">
            <div class="inner-wrap">
                <div class="inner-image">
                    <img src="${movie.imageUrl}" alt="flow">
                </div>
                <div class="inner-content">
                    <h2>${movie.name}</h2>
                    <div class="inner-basic">
                        <div class="inner-icon">
                            <i class="fa-solid fa-clock"></i>
                            <p>${movie.duration}</p>
                        </div>
                        <div class="inner-icon">
                            <i class="fa-solid fa-calendar"></i>
                            <p>${movie.releaseDate}</p>
                        </div>

                    </div>

                    <div class="inner-director">
                        <P>Đạo diễn: ${movie.director}</P>
                    </div>
                    <div class="inner-nation">
                        <P>Quốc gia: ${movie.nation}</P>
                    </div>
                    <div class="inner-category">
                        <p>Thể loại: </p>
                        <div class="category">
                            <a href="#">${movie.categories.join(', ')}</a>
                        </div>
                    </div>
                    <div class="inner-age">${movie.agePermisson}</div>
                    <div class="inner-button">
                        <a class="button button-one" id="button-trailer">TRAILER</a>
                        <a class="button button-two">ĐẶT VÉ</a>
                    </div>
                </div>
            </div>
        </div>`;

    var movieScript = document.getElementById('section-3');
    movieScript.innerHTML = `
    <div class="container">
            <div class="inner-wrap">
                <div class="inner-content">
                    <div class=" list inner-list"></div>
                    <h2 class="inner-title">Nội dung</h2>
                </div>
                <p>${movie.script}</p>
            </div>
        </div>`;

    const movieActor = document.getElementById('actor-list');
    movie.actors.forEach(actor => {
        if (actor) {
            const actorItem = document.createElement('div');
            actorItem.className = 'actor-item';

            actorItem.innerHTML = `
            <img src="${actor.actorImage}" alt="${actor.actorName}">
              <div class="inner-name">${actor.actorName}</div>`;
            movieActor.appendChild(actorItem);

        } else {
            movieActor.innerHTML = `<div><i>Chưa cập nhật thông tin diễn viên</i></div>`;
        }

    });

    const movieTrailer = document.getElementById('inner-iframe');
    movieTrailer.innerHTML = `
        <iframe width="860" height="515" src="${movie.trailer}"
            allowfullscreen></iframe>`;

    //Viết sự kiện cho nút trailer
    document.addEventListener('DOMContentLoaded', function () {
        const buttonTrailer = document.getElementById('button-trailer');
        const playTrailer = document.getElementById('play-button');
        const movieTrailer2 = document.getElementById('inner-iframe');
        const closeTrailer = document.getElementById('close');
        const overlay = document.getElementById('overlay');

       
        playTrailer.addEventListener('click', function () {
            overlay.style.display = 'block';
            movieTrailer2.style.display = 'block';
            closeTrailer.style.display = 'block'     
        });

        buttonTrailer.addEventListener('click', function () {
            overlay.style.display = 'block';
            movieTrailer2.style.display = 'block';
            closeTrailer.style.display = 'block'     
        });

        closeTrailer.addEventListener('click', function () {
            overlay.style.display = 'none';
            movieTrailer2.style.display = 'none';
            closeTrailer.style.display = 'none'
            movieTrailer2.querySelector('iframe').src = movieTrailer2.querySelector('iframe').src
        });
    });

    //Render lịch chiếu
    const cinemaSet = new Set();
    const scheduleSet = new Set();
    movies.forEach(movie => {
        console.log(movie.cinemas);
        movie.cinemas?.forEach(cinema => {
            cinemaSet.add(cinema.cinemaName);
            cinema.schedules.forEach(schedule => {
                scheduleSet.add(schedule.date);
            });
        });
    });
    scheduleSet.delete('2025-05-27');
    scheduleSet.delete('2025-05-28');
    scheduleSet.delete('2025-05-29');
    console.log(cinemaSet);
    console.log(scheduleSet);

    const scheduleList = document.getElementById('schedules');
    scheduleList.innerHTML = ''; // Xóa nội dung cũ 
    scheduleSet.forEach(date => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `${date}`;
        scheduleList.appendChild(scheduleItem);
    });
    

} else {
    console.error('Phim không tồn tại');
}

console.log(movieId);