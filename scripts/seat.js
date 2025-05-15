
const seat = document.querySelector('.seatBox');
if (seat) {
    //Khởi tạo từng hàng ghế
    const seatStandardsA = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18"];
    const seatStandardsB = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18"];
    const seatStandardsC = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "C17", "C18"];
    const seatVipsD = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "B13", "D14", "D15", "D16", "D17", "D18"];
    const seatVipsE = ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "A13", "E14", "E15", "E16", "E17", "E18"];
    const seatVipsF = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "B13", "F14", "F15", "F16", "F17", "F18"];
    const seatVipsG = ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12", "G13", "G14", "G15", "G16", "G17", "G18"];
    const seatVipsH = ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18"];
    const seatSweetboxsI = ["I1", "I2", "I3", "I4", "I5", "I6", "I7"];

    //seatTypes: hàng ghế muốn thêm
    //seatClass: loại ghế muốn thêm
    function creatSeat(seatTypes, seatClass) {
        let row = document.createElement('div');
        row.className = 'row';
        seatTypes.forEach(seatType => {
            row.innerHTML += `<div class="seat ${seatClass}">${seatType}</div>`

        });
        seat.appendChild(row);
    }
    creatSeat(seatStandardsA, 'seat-standard');
    creatSeat(seatStandardsB, 'seat-standard');
    creatSeat(seatStandardsC, 'seat-standard');
    creatSeat(seatVipsD, 'seat-vip');
    creatSeat(seatVipsE, 'seat-vip');
    creatSeat(seatVipsF, 'seat-vip');
    creatSeat(seatVipsG, 'seat-vip');

    //Tạo ghế đôi
    function creatSeatSweetbox(seatTypes) {
        let row = document.createElement('div');
        row.className = 'row row-center';
        seatTypes.forEach(seatType => {
            row.innerHTML += `<div class="sweetbox-active">
                    <div class="seat seat-sweetbox">${seatType}</div>
                    <div class="seat seat-sweetbox">${seatType}</div>
                </div>`

        });
        seat.appendChild(row);
    }
    creatSeatSweetbox(seatSweetboxsI);

    //Giá tiền cho từng loại ghế
    const seatPrices = {
        'seat-standard': 70000,
        'seat-vip': 120000,
        'seat-sweetbox': 150000
    };

    //Phân ghế được chọn theo loại
    let selectedSeatsByType = {
        'seat-standard': [],
        'seat-vip': [],
        'seat-sweetbox': []
    };

    //Thêm sự kiện click cho từng ghế 
    let seats = document.querySelectorAll('.seat');
    let totalPrice = 0;

    seats.forEach(seat => {
        seat.addEventListener('click', function () {
            const seatType = [...seat.classList].find(cls => seatPrices[cls]); //kiểm tra xem class có tồn tại trong seatPrices, trả về class đó

            const sweetbox = seat.closest('.sweetbox-active'); //kiểm tra xem seat có div cha là .sweetbox-active không

            // Nếu ghế đã chọn
            if (seat.classList.contains('selected')) {
                if (sweetbox) {
                    let sweetboxSeats = sweetbox.querySelectorAll('.seat-sweetbox');
                    sweetboxSeats.forEach(sweetSeat => {
                        sweetSeat.classList.remove('selected');
                        selectedSeatsByType[seatType] = selectedSeatsByType[seatType].filter(s => s !== sweetSeat.textContent);
                    });
                } else {
                    seat.classList.remove('selected');
                    selectedSeatsByType[seatType] = selectedSeatsByType[seatType].filter(s => s !== seat.textContent);
                }
            }
            //Nếu ghế chưa được chọn 
            else {
                if (sweetbox) {
                    let sweetboxSeats = sweetbox.querySelectorAll('.seat-sweetbox');
                    sweetboxSeats.forEach(sweetSeat => {
                        sweetSeat.classList.add('selected');
                        selectedSeatsByType[seatType].push(sweetSeat.textContent);
                    });
                } else {
                    seat.classList.add('selected');
                    selectedSeatsByType[seatType].push(seat.textContent);
                }
            }
            console.log(selectedSeatsByType[seatType]);
            renderTicket(); //mỗi lần click hiển thị lại ghế và tổng tiền tương ứng
        });
    });


    //render tính tiền vé
    function renderTicket() {
        let seatInfoContainer = document.querySelector('.seat-info-container');
        seatInfoContainer.innerHTML = '';
        let seatTotalPrice = 0;

        Object.keys(selectedSeatsByType).forEach(seatType => {
            const seats = selectedSeatsByType[seatType];

            if (seats.length > 0) {
                const price = seatPrices[seatType];
                let seatPriceByType = price * seats.length;
                seatTotalPrice += seatPriceByType;

                let seatInfo = document.createElement('div');
                seatInfo.classList.add('seat-info');
                seatInfo.innerHTML = `
                <div class="seat-selected">
                    <div class="seat-total">${seats.length} Ghế ${seatType.replace('seat-', '')}</div>
                    <div class="seat-number">Ghế: ${seats.join(', ')}</div>
                </div>
                <div class="seat-price">${seatPriceByType.toLocaleString()} đ</div>
            `;

                seatInfoContainer.appendChild(seatInfo);
            }
        });

        //Lưu ghế cho hóa đơn
        sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsByType));

        // Lưu tổng tiền vé vào SessionStorage
        sessionStorage.setItem('seatTotalPrice', seatTotalPrice);
        updateTotalPrice();
    }

    


} else {
    console.log('Khởi tạo ghế thất bại');
}

