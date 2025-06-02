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



