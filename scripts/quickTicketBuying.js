import { movies } from './objectForCinema.js';

const selectMovie = document.getElementById('select-movie');
const selectCinema = document.getElementById('select-cinema');
const selectDate = document.getElementById('select-date');
const selectShowtime = document.getElementById('select-showtime');
selectCinema.disabled = true;
selectDate.disabled = true;
selectShowtime.disabled = true;

const quickticketButton = document.querySelector('.buying');
quickticketButton.disabled = true;


if (movies.length > 0) {
    renderMovieSelect();
}

function renderMovieSelect() {
    movies.forEach(movie => {
        let option = document.createElement('option');
        option.value = movie.id;
        option.text = movie.name;
        selectMovie.appendChild(option);
    });
}

function renderCinemaSelectByMovieName(movieName) {
    const filteredMovies = movies.filter(movie => movie.name === movieName);
    filteredMovies.forEach(movie => {
        movie.cinemas.forEach(cinema => {
            let option = document.createElement('option');
            option.value = movie.id;
            option.text = cinema.cinemaName;
            selectCinema.appendChild(option);
        });
    });


}

function renderDateSelectByMovieNameAndCinemaName(movieName, cinemaName) {
    const filteredMovies = movies.filter(movie => movie.name === movieName);
    filteredMovies.forEach(movie => {
        movie.cinemas.forEach(cinema => {
            if (cinema.cinemaName === cinemaName) {
                cinema.schedules.forEach(schedule => {
                    let option = document.createElement('option');
                    option.value = movie.id;
                    option.text = schedule.date;
                    selectDate.appendChild(option);
                });
            }
        });
    });

}

function renderShowtimeSelectByMovieNameCinemaNameAndDate(movieName, cinemaName, date) {
    const filteredMovies = movies.filter(movie => movie.name === movieName);
    filteredMovies.forEach(movie => {
        movie.cinemas.forEach(cinema => {
            if (cinema.cinemaName === cinemaName) {
                cinema.schedules.forEach(schedule => {
                    if (schedule.date === date) {
                        schedule.showtimes.forEach(showtime => {
                            let option = document.createElement('option');
                            option.value = movie.id;
                            option.text = showtime.time;
                            selectShowtime.appendChild(option);
                        });
                    }
                });
            }
        });
    });
}

function resetSelect(selectElement, placeholderText) {
    selectElement.innerHTML = `<option disabled selected>${placeholderText}</option>`;
    selectElement.disabled = true;
}

selectMovie.addEventListener('change', function () {
    resetSelect(selectCinema, 'Chọn rạp');
    resetSelect(selectDate, 'Chọn ngày');
    resetSelect(selectShowtime, 'Chọn suất chiếu');
    quickticketButton.disabled = true;

    selectCinema.disabled = false;
    const selectedMovieName = selectMovie.options[selectMovie.selectedIndex].text;
    renderCinemaSelectByMovieName(selectedMovieName);
});

selectCinema.addEventListener('change', function () {
    resetSelect(selectDate, 'Chọn ngày');
    resetSelect(selectShowtime, 'Chọn suất chiếu');
    quickticketButton.disabled = true;

    selectDate.disabled = false;
    const selectedMovieName = selectMovie.options[selectMovie.selectedIndex].text;
    const selectedCinemaName = selectCinema.options[selectCinema.selectedIndex].text;
    renderDateSelectByMovieNameAndCinemaName(selectedMovieName, selectedCinemaName);
});

selectDate.addEventListener('change', function () {
    resetSelect(selectShowtime, 'Chọn suất chiếu');
    quickticketButton.disabled = true;

    selectShowtime.disabled = false;
    const selectedMovieName = selectMovie.options[selectMovie.selectedIndex].text;
    const selectedCinemaName = selectCinema.options[selectCinema.selectedIndex].text;
    const selectedDate = selectDate.options[selectDate.selectedIndex].text;
    renderShowtimeSelectByMovieNameCinemaNameAndDate(selectedMovieName, selectedCinemaName, selectedDate);
});

selectShowtime.addEventListener('change', function () {
    quickticketButton.disabled = false;
});

quickticketButton.addEventListener('click', function () {
    const selectedMovieName = selectMovie.options[selectMovie.selectedIndex].text;
    const selectedCinemaName = selectCinema.options[selectCinema.selectedIndex].text;
    const selectedDate = selectDate.options[selectDate.selectedIndex].text;
    const selectedShowtime = selectShowtime.options[selectShowtime.selectedIndex].text;

    const selectedMovie = movies.find(movie => movie.name === selectedMovieName);
    const selectedCinema = selectedMovie?.cinemas.find(cinema => cinema.cinemaName === selectedCinemaName);
    const selectedSchedule = selectedCinema?.schedules.find(schedule => schedule.date === selectedDate);
    const selectedTime = selectedSchedule?.showtimes.find(showtime => showtime.time === selectedShowtime);

    if (selectedMovie && selectedCinema && selectedShowtime) {
        const bookingInfo = {
            bookingImage: selectedMovie.imageUrl,
            bookingName: selectedMovie.name,
            bookingFormat: selectedMovie.format,
            bookingAge: selectedMovie.agePermisson,
            bookingSubtitle: selectedMovie.subtitle,
            bookingDuration: selectedMovie.duration,
            bookingCinema: selectedCinema.cinemaName,
            bookingRoom: selectedTime.room,
            bookingTime: selectedTime.time,
            bookingDate: selectedSchedule.date
        };

        // Lưu thông tin đặt vé vào session storage
        sessionStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
        // Chuyển hướng đến trang mua vé
        window.location.href = `./booking.html`;
    
    }
});


