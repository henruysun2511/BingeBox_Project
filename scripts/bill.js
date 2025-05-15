let billInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));
if (billInfo) {
    //do bookingSeats chứa nhiều mảng, nên cần trải phẳng
    let ticketBills = [];
    let stt = 0;

    Object.keys(billInfo.bookingSeats).forEach(seatType => {
        const seats = billInfo.bookingSeats[seatType];

        // Lặp qua từng ghế trong loại đó
        seats.forEach(seat => {
            stt +=1;
            ticketBills.push({
                id: stt,
                movie: billInfo.bookingName,
                room: billInfo.bookingRoom,
                cinema: billInfo.bookingCinema,
                time: billInfo.bookingTime,
                day: billInfo.bookingDate,
                seat: seat,
            });
        });
    });

    //render thông tin vé vào cột, hàng sinh tự động
    if (ticketBills) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        ticketBills.forEach(ticketBill => {
            stt += 1;

            //quét qr điều hướng sang trang vé
            const ticketUrl = new URL(window.location.origin + '/ticket.html');
            ticketUrl.searchParams.set('id', ticketBill.id);

            //Tạo qr code
            let qrDiv = document.createElement('div');
            qrDiv.id = `qrcode-${stt}`;
            qrDiv.style.width = '100px';
            qrDiv.style.height = '100px';

            // Render QR Code vào div
            new QRCode(qrDiv, {
                text: ticketUrl.href,
                width: 100,
                height: 100
            });

            let row = document.createElement('tr');
            row.innerHTML = `<td>${stt}</td>
                        <td>${ticketBill.movie}</td>
                        <td>${ticketBill.cinema}</td>
                        <td>${ticketBill.time}</td>
                        <td>${ticketBill.day}</td>
                        <td>${ticketBill.room}</td>
                        <td>${ticketBill.seat}</td>
                        <td></td>`;

            row.querySelector('td:last-child').appendChild(qrDiv);
            tbody.appendChild(row);

        })
    }


} else {
    console.log('Không có dữ liệu');
}

