document.addEventListener("DOMContentLoaded", function () {
    let list = document.querySelector('.carousel .carousel-list');
    let items = document.querySelectorAll('.carousel .carousel-list .carousel-image');
    let dots = document.querySelectorAll('.carousel-dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0; //biến active lưu chỉ số của item đang hiển thị, hiện đang là item thứ nhất
    let lengthItems = items.length - 1; //biến lengthItems lưu số lượng item trong slider - 1 (vì chỉ số bắt đầu từ 0)

    next.addEventListener('click', function () {
        if (active + 1 > lengthItems) {
            active = 0; //nếu active lớn hơn số lượng item thì quay về item đầu tiên
        } else {
            active++;
        }
        reloadSlider();
    });

    prev.addEventListener('click', function () {
        if (active - 1 < 0) {
            active = 0;
        } else {
            active--;
        }
        reloadSlider();
    });

    let refreshSlider = setInterval(function () { next.click(); }, 3000); //tự động chuyển slider sau 3 giây

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft; //đo khoảng cách trái từ item so với phần tử cha (trong trường hợp này là list)
        //console.log(checkLeft);
        list.style.left = -checkLeft + 'px'; //dịch sang trái tương ứng 

        dots.forEach(function(dot) {
            dot.classList.remove('active'); //xóa hiệu ứng active của dot đâu tiên
        });
        dots[active].classList.add('active'); //thêm hiệu ứng active vào dots tương ứng với item đang hiển thị

        clearInterval(refreshSlider);
        refreshSlider = setInterval(function () { next.click(); }, 3000);
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function () {
            active = index; //khi click thì active sẽ có chỉ số tương ứng với index
            reloadSlider();
        });
    });
});