const foods = [
    {
        name: 'BB COMBO 1: 1 BOX BỎNG NGÔ + 1 COCACOLA',
        price: '100.000đ',
        imageUrl: './assets/images/foods/combo1.png',
    },
    {
        name: 'BB COMBO 2: 1 BOX BỎNG NGÔ + 2 COCACOLA',
        price: '130.000đ',
        imageUrl: './assets/images/foods/combo2.png',
    },
    {
        name: 'BB COMBO 3: 2 BOX BỎNG NGÔ + 2 COCACOLA',
        price: '190.000đ',
        imageUrl: './assets/images/foods/combo3.png',
    }
];

const foodContainer = document.querySelector('.food-container');
foodContainer.innerHTML = ``;
if (foodContainer) {
    foods.forEach(food => {
        let foodItem = document.createElement('div');
        foodItem.className = 'food-item';

        foodItem.innerHTML = `<div class="food-image">
                <img src="${food.imageUrl}" alt="">
            </div>
            <div class="food-info">
                <div class="food-name">${food.name}</div>
                <div class="food-choose">
                    <div class="minus">-</div>
                    <div class="total">0</div>
                    <div class="plus">+</div>
                </div>
            </div>
            <div class="food-price">${food.price}</div>`;

        foodContainer.appendChild(foodItem);
    });
};


let selectedFoods = [];
let btnPlus = document.querySelectorAll('.plus');
btnPlus.forEach(plus => {
    plus.addEventListener('click', function () {
        //Tìm thẻ cha để xác định tên đồ ăn đang click
        const foodItem = plus.closest('.food-item');
        const foodName = foodItem.querySelector('.food-name').textContent;
        const totalFood = foodItem.querySelector('.total');
        const foodPrice = parseInt(foodItem.querySelector('.food-price').textContent.replace(/\./g, '')); //lấy số nguyên, bỏ tất cả dấu chấm

        //Tìm trong selectedFoods
        const food = selectedFoods.find(f => f.name === foodName);
        if (food) {
            food.quantity += 1;
        }
        else {
            selectedFoods.push({
                name: foodName,
                price: foodPrice,
                quantity: 1
            });
        }

        //Hiển thị số lượng trên giao diện
        totalFood.textContent = food ? food.quantity : 1;

        console.log(selectedFoods);
        renderFood();
    });
});

let btnMinus = document.querySelectorAll('.minus');
btnMinus.forEach(minus => {
    minus.addEventListener('click', function () {
        //Tìm thẻ cha để xác định tên đồ ăn đang click
        const foodItem = minus.closest('.food-item');
        const foodName = foodItem.querySelector('.food-name').textContent;;
        const totalFood = foodItem.querySelector('.total');

        //Tìm trong selectedFoods
        const food = selectedFoods.find(f => f.name === foodName);
        if (food) {
            if (food.quantity > 1) {
                food.quantity -= 1;
                totalFood.textContent = food.quantity;
            } else {
                selectedFoods = selectedFoods.filter(f => f.name !== foodName);
                totalFood.textContent = 0;
            }
        }

        console.log(selectedFoods);
        renderFood();
    });
});


//render tính tiền vé, đồ ăn, khuyến mãi
function renderFood() {
    let foodInfoContainer = document.querySelector('.food-info-container');
    foodInfoContainer.innerHTML = '';
    let foodTotalPrice = 0;

    if (selectedFoods.length > 0) {
        selectedFoods.forEach(food => {
            let foodInfo = document.createElement('div');
            foodInfo.classList.add('seat-info');
            foodInfo.innerHTML = `
                <div class="seat-selected">
                    <div class="seat-total">${food.quantity}  ${food.name}</div>
                </div>
                <div class="seat-price">${(food.price * food.quantity).toLocaleString()} đ</div>`;

            foodInfoContainer.appendChild(foodInfo);

            foodTotalPrice += food.price * food.quantity;
        });
    }

    // Lưu vào SessionStorage
    sessionStorage.setItem('foodTotalPrice', foodTotalPrice);
    sessionStorage.setItem('selectedFoods', JSON.stringify(selectedFoods));
    updateTotalPrice();
}




