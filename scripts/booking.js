// Lấy dữ liệu từ Session Storage
let bookingInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));
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
                            <div class="cinema-name">Rạp: ${bookingInfo.bookingCinema}</div>
                            <div> - </div>
                            <div class="cinema-number">${bookingInfo.bookingRoom}</div>
                        </div>
                        <div class="schedule">
                            <div class="showtime-number">Suất chiếu: ${bookingInfo.bookingTime}</div>
                            <div> - </div>
                            <div class="showtime-day">Chủ nhật, ${bookingInfo.bookingDate}</div>
                        </div>

                        <div class="seat-info-container">
                        </div>

                        <div class="food-info-container">
                        </div>

                        <div class="promotion-info-container">
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

//Viết sự kiện cho nút tiếp theo/quay lại
const steps = ['seat', 'food', 'payment'];
const title = ['Bước 1: Chọn ghế', 'Bước 2: Chọn đồ ăn', 'Bước 3: Thanh toán'];
let currentStep = 0;

function showStep() {
    // Ẩn tất cả các bước
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));

    // Hiển thị bước hiện tại
    document.getElementById(steps[currentStep]).classList.add('active');
    document.querySelector('.inner-title').innerHTML = `${title[currentStep]}`;

    // Cập nhật trạng thái của nút
    btnPrev.disabled = (currentStep === 0);
    btnNext.innerText = (currentStep === steps.length - 1) ? "Hoàn tất" : "Tiếp theo";
}

// Hàm chuyển bước tiếp theo
let btnNext = document.querySelector('.button-next');
btnNext.addEventListener('click', nextStep);
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
    } else {
        // Lấy thông tin ghế, đồ ăn, giá từ sessionStorage
        const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats')) || {};
        const selectedFoods = JSON.parse(sessionStorage.getItem('selectedFoods')) || [];
        const selectedPromotion = JSON.parse(sessionStorage.getItem('promotionInfo')) || null;
        const seatTotalPrice = parseInt(sessionStorage.getItem('seatTotalPrice')) || 0;
        const foodTotalPrice = parseInt(sessionStorage.getItem('foodTotalPrice')) || 0;
        const promotionTotalPrice = parseFloat(sessionStorage.getItem('promotionTotalPrice')) || 0;

        const totalPrice = (seatTotalPrice + foodTotalPrice) * (1 - promotionTotalPrice);

        if (!selectedSeats || Object.keys(selectedSeats).length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Chưa chọn ghế',
                text: 'Vui lòng chọn ít nhất 1 ghế để tiếp tục!',
            }).then(() => {
                window.location.reload();
            });
            return;
        }

        // Lấy thông tin phim
        const bookingInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));

        if (bookingInfo) {
            const bill = {
                movie: bookingInfo.bookingName,
                cinema: bookingInfo.bookingCinema,
                room: bookingInfo.bookingRoom,
                date: bookingInfo.bookingDate,
                time: bookingInfo.bookingTime,
                seats: selectedSeats,
                foods: selectedFoods,
                seatTotalPrice,
                foodTotalPrice,
                promotion: selectedPromotion,
                promotionDiscount: promotionTotalPrice,
                totalPrice,
                createdAt: new Date().toISOString()
            };

            //Lưu thông tin phim và ghế để render ở bill.html
            bookingInfo.bookingSeats = selectedSeats;
            sessionStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));

            // Lưu hóa đơn vào localStorage để render ở profile.html
            const existingBills = JSON.parse(localStorage.getItem('myBills')) || [];
            existingBills.push(bill);
            localStorage.setItem('myBills', JSON.stringify(existingBills));
        }

        // Chuyển sang trang hóa đơn
        Swal.fire({
            icon: 'success',
            title: 'Hoàn thành',
            text: 'Đặt vé thành công',
        }).then(() => {
            window.location.href = `bill.html`;
        });
      
    }
    showStep();
}

// Hàm quay lại bước trước
let btnPrev = document.querySelector('.button-prev');
btnPrev.addEventListener('click', prevStep);
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
    }
    showStep();
}

// Hiển thị bước đầu tiên khi load trang
showStep();

//Tính tổng tiền
function updateTotalPrice() {
    const totalPriceElement = document.querySelector('.total-price-number');

    // Lấy giá trị từ SessionStorage
    const seatTotalPrice = parseInt(sessionStorage.getItem('seatTotalPrice')) || 0;
    const foodTotalPrice = parseInt(sessionStorage.getItem('foodTotalPrice')) || 0;
    const promotionTotalPrice = parseFloat(sessionStorage.getItem('promotionTotalPrice')) || 0;

    // Tính tổng tiền
    const totalPrice = (seatTotalPrice + foodTotalPrice) * (1 - promotionTotalPrice);

    // Cập nhật giao diện
    if (totalPriceElement) {
        totalPriceElement.textContent = `${totalPrice.toLocaleString()} đ`;
    }
}

