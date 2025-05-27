import Message from '../../scripts/Message.js';
import Validator from '../../scripts/Validator.js';
window.onload = () => {
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const username = document.querySelector('#username');
  form.addEventListener('submit', async (e) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    e.preventDefault();
    const user = {
      name: username.value,
      email: email.value,
      password: password.value,
    };
    if (!Validator.validateRegister(user)) {
      Message.messageInfo('Vui lòng nhập đầy đủ thông tin', 'error');
      return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    Message.messageInfo('Đăng ký thành công', 'success').then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../login/login.html';
      }
    });
  });
};
