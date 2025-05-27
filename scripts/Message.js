class Message {
  static messageInfo(message, type) {
    return Swal.fire({
      title: 'Thông báo',
      text: message,
      icon: type,
    });
  }
}
export default Message;
