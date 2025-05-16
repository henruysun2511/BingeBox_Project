// Cấu hình Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyADkXqkeLw5OT6AXPJ3vcZziCHurFrKtBc",
    authDomain: "bingebox-e668d.firebaseapp.com",
    databaseURL: "https://bingebox-e668d-default-rtdb.firebaseio.com/", 
    projectId: "bingebox-e668d",
    storageBucket: "bingebox-e668d.appspot.com",
    messagingSenderId: "768145135183",
    appId: "1:768145135183:web:58b6f6b9c5ff5df890bc3a",
    measurementId: "G-F2DRWP83F1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Lấy dữ liệu từ sessionStorage
let billInfo = JSON.parse(sessionStorage.getItem('bookingInfo'));
if (billInfo) {
    let ticketBills = [];
    let stt = 0;

    Object.keys(billInfo.bookingSeats).forEach(seatType => {
        const seats = billInfo.bookingSeats[seatType];

        // Lặp qua từng ghế trong loại đó
        seats.forEach(seat => {
            stt += 1;

            // Tạo thông tin vé
            const ticket = {
                id: `ticket-${stt}`, // Sửa lại cho đúng template string
                movie: billInfo.bookingName,
                room: billInfo.bookingRoom,
                cinema: billInfo.bookingCinema,
                time: billInfo.bookingTime,
                day: billInfo.bookingDate,
                seat: seat,
                type: seatType.replace('seat-', ''),
                subtitle: billInfo.bookingSubtitle,
                format: billInfo.bookingFormat
            };

            console.log(ticket);

            // Lưu thông tin vào Firebase
            firebase.database().ref('tickets/' + ticket.id).set(ticket);

            ticketBills.push(ticket);
        });
    });

    // Render thông tin vé vào bảng
    if (ticketBills.length > 0) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';

        ticketBills.forEach((ticketBill, index) => {
            // Tạo link QR điều hướng sang trang vé
            const ticketUrl = new URL('https://henruysun2511.github.io/BingeBox_Project/ticket.html');
            ticketUrl.searchParams.set('id', ticketBill.id);

            // Tạo QR Code
            let qrDiv = document.createElement('div');
            qrDiv.id = `qrcode-${index}`;
            qrDiv.style.width = '100px';
            qrDiv.style.height = '100px';

            new QRCode(qrDiv, {
                text: ticketUrl.href,
                width: 100,
                height: 100
            });

            // Tạo hàng mới trong bảng
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${ticketBill.movie}</td>
                <td>${ticketBill.cinema}</td>
                <td>${ticketBill.time}</td>
                <td>${ticketBill.day}</td>
                <td>${ticketBill.room}</td>
                <td>${ticketBill.seat}</td>
                <td></td>
            `;

            // Thêm QR vào cột cuối cùng
            row.querySelector('td:last-child').appendChild(qrDiv);
            tbody.appendChild(row);
        });
    }
} else {
    console.log('Không có dữ liệu');
}
