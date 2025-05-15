import { movies } from "./objectForCinema.js";
import { movieComingSoons } from "./objectForCinema.js";

// Lấy id phim từ URL

const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');


const movie = movies.find(m => m.id === movieId) || movieComingSoons.find(m => m.id === movieId);

if (movie) {
    let movieBigPoster = document.getElementById('film-poster-big');
    movieBigPoster.innerHTML = `
        <img src="${movie.bigPoster}" alt="${movie.name}">
        <div class="film-overlay"></div>
        <div class="film-icon-play" id="play-button" href="">
            <i class="fa-solid fa-circle-play"></i>
        </div>
    `;

    let movieCommonInformation = document.getElementById('section-2');
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

    let movieScript = document.getElementById('section-3');
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
    movieActor.innerHTML = '';
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
        <iframe width="860" height="515" frameborder="0" src="${movie.trailer}"
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

    movie.cinemas?.forEach(cinema => {
        cinemaSet.add(cinema.cinemaName);
        cinema.schedules.forEach(schedule => {
            scheduleSet.add(schedule.date);
        });
    });


    const scheduleList = document.getElementById('schedules');
    scheduleList.innerHTML = ''; // Xóa nội dung cũ 
    scheduleSet.forEach(date => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `${date}`;
        scheduleList.appendChild(scheduleItem);

        //mặc định luôn hiển thị lịch chiếu trang đầu tiên
        const firstScheduleItem = document.querySelector('.schedule-item');
        if (firstScheduleItem) {
            firstScheduleItem.click();
        }

        scheduleItem.addEventListener('click', () => hienThiSuatChieuTheoNgay(scheduleItem.innerHTML));

    });

    //Viết sự kiên ấn ngày chiếu ra lịch chiếu tương ứng
    function hienThiSuatChieuTheoNgay(ngayChieu) {
        let showtimes = document.querySelector('.showtimes');
        showtimes.innerHTML = '';

        movie.cinemas.forEach(cinema => {
            let showtimeItem = document.createElement('div');
            showtimeItem.className = 'showtime-item';
            showtimeItem.innerHTML = ` <div class="cinema">${cinema.cinemaName}</div>`;


            showtimes.appendChild(showtimeItem);

            //lọc ra lịch chiếu theo ngày
            let timeFilter = cinema.schedules.filter(schedule => schedule.date === ngayChieu);
            if (timeFilter.length > 0) {
                let times = document.createElement('div');
                times.className = 'times';

                timeFilter[0].showtimes.forEach(showtime => {
                    let timeItem = document.createElement('div');
                    timeItem.className = "time-item";
                    timeItem.innerHTML = ` <div class="time-number">${showtime.time}</div>`;

                    //Thêm thông tin phụ đề và định dạng cho từng suất chiếu
                    let movieFormat = document.createElement('div');
                    movieFormat.className = 'time-info';
                    movieFormat.innerHTML = `<div class="time-subtitle">${movie.subtitle}</div>
                                                <div class="time-format">${movie.format}</div>`;

                    timeItem.appendChild(movieFormat);

                    times.appendChild(timeItem);

                    //Viết sự kiện ấn vào khung giờ điều hướng sang chỗ đặt vé
                    let timeNumber = timeItem.querySelector('.time-number');
                    if (timeNumber) {
                        timeNumber.addEventListener('click', () => {
                            //lưu thông tin suất chiếu vào session storage
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
                                bookingDate: timeFilter[0].date
                            }
                            sessionStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));

                            window.location.href = `./booking.html`;
                        });
                    }

                });

                showtimeItem.appendChild(times);
            }
        });
        //showtimes chứa các showtimeItem, mỗi showtimeItem chứa tên rạp và các times, times lại chứa các timeItem, nói chung là sinh tự động kkk
    }

    if (movieComingSoons.includes(movie)) {
        let showtimes = document.querySelector('.showtimes');
        showtimes.innerHTML = 'Chưa có lịch chiếu';
        showtimes.style.fontSize = '20px';
        showtimes.style.textAlign = 'center';
        showtimes.style.fontStyle = 'italic';

        let buttonn = document.querySelector('.inner-button');
        buttonn.innerHTML = `<a href="#" class="button button-one" id="button-trailer">TRAILER</a>
                        <a href="#" class="button button-two">REMIND ME </a>`;
        let buttonRemind = document.querySelector('.button-two');
        buttonRemind.style.backgroundColor = '#FFC107';
    }


} else {
    console.error('Phim không tồn tại');
}

console.log(movieId);






