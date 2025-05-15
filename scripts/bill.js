let billInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));
if (billInfo) {
    //do bookingSeats chứa nhiều mảng, nên cần trải phẳng
    let ticketBills = [];
    let stt = 0;

    Object.keys(billInfo.bookingSeats).forEach(seatType => {
        const seats = billInfo.bookingSeats[seatType];

        // Lặp qua từng ghế trong loại đó
        seats.forEach(seat => {
            stt += 1;
            const ticket = {
                id: `ticket-${stt}`,
                movie: billInfo.bookingName,
                room: billInfo.bookingRoom,
                cinema: billInfo.bookingCinema,
                time: billInfo.bookingTime,
                day: billInfo.bookingDate,
                seat: seat,
                type: seatType.replace('seat-', '')
            };

            // Lưu thông tin vé vào LocalStorage
            localStorage.setItem(ticket.id, JSON.stringify(ticket));
            ticketBills.push(ticket);
        });
    });

    //render thông tin vé vào cột, hàng sinh tự động

    if (ticketBills.length > 0) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        ticketBills.forEach(ticketBill => {

            //quét qr điều hướng sang trang vé
            const ticketUrl = new URL('https://henruysun2511.github.io/BingeBox_Project/ticket.html');
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
            row.innerHTML = `<td>${ticketBill.id}</td>
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

