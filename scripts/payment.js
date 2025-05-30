const promotions = [
    {
        title: 'Giảm 50%',
        subtitle: 'Dành tặng bạn mới',
        discount: 0.5,
    },
    {
        title: 'Giảm 30%',
        subtitle: 'Cuối tuần vui vẻ không nè!',
        discount: 0.3
    },
    {
        title: 'Giảm 15%',
        subtitle: 'Tháng 6 rộn ràng, chào đón hè sang',
        discount: 0.15
    },
    {
        title: 'Giảm 10%',
        subtitle: 'Suất chiếu đầu hàng tháng của bạn',
        discount: 0.1
    }
]

const promotionContainer = document.querySelector('.promotion-form');
if (promotionContainer) {
    promotionContainer.innerHTML = '';
    promotions.forEach(promotion => {
        let promotionItem = document.createElement('label');
        promotionItem.innerHTML = `<input type="radio" name="promotion" value="normal">
                    <h2>${promotion.title}</h2>
                    <p>${promotion.subtitle}</p>`;

        promotionContainer.appendChild(promotionItem);

        //Viết sự kiện click chọn khuyến mãi
        promotionItem.addEventListener('click', function () {
            console.log(promotion.discount);
            renderPromotion(promotion);
        });
    });
}

//render cho khuyễn mãi
function renderPromotion(promotion) {
    let promotionInfoContainer = document.querySelector('.promotion-info-container');
    if (promotionInfoContainer) {
        promotionInfoContainer.innerHTML = '';

        let promotionInfo = document.createElement('div');
        promotionInfo.className = 'seat-info';
        promotionInfo.innerHTML = `
            <div class="seat-selected">
                <div class="seat-total">${promotion.subtitle}</div>
            </div>
            <div class="seat-price">${promotion.title}</div>
        `;

        promotionInfoContainer.appendChild(promotionInfo);

        // Tính giá trị khuyến mãi
        let promotionTotalPrice = 1 * promotion.discount;

        // Lưu vào SessionStorage
        sessionStorage.setItem('promotionTotalPrice', promotionTotalPrice);
        updateTotalPrice();
    }
}

const payments = [
    {
        name: 'Ví ShopeePay',
        imageUrl: './assets/images/bankings/shopeepay.png'
    },
    {
        name: 'Ví Momo',
        imageUrl: './assets/images/bankings/momo.png'
    },
    {
        name: 'Zalopay',
        imageUrl: './assets/images/bankings/zalopay.png'
    },
    {
        name: 'VNPAY',
        imageUrl: './assets/images/bankings/vnpay.png'
    }
];

const paymentContainer = document.querySelector('.payment-form');
if (paymentContainer) {
    paymentContainer.innerHTML = '';
    payments.forEach(payment => {
        let paymentItem = document.createElement('label');
        paymentItem.innerHTML = `<input type="radio" name="promotion" value="normal">
                <img src="${payment.imageUrl}" alt="">
                <p>${payment.name}</p>`;

        paymentContainer.appendChild(paymentItem);

    });
}