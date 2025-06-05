class Validator {
  // Kiểm tra đăng ký: name, email, password, confirmPassword
  validateRegister(data) {
    if (!data.username || data.username.trim() === "") {
      return false;
    }

    if (!this.isValidEmail(data.email)) {
      return false;
    }

    if (!data.password || data.password.length < 6) {
      return false;
    }

    return true;
  }

  // Kiểm tra đăng nhập: email, password
  validateLogin(data) {
    const errors = {};

    if (data.username.trim() === "") {
      errors.username = "Tên đăng nhập không được để trống";
    }

    if (!data.password || data.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  // Hàm phụ: kiểm tra định dạng email
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
export default new Validator();