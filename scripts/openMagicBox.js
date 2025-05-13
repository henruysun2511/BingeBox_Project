//lấy dữ liệu từ session storage
const magicBoxMovieListByDay = JSON.parse(sessionStorage.getItem('magicBoxMovieListByDay'));
console.log(magicBoxMovieListByDay);


//Viết sự kiện ấn vào hộp
const magicBox = document.querySelector('.box-image');
magicBox.addEventListener('click', () => {
    magicBox.innerHTML = ` <img src="assets/images/magicBoxs/openbox.png" alt="">`;
    randomMovie();

});

//Hàm random phim và render phim đó
function randomMovie() {
    //Random một phim ngẫu nhiên trong khoảng [1, số lượng phim-1]
    let minMovie = 1;
    let maxMovie = magicBoxMovieListByDay.length - 1;
    const randomIndex = Math.floor(Math.random() * (maxMovie - minMovie + 1)) + minMovie;

    const randomMovie = magicBoxMovieListByDay[randomIndex];
    console.log(randomMovie);

    //Ảnh rỗng
    let specialImage = "";

    const movieRender = document.querySelector('.movie-random');
    movieRender.style.display = "block";

    if (randomMovie.time < "14:00") {
        movieRender.style.background = "gray";
        specialImage = "./assets/images/magicBoxs/oops.png";
    }
    else if (randomMovie.time >= "19:30" && randomMovie.time <= "22:00") {
        movieRender.style.background = "#ffde59";
        specialImage = "./assets/images/magicBoxs/khunggiovang.png";
    }
    else if (randomMovie.name == "XỨ CÁT: PHẦN 2") {
        movieRender.style.background = "linear-gradient(90deg, #ff5757, #8c52ff)";
        movieRender.style.color = "white";
        specialImage = "./assets/images/magicBoxs/secret.png";
    } else{
        movieRender.style.background = "white";
        movieRender.style.color = "black";
    }

    movieRender.innerHTML = `<div class="movie-content">
                <div class="movie-image">
                    <img src="${randomMovie.image}" alt="Captain">
                </div>
                <div class="movie-info">
                    <div class="movie-title">${randomMovie.name}</div>
                    <ul>
                        <li>Giờ: <b>${randomMovie.time}</b></li>
                        <li>Phòng: <b>${randomMovie.room}</b></li>
                        <li>Ghế: <b>${randomMovie.seat}</b></li>
                        <li>Định dạng: <b>${randomMovie.format}</b></li>
                        <li>Ngày: <b>${randomMovie.date}</b></li>
                        <li>Rạp: <b>${randomMovie.cinema}</b></li>
                    </ul>
                    <div id="qrcode"></div>
                </div>
            </div>
            <h1>CHÚC QUÝ KHÁCH XEM PHIM<br> VUI VẺ!</h1>
            <div class="movie-special">
                <img src="${specialImage}">
            </div>`;
}


