import { movies, movieComingSoons } from "./objectForCinema.js";

const user = JSON.parse(localStorage.getItem('currentUser'));
if (!user) {
  window.location.href = '../login/login.html';
}
const info = document.querySelectorAll('.col2-set span');
const hello = document.querySelector('.hello strong');
hello.textContent = `Xin chào ${user.username},`;
info[0].textContent = `Tên: ${user.username}`;
info[1].textContent = `Email: ${user.email}`;


//Viết sự kiện chọn menu hiện menu-detail tương ứng
const menuItems = document.querySelectorAll('.menu-item');
const menuDetails = document.querySelectorAll('.menu-detail');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Ẩn tất cả panel
    menuDetails.forEach(panel => panel.style.display = 'none');
    // Hiện panel tương ứng
    const targetId = item.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';
  });
});

// Hợp nhất 2 mảng phim
const movieList = movies.concat(movieComingSoons);
// Lấy tất cả ảnh diễn viên và ảnh nền
const avatars = [];
const wallpapers = [];
movieList.forEach(movie => {
  wallpapers.push(movie.bigPoster);
  movie.actors.forEach(actor => {
    avatars.push(actor.actorImage);
  });
});

//render list avatar
function renderAvatarList() {
  const avatarWrap = document.querySelector('.avatar-wrap');
  avatarWrap.innerHTML = '';
  if (avatars.length > 0) {
    avatars.forEach(avatar => {
      let avatarImage = document.createElement('div');
      avatarImage.className = 'avatar-image';
      avatarImage.innerHTML = `<img src="${avatar}" alt="">`;
      avatarWrap.appendChild(avatarImage);
    })
  }
  //Viết sự kiện click vào icon sửa
  const avatarSection = document.querySelector('.avatar');
  const updateIconAvatar = document.querySelector('.pen-1');
  updateIconAvatar.addEventListener('click', function () {
    avatarSection.style.display = 'block';
  });
}
renderAvatarList();

//render list wallpaper
function renderWallpaperList() {
  const wallpaperWrap = document.querySelector('.wallpaper-wrap');
  wallpaperWrap.innerHTML = '';
  if (wallpapers.length > 0) {
    wallpapers.forEach(wallpaper => {
      let wallpaperImage = document.createElement('div');
      wallpaperImage.className = 'wallpaper-image';
      wallpaperImage.innerHTML = `<img src="${wallpaper}" alt="">`;
      wallpaperWrap.appendChild(wallpaperImage);
    })
  }
  const wallpaperSection = document.querySelector('.wallpaper');
  const updateIconWallpaper = document.querySelector('.pen-2');
  updateIconWallpaper.addEventListener('click', function () {
    wallpaperSection.style.display = 'block';
  });
}
renderWallpaperList();

//render list apellation
const appellations = ["Kẻ hủy diệt phim", "Thích phim tình cảm", "Phú bà bao rạp", "1 tuần 10 phim", "Siêu nhân nghiện phim", "Nhà phê bình điện ảnh", "Trùm hành động",
  "Xem phim là no bụng", "Bố chủ rạp chiếu", "Tương tư nàng nhân viên", "Ăn bỏng ngô là chính thôi", "Săn vé giảm giá", "Còn u22", "Thích đi cùng người yêu", "Khách sộp"];
function renderApellationList() {
  const apellationWrap = document.querySelector('.apellation .profile-apellation');
  apellationWrap.innerHTML = '';
  const selectButton = document.querySelector('.select-button');
  if (appellations.length > 0) {
    appellations.forEach(appellation => {
      let appellationItem = document.createElement('li');
      appellationItem.innerHTML = `${appellation}`;
      apellationWrap.appendChild(appellationItem);

      appellationItem.addEventListener('click', function () {
        // Toggle class selected
        appellationItem.classList.toggle('selected');

        // Kiểm tra xem có bao nhiêu item đang được chọn
        const selectedItems = apellationWrap.querySelectorAll('.selected');
        if (selectedItems.length > 0) {
          selectButton.style.display = 'block';
        } else {
          selectButton.style.display = 'none';
        }
      });
    })
  }
  const apellationSection = document.querySelector('.apellation');
  const updateIconApellation = document.querySelector('.pen-3');
  updateIconApellation.addEventListener('click', function () {
    apellationSection.style.display = 'block';
  });
}
renderApellationList();


//Render thông tin vé của tôi
const storedTickets = JSON.parse(localStorage.getItem('myTickets'));
const tbody = document.getElementById('ticket-table-body');

if (storedTickets && storedTickets.length > 0) {
  storedTickets.forEach((ticket, index) => {
    const qrDiv = document.createElement('div');
    qrDiv.id = `qrcode-${index}`;
    qrDiv.style.width = '100px';
    qrDiv.style.height = '100px';

    // Tạo QR Code
    new QRCode(qrDiv, {
      text: ticket.qrUrl,
      width: 100,
      height: 100
    });

    // Tạo hàng trong bảng
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${ticket.movie}</td>
          <td>${ticket.cinema}</td>
          <td>${ticket.time}</td>
          <td>${ticket.day}</td>
          <td>${ticket.room}</td>
          <td>${ticket.seat}</td>
          <td></td>
        `;

    row.querySelector('td:last-child').appendChild(qrDiv);
    tbody.appendChild(row);
  });
} else {
  tbody.innerHTML = `<tr><td colspan="8">Không có vé nào được lưu</td></tr>`;
}

//Render cho hóa đơn
const bills = JSON.parse(localStorage.getItem('myBills')) || [];
const billList = document.querySelector('.bill-list');

if (bills.length === 0) {
  billList.innerHTML = '<p>Không có hóa đơn nào.</p>';
} else {
  billList.innerHTML = '';

  bills.forEach((bill, index) => {
    const seatList = Object.values(bill.seats).flat().join(', ');
    const seatTypes = Object.entries(bill.seats).map(([type, arr]) => {
      const label = type.replace('seat-', '');
      return `${label} x${arr.length}`;
    }).join(', ');

    const foodList = bill.foods.length
      ? bill.foods.map(f => `${f.name} x${f.quantity}`).join(', ')
      : 'Không chọn';

    const billHtml = `
      <div class="bill-card">
        <h1>HỆ THỐNG RẠP CHIẾU PHIM BINGEBOX</h1>
        <div class="bill-time">Thời gian giao dịch: ${new Date(bill.createdAt).toLocaleString('vi-VN')}</div>
        <div class="bill-cinema">${bill.cinema}</div>
        <h3 class="bill-movie">${bill.movie}</h3>
        <ul>
          <li>2D</li>
          <li>Phụ đề</li>
          <li>T13</li>
        </ul>
        <h3 class="bill-room">Phòng: ${bill.room}</h3>

        <div class="bill-group">
          <div class="bill-seat">
            <p>Ghế: ${seatList}</p>
            <div class="seat-type">${seatTypes}</div>
          </div>
          <div class="bill-price">${bill.seatTotalPrice.toLocaleString()}đ</div>
        </div>

        <div class="bill-group">
          <p>${foodList}</p>
          <div class="bill-price">${bill.foodTotalPrice.toLocaleString()}đ</div>
        </div>

        <div class="bill-group">
          <p>${bill.promotion ? bill.promotion.subtitle : 'Không khuyến mãi'}</p>
          <div class="bill-price">-${(bill.promotionDiscount * (bill.seatTotalPrice + bill.foodTotalPrice)).toLocaleString()}đ</div>
        </div>

        <div class="bill-total">
          <h3>Tổng tiền: </h3>
          <div class="total-price">${bill.totalPrice.toLocaleString()} đ</div>
        </div>
      </div>
    `;

    billList.innerHTML += billHtml;
  });
}

//Render cho title đạt được
//Số lượng phim đã xem
const moviesWatched = new Set();
if (storedTickets.length > 0) {
  storedTickets.forEach(ticket => {
    moviesWatched.add(ticket.movie); //lưu phim đã xem vào Set
  });

  const moviesWatchedTotal = document.querySelector('.movie-watched');
  moviesWatchedTotal.innerHTML = `<i class="fa-solid fa-film"></i>
                <h3>${moviesWatched.size}</h3>
                <p>Số phim đã xem</p>`;
}

//Tổng chi tiêu
const totalAllBills = bills.reduce((sum, bill) => {
  return sum + (bill.totalPrice || 0);
}, 0);

const totalExpenditure = document.querySelector('.total-expenditure');
totalExpenditure.innerHTML = `<i class="fa-solid fa-money-check-dollar"></i>
                <h3>${totalAllBills} đ</h3>
                <p>Tổng chi tiêu</p>`;



