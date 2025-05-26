
const promotions = [
  {
    id: '01',
    title: "THỨ 2 CUỐI THÁNG",
    image: "assets/images/promotion/promotion1.PNG",
    description: "Giảm giá vé 2D còn 40.000đ vào thứ 2 cuối tháng.",
    content: `
      🎟️ Giá vé 2D chỉ còn <strong>40.000đ</strong> vào Thứ 2 cuối tháng.<br>
      🌍 Áp dụng toàn quốc cho tất cả các suất chiếu trong ngày.<br>
      ⚠ Không áp dụng kèm khuyến mãi khác.<br>
      📅 Đặt lịch hẹn ngay, rủ bạn “cày phim” giá rẻ!
    `
  },
  {
    id: '02',
    title: "COMBO NHÓM BẠN",
    image: "assets/images/promotion/promotion2.PNG",
    description: "Mua 4 vé tặng 1 bắp rang lớn miễn phí.",
    content: `
      👯‍♂️ Mua <strong>4 vé</strong> được <strong>tặng 1 bắp rang lớn miễn phí</strong>.<br>
      🍿 Áp dụng cho mọi loại vé 2D, 3D.<br>
      📌 Khuyến mãi chỉ áp dụng tại quầy vé.<br>
      🕒 Giới hạn mỗi giao dịch 1 combo khuyến mãi.
    `
  },
  {
    id: '03',
    title: "ƯU ĐÃI SINH VIÊN",
    image: "assets/images/promotion/promotion3.PNG",
    description: "Thẻ U22 ưu đãi giá vé cho sinh viên, sinh viên 55.000đ/ Vé 2D.",
    content: `
      🎓 Giá vé 2D chỉ <strong>55.000đ</strong> từ Thứ 2 đến Thứ 6.<br>
      💳 Chỉ cần có thẻ U22 + thẻ sinh viên/học sinh, bạn sẽ được xem phim 2D với giá chỉ 55.000đ!<br>
      📍 Mỗi thẻ chỉ mua được 1 vé/lần.<br>
      ⚠ Không áp dụng lễ Tết hoặc suất chiếu sớm.
    `
  },
  {
    id: '04',
    title: "NGÀY HỘI GIA ĐÌNH",
    image: "assets/images/promotion/promotion4.PNG",
    description: "Gói vé gia đình 4 người chỉ 150.000đ, áp dụng cuối tuần.",
    content: `
      👨‍👩‍👧‍👦 Gói vé 4 người chỉ <strong>150.000đ</strong>.<br>
      🎞 Áp dụng cuối tuần (Thứ 7 & CN).<br>
      ⚠ Không áp dụng kèm khuyến mãi khác.<br>
      📅 Mỗi nhóm chỉ mua 1 gói khuyến mãi mỗi ngày.
    `
  },
  {
    id: '05',
    title: "SIÊU THỨ TƯ",
    image: "assets/images/promotion/promotion5.PNG",
    description: "Thứ Tư hàng tuần, vé 3D chỉ còn 50.000đ.",
    content: `
      🎭 Vé xem phim <strong>3D</strong> chỉ còn <strong>50.000đ</strong> vào mỗi Thứ Tư.<br>
      🍿 Áp dụng cho toàn bộ suất chiếu trong ngày.<br>
      🎟 Không giới hạn số lượng vé mua.<br>
      ⚠ Không áp dụng cho suất chiếu sớm/trễ.
    `
  },
  {
    id: '06',
    title: "TẶNG NƯỚC KHI MUA VÉ ONLINE",
    image: "assets/images/promotion/promotion6.PNG",
    description: "Mua vé online được tặng 1 nước ngọt tại quầy.",
    content: `
      🥤 Tặng ngay <strong>1 ly nước ngọt miễn phí</strong> khi mua vé online.<br>
      📱 Áp dụng qua app/web chính thức.<br>
      🧾 Xuất trình mã vé tại quầy để nhận nước.<br>
      ⚠ Mỗi vé được nhận 1 phần nước (không quy đổi sang sản phẩm khác).
    `
  }
];

function getParamByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

window.onload = function () {
  const id = getParamByName("id");
  const promo = promotions.find(p => p.id === id);

  if (promo) {
    document.getElementById("promo-image").src = promo.image;
    document.getElementById("promo-title").innerText = promo.title;
    document.getElementById("promo-subtitle").innerText = promo.description;
    document.getElementById("promo-content").innerHTML = promo.content;
  } else {
    document.querySelector(".promo-container").innerHTML = `<h2>Không tìm thấy khuyến mãi!</h2>`;
  }
};

