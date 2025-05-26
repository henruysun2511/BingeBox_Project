const promotions = [
    {
      id: '01',
      title: "THỨ 2 CUỐI THÁNG",
      image: "assets/images/promotion/promotion1.PNG",
      description: "Giảm giá vé 2D còn 40.000đ vào thứ 2 cuối tháng.",
    },
    {
      id: '02',
      title: "COMBO NHÓM BẠN",
      image: "assets/images/promotion/promotion2.PNG",
      description: "Mua 4 vé tặng 1 bắp rang lớn miễn phí.",
    },
    {
      id: '03',
      title: "ƯU ĐÃI SINH VIÊN",
      image: "assets/images/promotion/promotion3.PNG",
      description: "Thẻ U22 ưu đãi giá vé cho sinh viên, sinh viên 55.000đ/ Vé 2D.",
    },
    {
      id: '04',
      title: "NGÀY HỘI GIA ĐÌNH",
      image: "assets/images/promotion/promotion4.PNG",
      description: "Gói vé gia đình 4 người chỉ 150.000đ, áp dụng cuối tuần.",
    },
    {
      id: '05',
      title: "SIÊU THỨ 4",
      image: "assets/images/promotion/promotion5.PNG",
      description: "Thứ Tư hàng tuần, vé 3D chỉ còn 50.000đ.",
    },
    {
      id: '06',
      title: "TẶNG NƯỚC KHI MUA VÉ ONLINE",
      image: "assets/images/promotion/promotion6.PNG",
      description: "Mua vé online được tặng 1 nước ngọt tại quầy.",
  }
    

  ];
  const container = document.getElementById("promotion-list");
  
  promotions.forEach(promo => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
  
    col.innerHTML = `
    <a href="" target="_blank" style="text-decoration: none; color: inherit;">
      <div class="card h-100">
        <img src="${promo.image}" class="card-img-top" alt="${promo.title}">
        <div class="card-body">
          <h5 class="card-title">${promo.title}</h5>
          <p class="card-text">${promo.description}</p>
        </div>
      </div>
    </a>
 `;  
  col.addEventListener('click', function(){
    window.location.href = `./promotion.html?id=${promo.id}`;
  });
    container.appendChild(col);
  });