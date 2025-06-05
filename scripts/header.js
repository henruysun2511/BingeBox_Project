
document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".inner-icon");
  const menu = document.querySelector(".inner-menu");
  const regist = document.querySelector(".inner-regist");

  menuIcon.addEventListener("click", () => {
    regist.classList.toggle("show-regist");
    menu.classList.toggle("show-menu");
  });

  const currentUser = localStorage.getItem("currentUser");

  const loginButton = document.querySelector(".button-dn a");
  const registerButton = document.querySelector(".button-dk a");

  if (currentUser) {
    const user = JSON.parse(currentUser);
    loginButton.setAttribute("href", "#");
    registerButton.setAttribute("href", "#");

    loginButton.textContent = `Xin chào, ${user.username}`;
    registerButton.textContent = "Đăng xuất";

    registerButton.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn nhảy trang
      localStorage.removeItem("currentUser");
      window.location.reload();
    });
  } else {
    loginButton.textContent = "Đăng nhập";
    loginButton.setAttribute("href", "./accounts/login/login.html");

    registerButton.textContent = "Đăng ký";
    registerButton.setAttribute("href", "./accounts/register/register.html");
  }
});
