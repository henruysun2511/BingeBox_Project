document.addEventListener('DOMContentLoaded', function() {
    // Create directories if they don't exist
    createRequiredDirectories();

    // Cinema tab switching functionality
    const cinemaTabs = document.querySelectorAll('.cinema-tab');
    const cinemaContents = document.querySelectorAll('.cinema-content-wrapper');

    // Data for each cinema location
    const cinemaData = {
        'chua-boc': {
            name: 'Bingebox Cinema Chùa Bộc',
            description: 'Nằm tại trung tâm quận Đống Đa, Bingebox Cinema Chùa Bộc là rạp chiếu phim hiện đại với 5 phòng chiếu được trang bị công nghệ hình ảnh và âm thanh tối tân. Rạp có thiết kế sang trọng, không gian rộng rãi và thoải mái cho khán giả.',
            facilities: 'Hệ thống 5 phòng chiếu, Công nghệ âm thanh Dolby Atmos, Màn hình cong, Ghế bọc da cao cấp, Khu vực ẩm thực phong phú.',
            address: '1 P. Chùa Bộc, Kim Liên, Đống Đa, Hà Nội',
            phone: '024.7300.7586',
            email: 'chuaboc@bingeboxcinema.vn',
            openHours: '8:00 - 22:00 hàng ngày',
            image: '/assets/images/aboutUs/anhrap1.jpeg',
            map: '/assets/images/aboutUs/rap1.PNG',
            mapLink: 'https://g.co/kgs/MZ7eQR5'
        },
        'hoan-kiem': {
            name: 'Bingebox Cinema Hoàn Kiếm',
            description: 'Tọa lạc tại khu vực trung tâm lịch sử Hà Nội, Bingebox Cinema Hoàn Kiếm mang đến trải nghiệm xem phim đỉnh cao với không gian thiết kế hiện đại pha lẫn nét đặc trưng của phố cổ Hà Nội.',
            facilities: 'Hệ thống 7 phòng chiếu, Công nghệ chiếu 4K, Âm thanh vòm 360 độ, Khu vực lounge sang trọng, Dịch vụ đặt đồ ăn tận ghế.',
            address: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
            phone: '024.7300.8586',
            email: 'hoankiem@bingeboxcinema.vn',
            openHours: '9:00 - 22:00 hàng ngày',
            image: '/assets/images/aboutUs/anhrap2.jpg',
            map: '/assets/images/aboutUs/rap2.PNG',
            mapLink: 'https://g.co/kgs/xTjravJ'
        },
        'metropolis': {
            name: 'Bingebox Cinema Metropolis Liễu Giai',
            description: 'Là rạp chiếu phim cao cấp nhất trong hệ thống, Bingebox Cinema Metropolis Liễu Giai sở hữu không gian sang trọng bậc nhất cùng công nghệ chiếu phim tiên tiến hàng đầu thế giới.',
            facilities: 'Hệ thống 10 phòng chiếu, Công nghệ IMAX, Phòng chiếu 4DX, Ghế recliner hạng sang, Khu vực VIP lounge, Dịch vụ concierge',
            address: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội',
            phone: '024.7300.9586',
            email: 'metropolis@bingeboxcinema.vn',
            openHours: '9:00 - 22:00 hàng ngày',
            image: '/assets/images/aboutUs/anhrap3.jpg',
            map: '/assets/images/aboutUs/rap3.PNG',
            mapLink: 'https://g.co/kgs/Y62CnTo'
        }
    };

    // Generate content for each cinema
    Object.keys(cinemaData).forEach(cinemaId => {
        const cinema = cinemaData[cinemaId];
        const contentWrapper = document.getElementById(`${cinemaId}-content`);

        if (contentWrapper) {
            contentWrapper.innerHTML = `
                <h2 class="cinema-name">${cinema.name}</h2>
                <div class="cinema-content">
                    <div class="cinema-image">
                        <img src="${cinema.image}" alt="${cinema.name}">
                    </div>
                    <div class="cinema-info">
                        <p>${cinema.description}</p>
                        <p><strong>Tiện ích:</strong> ${cinema.facilities}</p>
                        <div class="contact-info">
                            <h3>Thông tin liên hệ</h3>
                            <p><strong>Địa chỉ:</strong> ${cinema.address}</p>
                            <p><strong>Điện thoại:</strong> ${cinema.phone}</p>
                            <p><strong>Email:</strong> ${cinema.email}</p>
                            <p><strong>Giờ mở cửa:</strong> ${cinema.openHours}</p>
                        </div>
                    </div>
                </div>
                <div class="cinema-map">
                    <a href="${cinema.mapLink}" target="_blank" rel="noopener">
                    <img src="${cinema.map}" alt="Bản đồ đến ${cinema.name}">
                    </a>
            </div>
            `;
        }
    });

    // Handle tab clicking with smooth scroll and offset
    cinemaTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all tabs and contents
            cinemaTabs.forEach(t => t.classList.remove('active'));
            cinemaContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Get the cinema ID from data attribute
            const cinemaId = this.getAttribute('data-cinema');

            // Show corresponding content
            const contentToShow = document.getElementById(`${cinemaId}-content`);
            if (contentToShow) {
                contentToShow.classList.add('active');
            }

            // Smooth scroll with offset for fixed header
            const targetSection = document.getElementById(cinemaId);
            if (targetSection) {
                // Get header height (100px as defined in CSS or get it dynamically)
                const headerOffset = 120; // Use the same value as in CSS

                // Calculate the target position with offset
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                // Scroll smoothly to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Helper function to check if images exist
    function createRequiredDirectories() {
        // Use a default placeholder if images don't exist
        const imageElements = document.querySelectorAll('img');

        imageElements.forEach(img => {
            img.onerror = function() {
                this.src = 'assets/images/bingebox_logo.png'; // Fallback to logo if image doesn't exist
                this.onerror = null; // Prevent infinite loop
            }
        });
    }

    // Mobile Menu Toggle (for responsive design)
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const mainMenu = document.querySelector('.main-menu');

        if (header && mainMenu) {
            // Create mobile menu toggle button
            const mobileMenuToggle = document.createElement('button');
            mobileMenuToggle.classList.add('mobile-menu-toggle');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';

            // Insert toggle button before main menu
            header.querySelector('.container').insertBefore(mobileMenuToggle, mainMenu);

            // Add click event to toggle menu
            mobileMenuToggle.addEventListener('click', function() {
                mainMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');

                // Change icon based on state
                if (mobileMenuToggle.classList.contains('active')) {
                    mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        }
    };

    // Call mobile menu creation function for smaller screens
    if (window.innerWidth < 768) {
        createMobileMenu();
    }

    // Add window resize event to handle mobile menu responsively
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                createMobileMenu();
            }
        } else {
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileMenuToggle) {
                mobileMenuToggle.remove();
                document.querySelector('.main-menu').classList.remove('active');
            }
        }
    });

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#' && !this.classList.contains('cinema-tab')) {
                e.preventDefault();

                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simple Lightbox/Modal for movie posters
    const moviePosters = document.querySelectorAll('.movie-poster img');

    moviePosters.forEach(poster => {
        poster.addEventListener('click', function() {
            // Create modal container
            const modal = document.createElement('div');
            modal.classList.add('movie-modal');

            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.classList.add('movie-modal-content');

            // Create close button
            const closeBtn = document.createElement('button');
            closeBtn.classList.add('modal-close');
            closeBtn.innerHTML = '&times;';

            // Create image
            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;

            // Create movie title
            const title = document.createElement('h3');
            title.textContent = this.closest('.movie-card').querySelector('.movie-title').textContent;

            // Assemble modal
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(img);
            modalContent.appendChild(title);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Add close functionality
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            // Close when clicking outside the modal
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});