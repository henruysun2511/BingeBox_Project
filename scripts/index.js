import { movieComingSoons, movies } from './objectForCinema.js';

function renderMovieList(className, movies){
    var movieList = document.getElementById(className);

    movies.forEach(item => {
        var colDiv = document.createElement('div');
        colDiv.className = "col-xl-3 col-lg-4 col-md-4 col-sm-6";
    
        colDiv.innerHTML = `
            <div class="inner-film">
                <div class="film-detail">
                    <a>
                        <div class="film-poster">
                            <img src="${item.imageUrl}" alt="${item.name}">
                            <div class="inner-icon">
                                <a href="${item.trailer}" target="_blank"><i class="fa-regular fa-circle-play"></i></a>
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
        colDiv.addEventListener('click', function() {
            window.location.href = `movieDetail.html?id=${item.id}`; //Truyền id của đối tượng phim được click
        });
    });

}

renderMovieList('film-list', movies);
renderMovieList('film-comingsoon-list', movieComingSoons);


