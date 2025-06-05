class Message {
  static messageInfo(message, type) {
    return Swal.fire({
      title: "Thông báo",
      text: message,
      icon: type,
    });
  }
  static messageConfirm(message, type) {
    return Swal.fire({
      title: "Xác nhận",
      text: message,
      icon: type,
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
    });
  }
}
export default Message;
