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
                    image: movie.imageUrl,
                    name: movie.name,
                    format: movie.format,
                    cinema: cinema.cinemaName,
                    room: showtime.room,
                    date: schedule.date,
                    time: showtime.time,
                    seat: seats
                };
                magicBoxMovieList.push(magicBoxMovie);
            });
        });
    });
});

//lấy ngày chiếu từ mảng
const dateSet = new Set();
magicBoxMovieList.forEach(movie => {
    dateSet.add(movie.date);
});

const dateList = document.querySelector('.dates');
dateList.innerHTML = '';
dateSet.forEach(date => {
    const dateItem = document.createElement('div');
    dateItem.className = 'date-item';
    dateItem.innerHTML = `${date}`;

    dateList.appendChild(dateItem);

    //click ngày chiếu thì lọc mảng theo ngày chiếu
    dateItem.addEventListener('click', () => {
        const magicBoxMovieListByDay = magicBoxMovieList.filter(movie =>
            movie.date.trim() === dateItem.textContent.trim()
        );
        console.log(magicBoxMovieListByDay);

        // Lưu mảng đã lọc vào sessionStorage 
        sessionStorage.setItem('magicBoxMovieListByDay', JSON.stringify(magicBoxMovieListByDay));

        // Điều hướng sang trang mở hộp
        window.location.href = 'openMagicBox.html';    
    });
    
});


//Viết sự kiện cho nút mua ngay
const btnMuaNgay = document.querySelector('.button');
const section5 = document.querySelector('.section-5');
const overlay = document.querySelector('.dark-overlay');
const btnX = document.querySelector('.x');

btnMuaNgay.addEventListener('click', () => {
    section5.style.display = 'block'; 
    overlay.style.display = 'block'; 
});

btnX.addEventListener('click', ()=>{
    section5.style.display = 'none'; 
    overlay.style.display = 'none';
});








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
document.addEventListener("DOMContentLoaded", function () {
    const movieData = '{"name": "Avengers: Endgame", "time": "10:00 AM"}'; // Dữ liệu mẫu
    new QRCode(document.getElementById("qrcode"), {
        text: movieData,  // Dữ liệu được mã hóa vào QR code
        width: 100,
        height: 100
    });
});











