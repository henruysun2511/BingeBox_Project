// Lấy dữ liệu từ Session Storage
const bookingInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));
//render cho thông tin chung
if (bookingInfo) {
    console.log(bookingInfo);
    //render bookingInfo vào thông tin vé
    const movieTicket = document.querySelector('.movie-ticket');
    movieTicket.innerHTML = `
                           <div class="movie-infomation">
                            <div class="movie-image">
                                <img src="${bookingInfo.bookingImage}" alt="${bookingInfo.bookingName}">
                            </div>
                            <div class="movie-content">
                                <div class="movie-title">${bookingInfo.bookingName}</div>
                                <ul>
                                    <li>${bookingInfo.bookingFormat}</li>
                                    <li>${bookingInfo.bookingSubtitle}</li>
                                    <li>${bookingInfo.bookingDuration}</li>
                                </ul>
                                <div class="movie-age">${bookingInfo.bookingAge}</div>
                            </div>
                        </div>

                        <div class="cinema">
                            <div class="cinema-name">${bookingInfo.bookingCinema}</div>
                            <div> - </div>
                            <div class="cinema-number">Rạp ${bookingInfo.bookingRoom}</div>
                        </div>
                        <div class="schedule">
                            <div class="showtime-number">Suất chiếu: ${bookingInfo.bookingTime}</div>
                            <div> - </div>
                            <div class="showtime-day">Chủ nhật, ${bookingInfo.bookingDate}</div>
                        </div>

                        <div class="seat-info-container">
                        </div>

                        <div class="total-price">
                            <div class="total-price-title">Tổng tiền</div>
                            <div class="total-price-number">0 đ</div>
                        </div>
                    </div>`;
}
else {
    console.log('storage không có dữ liệu');
}

