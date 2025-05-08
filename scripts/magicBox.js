import { movies } from "./objectForCinema.js";


const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // Dãy ghế
const maxSeats = 20;   // Mỗi dãy có 20 ghế

// Hàm sinh ngẫu nhiên một ghế
const generateRandomSeat = () => {
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    const randomNumber = Math.floor(Math.random() * maxSeats) + 1;
    return `${randomRow}${randomNumber}`;
};

//Khởi tạo mảng phim rỗng chứa danh sách phim
const magicBoxMovieList = [];

movies.forEach(movie => {
    movie.cinemas?.forEach(cinema => {
        cinema.schedules?.forEach(schedule => {
            schedule.showtimes?.forEach(showtime => {
                // Nếu không có danh sách ghế, sinh ngẫu nhiên một ghế
                const seats = generateRandomSeat();

                const magicBoxMovie = {
                    name: movie.name,
                    format: movie.format,
                    cinema: cinema.cinemaName,
                    room: showtime.room,
                    time: showtime.time,
                    seats: seats
                };
                magicBoxMovieList.push(magicBoxMovie);
            });
        });
    });
});
console.log(magicBoxMovieList);


const randomMovie = () => {
    //Random một phim ngẫu nhiên trong khoảng [1, số lượng phim-1]
    let minMovie = 1;
    let maxMovie = magicBoxMovieList.length - 1;
    const randomIndex = Math.floor(Math.random() * (maxMovie - minMovie + 1)) + minMovie;

    const randomMovie = magicBoxMovieList[randomIndex];
    return randomMovie;
}
console.log(randomMovie());




//Sinh qr tự động cho từng phim đó
// document.addEventListener("DOMContentLoaded", function () {
//     const movieData = getRandomMovie();
//     console.log(movieData);

//     // Chuyển đối tượng thành chuỗi JSON
//     const movieJson = JSON.stringify(movieData);

//     new QRCode(document.getElementById("qrcode"), {
//         text: movieJson,  // Lưu toàn bộ thông tin vào mã QR
//         width: 200,
//         height: 200,
//     });
// });


        //Đảm bảo mã JS chỉ chạy sau khi DOM đã tải xong
        document.addEventListener("DOMContentLoaded", function() {
            const movieData = '{"name": "Avengers: Endgame", "time": "10:00 AM"}'; // Dữ liệu mẫu
            new QRCode(document.getElementById("qrcode"), {
                text: movieData,  // Dữ liệu được mã hóa vào QR code
                width: 100,
                height: 100
            });
        });











