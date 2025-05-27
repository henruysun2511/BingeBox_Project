import Validator from '../../scripts/Validator.js';
import Message from '../../scripts/Message.js';
window.onload = () => {
  const form = document.querySelector('form');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
      username: username.value,
      password: password.value,
    };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (!Validator.validateLogin(user)) {
      Message.messageInfo('Vui lòng nhập đầy đủ thông tin', 'error');
      return;
    }
    const foundUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (foundUser) {
      Message.messageInfo('Đăng nhập thành công', 'success').then((result) => {
        if (result.isConfirmed) {
          window.location.href = '../home/home.html';
        }
      });
    } else {
      Message.messageInfo('Tài khoản hoặc mật khẩu không đúng', 'error');
    }
  });
};
