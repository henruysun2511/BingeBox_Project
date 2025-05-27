document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (!user) {
    window.location.href = '../login/login.html';
  }
  const info = document.querySelectorAll('.col2-set span');
  const hello = document.querySelector('.hello strong');
  hello.textContent = `Xin chào ${user.username},`;
  info[0].textContent = `Tên: ${user.username}`;
  info[1].textContent = `Email: ${user.email}`;
});
