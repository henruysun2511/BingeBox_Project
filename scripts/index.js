import { movieComingSoons, movies, news, promotions } from './objectForCinema.js';

//Render cho phim đang chiếu
let movieList = document.getElementById('film-list');
movieList.innerHTML = "";
if (movies) {
    movies.forEach(item => {
        let colDiv = document.createElement('div');
        colDiv.className = "col-xl-3 col-lg-4 col-md-4 col-sm-6";

        colDiv.innerHTML = `
            <div class="inner-film">
                <div class="film-detail">
                    <a>
                        <div class="film-poster">
                            <img src="${item.imageUrl}" alt="${item.name}">
                            <div class="inner-icon">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                            <div class="inner-button">
                                <button>
                                    <a href="#">
                                        <i class="fa-solid fa-ticket"></i>
                                        MUA VÉ NGAY
                                    </a>
                                </button>
                            </div>
                        </div>
                    </a>
                    <ul>
                        <li><p class="infor age-permission">${item.agePermisson}</p></li>
                        <li><p class="infor subtitle">${item.subtitle}</p></li>
                        <li><p class="infor film-format">${item.format}</p></li>
                    </ul>
                    <a href="#"><h2 class="film-name">${item.name}</h2></a>
                    <h3 class="film-category">Thể loại: ${item.categories.join(', ')}</h3>
                </div>
            </div>
        `;

        movieList.appendChild(colDiv);

        //Click vào phim sẽ chuyển đến trang chi tiết phim
        colDiv.addEventListener('click', function () {
            window.location.href = `movieDetail.html?id=${item.id}`; //Truyền id của đối tượng phim được click
        });

        //Viết sự kiện ấn vào icon trailer
        const playTrailer = colDiv.querySelector('.inner-icon');
        const movieTrailer = document.getElementById('inner-iframe');
        const closeTrailer = document.getElementById('close');
        const overlay = document.getElementById('overlay');

        playTrailer.addEventListener('click', function (event) {
            event.stopPropagation();

            overlay.style.display = 'block';
            movieTrailer.style.display = 'block';
            closeTrailer.style.display = 'block';

            // Cập nhật src iframe đúng trailer của phim được click
            movieTrailer.innerHTML = `
            <iframe width="860" height="515" src="${item.trailer}" frameborder="0" allowfullscreen></iframe>
        `;
        });

        closeTrailer.addEventListener('click', function () {
            overlay.style.display = 'none';
            movieTrailer.style.display = 'none';
            closeTrailer.style.display = 'none';

            // Reset iframe để ngừng video
            movieTrailer.innerHTML = '';
        });

    });
}


//Render cho phim sắp chiếu
let movieComingSoonList = document.getElementById('film-comingsoon-list');
movieComingSoonList.innerHTML = "";
if (movieComingSoons) {
    movieComingSoons.forEach(item => {
        let colDiv2 = document.createElement('div');
        colDiv2.className = "col-xl-3 col-lg-4 col-md-4 col-sm-6";

        colDiv2.innerHTML = `<div class="inner-film">
                                    <div class="film-detail">
                                        <a>
                                            <div class="film-poster">                                             
                                                <img src="${item.imageUrl}">
                                                <div class="inner-icon">
                                                   <i class="fa-regular fa-circle-play"></i>
                                                </div>                                               
                                            </div>
                                        </a>
                                        <ul>
                                            <li>
                                                <p class="infor age-permission">${item.agePermisson}</p>
                                            </li>
                                            <li>
                                                <p class="infor subtitle">${item.subtitlen}</p>
                                            </li>
                                            <li>
                                                <p class="infor film-format">${item.format}</p>
                                            </li>
                                        </ul>
                                        <a href="#">
                                            <h2 class="film-name">${item.name}</h2>
                                        </a>
                                        <h3 class="film-category">Thể loại: ${item.categories.join(', ')}</h3>
                                        <p class="film-release">${item.releaseDate}</p>
                                    </div>
                                </div>`;
        movieComingSoonList.appendChild(colDiv2);

        colDiv2.addEventListener('click', function () {
            window.location.href = `movieDetail.html?id=${item.id}`;
        });

        //Viết sự kiện ấn vào icon trailer
        const playTrailer = colDiv2.querySelector('.inner-icon');
        const movieTrailer = document.getElementById('inner-iframe');
        const closeTrailer = document.getElementById('close');
        const overlay = document.getElementById('overlay');

        playTrailer.addEventListener('click', function (event) {
            event.stopPropagation();

            overlay.style.display = 'block';
            movieTrailer.style.display = 'block';
            closeTrailer.style.display = 'block';

            // Cập nhật src iframe đúng trailer của phim được click
            movieTrailer.innerHTML = `
            <iframe width="860" height="515" src="${item.trailer}" frameborder="0" allowfullscreen></iframe>
        `;
        });

        closeTrailer.addEventListener('click', function () {
            overlay.style.display = 'none';
            movieTrailer.style.display = 'none';
            closeTrailer.style.display = 'none';

            // Reset iframe để ngừng video
            movieTrailer.innerHTML = '';
        });
    });
}

//Render cho cột khuyến mãi
let promotionList = document.querySelector('.promotion');
promotionList.innerHTML = "";
if (promotions) {
    promotions.forEach(promotion => {
        let promotionItem = document.createElement('div');
        promotionItem.className = "promotion-image";
        promotionItem.innerHTML = `<img src = ${promotion.image}>`;

        promotionList.appendChild(promotionItem);

        promotionItem.addEventListener('click', function () {
            window.location.href = `./promotionDetail.html?id=${promotion.id}`;
        });
    });
}

//Render cho phần tin tức
if (news) {
    // Chuyển object thành mảng, lấy 4 phần tử đầu tiên
    const items = Object.values(news).slice(0, 4);

    // Lấy phần tử đầu tiên render vào phần big
    const firstItem = items[0];
    if (firstItem) {
        const firstImage = firstItem.images[0].src;
        const caption = firstItem.images[0].caption;
        const bigNew = document.querySelector('.new-item-big');

        bigNew.innerHTML = `
            <img src="${firstImage}" alt="">
            <div class="new-title">${caption}</div>
        `;

        let newItemId = firstItem.id || firstItem;

        bigNew.addEventListener('click', function () {
            window.location.href = `newDetail.html?id=1`; // Chuyển đến trang chi tiết tin tức
        });
    }

    // Render các phần tử còn lại vào phần small
    const smallNew = document.querySelector('.new-item-small');
    smallNew.innerHTML = '';
    items.slice(1).forEach((newItem, index) => {
        const firstImage = newItem.images[0].src;
        const caption = newItem.images[0].caption;

        const smallNewItem = document.createElement('div');
        smallNewItem.className = 'new-item';

        smallNewItem.innerHTML = `
            <img src="${firstImage}" alt="">
            <div class="new-title">${caption}</div>
        `;

        smallNew.appendChild(smallNewItem);

        smallNewItem.addEventListener('click', function () {
            window.location.href = `newDetail.html?id=${index + 2}`; // Chuyển đến trang chi tiết tin tức
        });
    });
}



