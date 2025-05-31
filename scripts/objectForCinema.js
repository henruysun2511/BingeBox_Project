const movies =
    [
        {
            id: 'MV001',
            name: 'A MINECRAFT MOVIE',
            duration: '101 phút',
            releaseDate: '2025-04-04',
            nation: 'Mỹ',
            director: 'Jared Hess',
            categories: ['Hành động', 'Phiêu lưu'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Chào mừng bạn đến với thế giới của Minecraft, nơi sự sáng tạo không chỉ giúp bạn chế tạo mà còn là yếu tố quan trọng để sống sót! Bốn kẻ lạc lõng - Garrett “The Garbage Man” Garrison (Momoa), Henry (Hansen), Natalie (Myers) và Dawn (Brooks) - bất ngờ gặp rắc rối khi họ bị kéo qua cánh cửa bí ẩn dẫn đến Overworld: một thế giới kỳ lạ',
            actors: [
                {
                    actorName: 'Jack Black',
                    actorImage: './assets/images/actors/jackblack.webp'
                },
                {
                    actorName: 'Jason Momoa',
                    actorImage: './assets/images/actors/jasonmomooa.jpg'
                },
                {
                    actorName: 'Emma Myers',
                    actorImage: './assets/images/actors/emmamyer.jpg'
                },
                {
                    actorName: 'Sebastian Eugene Hansen',
                    actorImage: './assets/images/actors/hansen.webp'
                }
            ],
            imageUrl: './assets/images/movies/minecraft.webp',
            bigPoster: './assets/images/movieBigPosters/BPminecraft.jpg',
            trailer: 'https://www.youtube.com/embed/8B1EtVPBSMw?si=dVL8O6l7klIwwcfs',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 1' },
                                { time: '17:40', room: 'Phòng 2' },
                                { time: '20:20', room: 'Phòng 3' },
                                { time: '21:20', room: 'Phòng 4' },
                                { time: '23:10', room: 'Phòng 5' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 2' },
                                { time: '17:00', room: 'Phòng 3' },
                                { time: '20:30', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '14:20', room: 'Phòng 1' },
                                { time: '17:40', room: 'Phòng 2' },
                                { time: '19:20', room: 'Phòng 3' },
                                { time: '22:50', room: 'Phòng 4' },
                                { time: '23:00', room: 'Phòng 5' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:10', room: 'Phòng 1' },
                                { time: '17:20', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '21:10', room: 'Phòng 3' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:10', room: 'Phòng 1' },
                                { time: '17:20', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '21:10', room: 'Phòng 3' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '15:10', room: 'Phòng 1' },
                                { time: '17:20', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '21:10', room: 'Phòng 3' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '16:00', room: 'Phòng 1' },
                                { time: '17:30', room: 'Phòng 1' },
                                { time: '20:20', room: 'Phòng 2' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '16:00', room: 'Phòng 1' },
                                { time: '17:30', room: 'Phòng 1' },
                                { time: '20:20', room: 'Phòng 2' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '17:30', room: 'Phòng 1' },
                                { time: '20:20', room: 'Phòng 2' }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV002',
            name: 'ĐỊA ĐẠO: MẶT TRỜI BÓNG TỐI',
            duration: '128 phút',
            releaseDate: '2025-04-04',
            nation: 'Việt Nam',
            director: 'Bùi Thạc Chuyên',
            categories: ['Chiến tranh'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Địa Đạo: Mặt Trời Trong Bóng Tối là dự án điện ảnh kỷ niệm 50 năm hòa bình thống nhất đất nước, dự kiến khởi chiếu 30.04.2025. Phim do đạo diễn Bùi Thạc Chuyên cầm trịch, với sự tham gia của dàn diễn viên thực lực – Thái Hòa, Quang Tuấn và diễn viên trẻ Hồ Thu Anh. Vào năm 1967, chiến tranh Việt Nam ngày càng khốc liệt. Đội du kích 21 người do BẢY THEO chỉ huy tại căn cứ Bình An Đông trở thành mục tiêu mà quân đội Mỹ TÌM VÀ DIỆT số 1 khi nhận nhiệm vụ bằng mọi giá phải bảo vệ một nhóm thông tin tình báo chiến lược mới đến ẩn náu tại căn cứ. Các cuộc liên lạc vô tuyến điện từ với nhóm tình báo bị quân đội Mỹ phát hiện và định vị, lấy đi lợi thế duy nhất của đội du kích là sự vô hình trong hệ thống địa đạo rộng khắp, phức tạp và bí ẩn. Bộ phim là những câu chuyện đan xen giữa tình đồng đội, tình yêu và khát khao sống ở những người lính. Trên hết, vẫn là nghĩa vụ và sự hi sinh vì Tổ Quốc. Đạo diễn Bùi Thạc Chuyên nung nấu 10 năm trời để chuẩn bị cho phim điện ảnh Địa Đạo, đem câu chuyện huyền thoại về nhân dân miền Nam tài trí thông minh và tinh thần yêu nước ngoan cường ngày ấy lên màn ảnh rộng. Lịch sử đã chứng minh, dẫu cho trên đầu là bom rơi đạn nổ, dưới hầm là không khí đặc quánh đến hít thở cũng khó khăn, chỉ cần trong tim mỗi người chiến sĩ luôn hướng đến ánh sáng tự do của một dân tộc tự do trong tương lai, họ sẽ kiên trì đứng vững mà chiến đấu. Như có mặt trời trong bóng tối luôn soi sáng dẫn đường.',
            actors: [
                {
                    actorName: 'Thái hòa',
                    actorImage: './assets/images/actors/thaihoa.jpg'
                },
                {
                    actorName: 'Quang Tuấn',
                    actorImage: './assets/images/actors/quangtuan.webp'
                },
                {
                    actorName: 'Diễm Hằng Lamoon',
                    actorImage: './assets/images/actors/lamoon.jpg'
                },
                {
                    actorName: 'Anh Tú Wilson',
                    actorImage: './assets/images/actors/wilson.webp'
                },
                {
                    actorName: 'Uyển Ân',
                    actorImage: './assets/images/actors/uyenan.jpg'
                }
            ],
            imageUrl: './assets/images/movies/diadao.webp',
            bigPoster: './assets/images/movieBigPosters/BPdiadao.webp',
            trailer: 'https://www.youtube.com/embed/-OGDDtsIBHA?si=rdTmOglKzo6deygC',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '8:30', room: 'Phòng 1' },
                                { time: '9:00', room: 'Phòng 2' },
                                { time: '10:10', room: 'Phòng 3' },
                                { time: '11:30', room: 'Phòng 4' },
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:10', room: 'Phòng 6' },
                                { time: '14:00', room: 'Phòng 1' },
                                { time: '15:40', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '16:20', room: 'Phòng 4' },
                                { time: '18:00', room: 'Phòng 5' },
                                { time: '19:10', room: 'Phòng 6' },
                                { time: '19:30', room: 'Phòng 1' },
                                { time: '20:20', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '21:00', room: 'Phòng 4' },
                                { time: '21:00', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:40', room: 'Phòng 1' },
                                { time: '16:20', room: 'Phòng 2' },
                                { time: '16:40', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV003',
            name: 'CAPTAIN AMERICA: THẾ GIỚI MỚI',
            duration: '118 phút',
            releaseDate: '2025-03-14',
            nation: 'Mỹ',
            director: 'Julius Onah',
            categories: ['Hành động', 'Siêu anh hùng'],
            agePermisson: 'T13',
            subtitle: 'Phụ đề',
            format: 'IMAX',
            script: 'Sau khi gặp tổng thống Hoa Kỳ mới đắc cử Thaddeus Ross, Sam phải đối mặt với một sự cố quy mô quốc tế. Anh phải tìm ra mục đích đằng sau trước khi kẻ chủ mưu khiến cả thế giới phải khiếp sợ',
            actors: [
                {
                    actorName: 'Anthony Mackie',
                    actorImage: './assets/images/actors/anthonymackie.webp'
                },
                {
                    actorName: 'Harrison Ford',
                    actorImage: './assets/images/actors/harrisonford.jpg'
                },
                {
                    actorName: 'Sebastian Stan',
                    actorImage: './assets/images/actors/stan.webp'
                },
                {
                    actorName: 'Giancarlo Esposito',
                    actorImage: './assets/images/actors/esposito.webp'
                },
                {
                    actorName: 'Danny Ramirez',
                    actorImage: './assets/images/actors/danny.webp'
                }
            ],
            imageUrl: './assets/images/movies/captainamericaa.jpg',
            bigPoster: './assets/images/movieBigPosters/BPcaptain.webp',
            trailer: 'https://www.youtube.com/embed/1pHDWnXmK7Y?si=uHb0sci9_9jbosHM',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '8:30', room: 'Phòng 1' },
                                { time: '9:00', room: 'Phòng 2' },
                                { time: '10:10', room: 'Phòng 3' },
                                { time: '11:30', room: 'Phòng 4' },
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '8:30', room: 'Phòng 1' },
                                { time: '9:00', room: 'Phòng 2' },
                                { time: '10:10', room: 'Phòng 3' },
                                { time: '11:30', room: 'Phòng 4' },
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '8:30', room: 'Phòng 1' },
                                { time: '9:00', room: 'Phòng 2' },
                                { time: '10:10', room: 'Phòng 3' },
                                { time: '11:30', room: 'Phòng 4' },
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:40', room: 'Phòng 1' },
                                { time: '16:20', room: 'Phòng 2' },
                                { time: '16:40', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '12:10', room: 'Phòng 5' },
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '16:00', room: 'Phòng 3' },
                                { time: '17:20', room: 'Phòng 4' },
                                { time: '18:30', room: 'Phòng 5' },
                                { time: '19:00', room: 'Phòng 6' },
                                { time: '19:20', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' },
                                { time: '20:50', room: 'Phòng 4' },
                                { time: '21:10', room: 'Phòng 5' },
                                { time: '22:00', room: 'Phòng 6' },
                                { time: '22:30', room: 'Phòng 1' }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV004',
            name: 'CƯỚI MA GIẢI HẠN',
            duration: '128 phút',
            releaseDate: '2025-04-11',
            nation: 'Thái',
            director: 'Chayanop Boonprakob',
            categories: ['Hài'],
            agePermisson: 'T18',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Menn, một tên trộm cắp đang làm tay trong cho cảnh sát, đồng thời cũng là một gã trai thẳng chính hiệu. Ngày nọ, Menn vô tình nhặt được một bao lì xì đỏ bí ẩn và bị ràng buộc bởi khế ước siêu nhiên, bắt anh phải kết hôn với một hồn ma. Không dừng lại ở đó, số phận càng trớ trêu hơn khi “vợ” của Menn không chỉ là người cõi âm, mà còn là một “mỹ” vong dễ thương với tư tưởng cấp tiến tên Titi. Menn buộc phải giúp Titi tìm ra sự thật đằng sau vụ tai nạn cướp đi sinh mạng của cậu để Titi được siêu thoát và trả lại bình yên cho mình. Trùng hợp làm sao, tất cả đầu mối đều dẫn đến vụ buôn ma túy bất hợp pháp do Menn và Goi, nữ cảnh sát lớn tuổi mà Menn yêu mến, đang điều tra.',
            actors: [
                {
                    actorName: 'Billkin',
                    actorImage: './assets/images/actors/bilkin.jpg'
                },
                {
                    actorName: 'PP Krit',
                    actorImage: './assets/images/actors/pp.jpg'
                }
            ],
            imageUrl: './assets/images/movies/cuoimaigiahan.webp',
            bigPoster: './assets/images/movieBigPosters/BPcuoimagiaihan.jpg',
            trailer: 'https://www.youtube.com/embed/L7KuvLShQ_Y?si=RoGqPvVhM-Ls-xrG',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:20', room: 'Phòng 1' },
                                { time: '18:10', room: 'Phòng 2' },
                                { time: '20:30', room: 'Phòng 3' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '16:20', room: 'Phòng 1' },
                                { time: '18:10', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '16:20', room: 'Phòng 1' },
                                { time: '18:10', room: 'Phòng 2' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '20:20', room: 'Phòng 5' },
                                { time: '21:00', room: 'Phòng 6' },
                                { time: '21:30', room: 'Phòng 1' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '16:50', room: 'Phòng 5' },
                                { time: '18:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '16:50', room: 'Phòng 5' },
                                { time: '18:00', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV005',
            name: 'BUỔI HẸN HÒ KINH HOÀNG',
            duration: '96 phút',
            releaseDate: '2025-04-11',
            nation: 'Mỹ',
            director: 'Christopher Landon',
            categories: ['Kinh dị', 'Tâm lý'],
            agePermisson: 'T18',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Drop / Buổi Hẹn Hò Kinh Hoàng diễn ra khi Buổi hẹn hò đầu tiên sau nhiều năm của Violet nhanh chóng trở thành ác mộng khi cô nhận được những tin nhắn ẩn danh kỳ lạ. Kẻ gửi đe dọa giết con trai và em gái cô nếu cô không làm theo yêu cầu của hắn',
            actors: [
                {
                    actorName: 'Meghann Fahy',
                    actorImage: './assets/images/actors/fahy.jpg'
                },
                {
                    actorName: 'Brandon Sklenar',
                    actorImage: './assets/images/actors/brandon.webp'
                }
            ],
            imageUrl: './assets/images/movies/buoihenhokinhhoang.webp',
            bigPoster: './assets/images/movieBigPosters/BPhenhokinhhoang.webp',
            trailer: 'https://www.youtube.com/embed/cQ1eYm_XIcA?si=zXYIR7CwUDvrB-86',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '9:00', room: 'Phòng 5' },
                                { time: '14:10', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '9:00', room: 'Phòng 5' },
                                { time: '14:10', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '16:20', room: 'Phòng 5' },
                                { time: '18:10', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '10:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '9:50', room: 'Phòng 5' },
                                { time: '12:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '9:50', room: 'Phòng 5' },
                                { time: '18:00', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 3' },
                                { time: '14:40', room: 'Phòng 4' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:50', room: 'Phòng 6' },
                                { time: '14:40', room: 'Phòng 1' },
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV006',
            name: 'INTERSTELLAR: HỐ TỬ THẦN',
            duration: '169 phút',
            releaseDate: '2025-02-28',
            nation: 'Mỹ',
            director: 'Chirstopher Nolan',
            categories: ['Khoa học viễn tưởng'],
            agePermisson: 'T13',
            subtitle: 'Phụ đề',
            format: 'IMAX',
            script: 'Khi Trái Đất dần trở nên quá tải, nhiệm vụ tìm kiếm hành tinh khác có thể sinh sống trở nên cấp thiết. Joseph Cooper là một cựu phi công NASA, nhận nhiệm vụ thám hiểm các vùng không gian xa xôi trên dải ngân hà, thắp lên hi vọng cho nhân loại. Nhận 5 đề cử Oscar và thắng tượng vàng Kỹ xảo xuất sắc nhất, Interstellar là một trong những tác phẩm xuất sắc của nhà làm phim lừng danh Christopher Nolan. Tác phẩm là biên niên ký về cuộc phiêu lưu vĩ đại của một nhóm các nhà thám hiểm sử dụng khám phá mới về lỗ đen vũ trụ để vượt qua các giới hạn thông thường trong du hành không gian, chinh phục khoảng không mênh mông trên một chuyến hành trình xuyên dải ngân hà.',
            actors: [
                {
                    actorName: 'Matthew McConaughey',
                    actorImage: './assets/images/actors/mc.webp'
                },
                {
                    actorName: 'Anne Hathaway',
                    actorImage: './assets/images/actors/anne.jpg'
                },
                {
                    actorName: 'Jessica Chastain',
                    actorImage: './assets/images/actors/jessica.webp'
                }
            ],
            imageUrl: './assets/images/movies/interstellar.jpg',
            bigPoster: './assets/images/movieBigPosters/BPinterstellar.jpg',
            trailer: 'https://www.youtube.com/embed/QqSp_dwslro?si=N4Vdo0oKx--u8bcw',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 7' },
                                { time: '20:10', room: 'Phòng 7' },
                                { time: '20:30', room: 'Phòng 6' },
                                { time: '23:10', room: 'Phòng 5' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 7' },
                                { time: '20:10', room: 'Phòng 7' },
                                { time: '20:30', room: 'Phòng 6' },
                                { time: '23:10', room: 'Phòng 5' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 7' },
                                { time: '20:10', room: 'Phòng 7' },
                                { time: '20:30', room: 'Phòng 6' },
                                { time: '23:10', room: 'Phòng 5' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '19:60', room: 'Phòng 7' },
                                { time: '22:10', room: 'Phòng 7' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '19:50', room: 'Phòng 7' },
                                { time: '22:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:50', room: 'Phòng 5' },
                                { time: '13:00', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '20:40', room: 'Phòng 4' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '20:20', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '20:20', room: 'Phòng 2' },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV007',
            name: 'FLOW: LẠC TRÔI',
            duration: '84 phút',
            releaseDate: '2025-03-7',
            nation: 'Pháp',
            director: 'Gints Zilbalodis',
            categories: ['Hoạt hình', 'Phiêu lưu'],
            agePermisson: 'P',
            subtitle: 'Lồng tiếng',
            format: '2D',
            script: 'Trước bối cảnh hậu tận thế, chú mèo xám nhút nhát, vốn luôn sợ nước phải rời bỏ vùng an toàn khi căn nhà thân yêu bị cuốn trôi bởi cơn lũ dữ. Trên hành trình vượt đại dương mênh mông, chú mèo cùng những người bạn đồng hành (Capybara, chó Labrador Retriever, Vượn Cáo, chim Thư ký) phải học cách vượt qua nỗi sợ và chấp nhận những điểm khác biệt để cùng nhau tồn tại',
            actors: [
                {
                    actorName: 'Mèo',
                    actorImage: './assets/images/actors/meo.png'
                },
                {
                    actorName: 'Capybara',
                    actorImage: './assets/images/actors/capybara.png'
                },
                {
                    actorName: 'Chó Labrador Retriever',
                    actorImage: './assets/images/actors/cho.png'
                },
                {
                    actorName: 'Vượn cáo',
                    actorImage: './assets/images/actors/vuoncao.png'
                },
                {
                    actorName: 'Chim thu ky',
                    actorImage: './assets/images/actors/chim.png'
                }
            ],
            imageUrl: './assets/images/movies/flow.webp',
            bigPoster: './assets/images/movieBigPosters/BPflow.jpg',
            trailer: 'https://www.youtube.com/embed/ZgZccxuj2RY?si=MiDnhaFYDhUmGLEO',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '9:00', room: 'Phòng 5' },
                                { time: '10:10', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '9:00', room: 'Phòng 5' },
                                { time: '10:10', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '9:00', room: 'Phòng 5' },
                                { time: '10:10', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '13:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '9:50', room: 'Phòng 5' },
                                { time: '13:00', room: 'Phòng 6' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '9:50', room: 'Phòng 5' },
                                { time: '13:00', room: 'Phòng 6' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '14:40', room: 'Phòng 4' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:20', room: 'Phòng 2' },
                                { time: '18:00', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '15:20', room: 'Phòng 2' },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV008',
            name: 'TAY NGHIỆP DƯ',
            duration: '122 phút',
            releaseDate: '2025-04-11',
            nation: 'Mỹ',
            director: 'James Hawes',
            categories: ['Hành động'],
            agePermisson: 'T16',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'The Amateur/ Tay Nghiệp Dư kể về Charlie Heller (Rami Malek) là một chuyên gia giải mã thiên tài nhưng sống khép kín, làm việc cho CIA. Cuộc đời anh bỗng chốc đảo lộn khi vợ anh bị sát hại trong một vụ tấn công khủng bố ở London. Khi cấp trên từ chối hành động, Charlie quyết định tự mình truy lùng những kẻ đứng sau, dấn thân vào hành trình báo thù đầy nguy hiểm trên toàn cầu, nơi trí tuệ sắc bén trở thành vũ khí tối thượng giúp anh vượt qua mọi kẻ truy đuổi.',
            actors: [
                {
                    actorName: 'Rami Malek',
                    actorImage: './assets/images/actors/rami.jpg'
                },
                {
                    actorName: 'Jon Bernthal',
                    actorImage: './assets/images/actors/jon.jpg'
                },
            ],
            imageUrl: './assets/images/movies/taynghiepdu.webp',
            bigPoster: './assets/images/movieBigPosters/BPamateur.jpg',
            trailer: 'https://www.youtube.com/embed/c0SG_zJarME?si=lIxO5mKxPqhX2SR8',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:00', room: 'Phòng 1' },
                                { time: '16:10', room: 'Phòng 2' },
                                { time: '17:30', room: 'Phòng 3' },
                                { time: '18:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '13:00', room: 'Phòng 2' },
                                { time: '15:10', room: 'Phòng 3' },
                                { time: '18:30', room: 'Phòng 4' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '13:00', room: 'Phòng 2' },
                                { time: '15:10', room: 'Phòng 3' },
                                { time: '17:30', room: 'Phòng 4' },
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '8:00', room: 'Phòng 1' },
                                { time: '10:10', room: 'Phòng 2' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '8:10', room: 'Phòng 1' },
                                { time: '10:10', room: 'Phòng 2' },
                                { time: '17:30', room: 'Phòng 3' },
                                { time: '18:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '15:00', room: 'Phòng 1' },
                                { time: '16:10', room: 'Phòng 2' },
                                { time: '17:30', room: 'Phòng 3' },
                                { time: '18:10', room: 'Phòng 4' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:40', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '16:20', room: 'Phòng 2' },
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '16:20', room: 'Phòng 2' },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV009',
            name: 'BẠCH TUYẾT',
            duration: '108 phút',
            releaseDate: '2025-03-21',
            nation: 'Mỹ',
            director: 'Marc Webb',
            categories: ['Phiêu lưu'],
            agePermisson: 'P',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Phiên bản chuyển thể người đóng của bộ phim hoạt hình Bạch Tuyết & Bảy chú lùn của Disney năm 1937.',
            actors: [
                {
                    actorName: 'Rachel Zegler',
                    actorImage: './assets/images/actors/rachel.webp'
                },
                {
                    actorName: 'Gal Gadot',
                    actorImage: './assets/images/actors/galgadot.jpg'
                },
            ],
            imageUrl: './assets/images/movies/snowwhite.webp',
            trailer: 'https://www.youtube.com/embed/iV46TJKL8cU?si=NVFyMEub38e0rrJX',
            bigPoster: './assets/images/movieBigPosters/BPsnowwhite.webp',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtime: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:00', room: 'Phòng 1' },
                                { time: '20:10', room: 'Phòng 2' },
                                { time: '22:30', room: 'Phòng 3' },
                                { time: '23:10', room: 'Phòng 4' }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            id: 'MV010',
            name: 'XỨ CÁT: PHẦN 2',
            duration: '166 phút',
            releaseDate: '2025-03-24',
            nation: 'Mỹ',
            director: 'Denis Villeneuve',
            categories: ['Hành động', 'Sử thi'],
            agePermisson: 'T13',
            subtitle: 'Phụ đề',
            format: 'IMAX',
            script: 'Dune: Part Two (tựa Việt: Dune: Hành Tinh Cát - Phần Hai) sẽ tiếp tục khám phá hành trình đậm chất thần thoại của Paul Atreides (Timothée Chalamet thủ vai) khi anh đồng hành cùng Chani (Zendaya thủ vai) và những người Fremen trên chặng đường trả thù những kẻ đã hủy hoại gia đình mình. Đối mặt với những lựa chọn giữa tình yêu của cuộc đời mình và số phận của vũ trụ, Paul phải ngăn chặn viễn cảnh tương lai tồi tệ chỉ mình anh nhìn thấy.',
            actors: [
                {
                    actorName: 'Timothee Chalamet',
                    actorImage: './assets/images/actors/timothee.jpg'
                },
                {
                    actorName: 'Zendaya',
                    actorImage: './assets/images/actors/zendaya.jpg'
                },
                {
                    actorName: 'Javier Bardem',
                    actorImage: './assets/images/actors/javier.webp'
                },
                {
                    actorName: 'Josh Brolin',
                    actorImage: './assets/images/actors/joshbrolin.webp'
                },
                {
                    actorName: 'Rebecca Ferguson',
                    actorImage: './assets/images/actors/rebecca.webp'
                }
            ],
            imageUrl: './assets/images/movies/dune.jpg',
            bigPoster: './assets/images/movieBigPosters/BPdunpart2.webp',
            trailer: 'https://www.youtube.com/embed/U2Qp5pL3ovA?si=6VPJKCo467r_s06-',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 7' },
                                { time: '17:40', room: 'Phòng 7' },
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 7' },
                                { time: '17:40', room: 'Phòng 7' },
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 7' },
                                { time: '17:40', room: 'Phòng 7' },
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '17:40', room: 'Phòng 7' },
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '17:40', room: 'Phòng 7' },
                                { time: '20:20', room: 'Phòng 7' }
                            ]
                        },
                    ]
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: [
                        {
                            date: '27-05-2025',
                            showtimes: [
                                { time: '15:50', room: 'Phòng 7' },
                                { time: '17:00', room: 'Phòng 7' },
                                { time: '20:30', room: 'Phòng 7' },
                                { time: '21:40', room: 'Phòng 7' },
                                { time: '22:50', room: 'Phòng 7' },

                            ]
                        },
                        {
                            date: '28-05-2025',
                            showtimes: [
                                { time: '16:50', room: 'Phòng 7' },
                                { time: '18:40', room: 'Phòng 7' },
                                { time: '19:20', room: 'Phòng 7' }
                            ]
                        },
                        {
                            date: '29-05-2025',
                            showtimes: [
                                { time: '19:50', room: 'Phòng 7' },
                                { time: '20:40', room: 'Phòng 7' },
                                { time: '22:00', room: 'Phòng 7' },
                                { time: '23:00', room: 'Phòng 7' }
                            ]
                        },
                    ]
                }
            ]

        }
    ]

export { movies };

const movieComingSoons =
    [
        {
            id: 'MV013',
            name: 'BÍ KÍP LUYỆN RỒNG',
            duration: '100 phút',
            releaseDate: '13/6/2025',
            nation: 'Mỹ',
            director: 'Dean DeBlois',
            categories: ['Hành động', 'Phiêu lưu'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng.',
            actors: [
                {
                    actorName: 'Mason Thames',
                    actorImage: './assets/images/actors/mason.jpg'
                },
                {
                    actorName: 'Răng Sún',
                    actorImage: './assets/images/actors/toothless.webp'
                }
            ],
            imageUrl: './assets/images/movies/comingsoons/bikipluyenrong.webp',
            bigPoster: './assets/images/movieBigPosters/BPdragon.jpg',
            trailer: 'https://www.youtube.com/embed/22w7z_lT6YM?si=WBejZJZe9ylqt_aB',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: []
                }
            ]
        },
        {
            id: 'MV014',
            name: '28 năm sau',
            duration: '126 phút',
            releaseDate: '20/06/2025',
            nation: 'Mỹ',
            director: 'Danny Boyle',
            categories: ['Hồi hộp', 'Kinh dị'],
            agePermisson: 'X',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Cơn ác mộng chưa kết thúc. Virus trở lại, kéo theo bóng tối bao trùm nước Anh. Một hành trình sinh tử: cậu bé tìm kiếm bác sĩ để cứu mẹ mình, băng qua vùng đất chết chóc đầy xác sống tiến hóa và những kẻ nguy hiểm ẩn sau gương mặt tử tế. Liệu niềm hy vọng cuối cùng có đủ để cứu họ khỏi vực thẳm tuyệt vọng?',
            actors: [
                {
                    actorName: 'Aaron Taylor-Johnson',
                    actorImage: './assets/images/actors/aaron.jpg'
                }

            ],
            imageUrl: './assets/images/movies/comingsoons/28namsau.webp',
            bigPoster: './assets/images/movieBigPosters/BP28.jpg',
            trailer: 'https://www.youtube.com/embed/nHfMFnAKfpE?si=OB3rRjVLLgiMR6kn',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
            ]
        },
        {
            id: 'MV015',
            name: 'NHIỆM VỤ BẤT KHẢ THI: NGHIỆP BÁO - PHẦN 2',
            duration: 'Đang cập nhật',
            releaseDate: '30/05/2025',
            nation: 'Mỹ',
            director: 'Christopher McQuarrie',
            categories: ['Hành động', 'Phiêu lưu'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Cuộc đời là tất thảy những lựa chọn. Tom Cruise thủ vai Ethan Hunt trở lại trong Nhiệm Vụ: Bất Khả Thi – Nghiệp Báo Cuối Cùng.',
            actors: [
                {
                    actorName: 'Tom Cruise',
                    actorImage: './assets/images/actors/tomcruise.webp'
                }
            ],
            imageUrl: './assets/images/movies/comingsoons/nhiemvubatkhathi.webp',
            bigPoster: './assets/images/movieBigPosters/BPmisssion.jpg',
            trailer: 'https://www.youtube.com/embed/no2HdwAX8jI?si=v3rB6F-i3zbH8bdw',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: []
                }
            ]
        },
        {
            id: 'MV016',
            name: 'THẾ GIỚI KHỦNG LONG: TÁI SINH',
            duration: 'Đang cập nhật',
            releaseDate: '4/07/2025',
            nation: 'Mỹ',
            director: 'Gareth Edwards',
            categories: ['Hành động', 'Phiêu lưu'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Tinh hoa hội tụ! Bộ ba Scarlett Johansson, Mahershala Ali và Jonathan Bailey sẽ mở ra 1 kỷ nguyên khủng long hoàn toàn mới! THẾ GIỚI KHỦNG LONG: TÁI SINH | Dự kiến khởi chiếu: 04.07.2025.',
            actors: [
                {
                    actorName: 'Rexy',
                    actorImage: './assets/images/actors/rexy.jpg'
                },
                {
                    actorName: 'Blue',
                    actorImage: './assets/images/actors/blue.jpg'
                }
            ],
            imageUrl: './assets/images/movies/comingsoons/thegioikhunglong.webp',
            bigPoster: './assets/images/movieBigPosters/BPjurrasic.jpg',
            trailer: 'https://www.youtube.com/embed/jan5CFWs9ic?si=eiIJrNve2GxX6Gw1',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: []
                }
            ]
        },
        {
            id: 'MV017',
            name: 'SUPERMAN',
            duration: 'Đang cập nhật',
            releaseDate: '11/07/2025',
            nation: 'Mỹ',
            director: 'James Gunn',
            categories: ['Hành động', 'Siêu anh hùng'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'Mùa hè tới đây, Warner Bros. Pictures sẽ mang “Superman” - phim điện ảnh đầu tiên của DC Studios đến các rạp chiếu trên toàn cầu. Với phong cách riêng biệt của mình, James Gunn sẽ khắc họa người hùng huyền thoại trong vũ trụ DC hoàn toàn mới, với sự kết hợp độc đáo của các yếu tố hành động đỉnh cao, hài hước và vô cùng cảm xúc. Một Superman với lòng trắc ẩn và niềm tin vào sự thiện lương của con người sẽ xuất hiện đầy hứa hẹn trên màn ảnh.',
            actors: [
                {
                    actorName: 'JDavid Corenswet',
                    actorImage: './assets/images/actors/david.jpg'
                }

            ],
            imageUrl: './assets/images/movies/comingsoons/superman.webp',
            bigPoster: './assets/images/movieBigPosters/BPsuperman.jpg',
            trailer: 'https://www.youtube.com/embed/8B1EtVPBSMw?si=dVL8O6l7klIwwcfs',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: []
                }
            ]
        },
        {
            id: 'MV018',
            name: 'BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐẦU TIÊN',
            duration: 'Đang cập nhật',
            releaseDate: '2025-07-25',
            nation: 'Mỹ',
            director: 'Matt Shakman',
            categories: ['Hành động', 'Phiêu lưu', 'Giả tưởng'],
            agePermisson: 'K',
            subtitle: 'Phụ đề',
            format: '2D',
            script: 'The Fantastic Four: First Steps / Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên kể về một gia đình của Marvel đối mặt với thử thách khó khăn, họ vừa phải cân bằng vai trò là anh hùng với sức mạnh của mối quan hệ gia đình, vừa phải bảo vệ Trái đất khỏi một vị thần không gian hung dữ tên là Galactus và sứ giả của hắn, Silver Surfer.',

            actors: [
                {
                    actorName: 'Pedro Pascal',
                    actorImage: './assets/images/actors/pedro.jpg'
                },
                {
                    actorName: 'Vanessa Kirby',
                    actorImage: './assets/images/actors/kirby.webp'
                },
                {
                    actorName: 'Joseph Quinn',
                    actorImage: './assets/images/actors/quinn.jpg'
                },
                {
                    actorName: 'Ebon Moss-Bachrach',
                    actorImage: './assets/images/actors/ebon.jpg'
                }
            ],
            imageUrl: './assets/images/movies/comingsoons/fantastic4.jpeg',
            bigPoster: './assets/images/movieBigPosters/BPfantastic4.avif',
            trailer: 'https://www.youtube.com/embed/lQ7hEyITOsE?si=yTa9hbu5XkmI6X3R',
            cinemas: [
                {
                    cinemaName: 'Bingebox Cinema Chùa Bộc',
                    cinemaAddress: 'Số 1 Chùa Bộc, Đống Đa, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Hoàn Kiếm',
                    cinemaAddress: '272 Đ. Võ Chí Công, Phú Thượng, Tây Hồ, Hà Nội',
                    schedules: []
                },
                {
                    cinemaName: 'Bingebox Cinema Metropolis Liễu Giai',
                    cinemaAddress: '29 P. Liễu Giai, Ngọc Khánh, Ba Đình, Hà Nội 100000',
                    schedules: []
                }
            ]
        }
    ]

export { movieComingSoons };

const news = {
    '1': {
        title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động BINGEBOX CINEMA',
        date: '29/04/2025',
        intro: 'Trong khuôn khổ hoạt động Cinetour khuấy lên cơn sốt "Lật mặt 8: Vòng tay nắng" đoàn làm phim đã có dịp giao lưu với khán giả tại các cụm rạp chiếu phim khắp cả nước. Tại Trung tâm Chiếu phim Quốc gia, Cinetour đã có buổi giao lưu đầy ý nghĩa với sự góp mặt của đạo diễn Lý Hải và các diễn viên chính của bộ phim như Võ Thành Tâm và nhiều gương mặt trẻ tài năng khác.',
        images: [
            {
                src: 'assets/images/news/latmat1.jpg',
                  caption: 'Toàn cảnh buổi giao lưu với khán giả tại BINGEBOX CINEMA'
            },
            {
                src: 'assets/images/news/latmat2.jpg',
                caption: 'Đạo diễn và dàn diễn viên chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/news/latmat3.jpg',
                caption: 'Không khí sôi động của khán giả tại buổi chiếu'
            },
            {
                src: 'assets/images/news/latmat4.jpg',
                caption: 'Đoàn phim giao lưu với khán giả sau buổi chiếu'
            },
            {
                src: 'assets/images/news/latmat5.jpg',
                caption: 'Đoàn phim chụp ảnh lưu niệm cùng khán giả'
            }
        ],
        paragraphs: [
            '"Lật mặt 8: Vòng tay nắng" là phần thứ 8 trong series phim hành động ăn khách của đạo diễn Lý Hải. Nội dung phim xoay quanh câu chuyện về Hiếu - một tài xế xe ôm công nghệ có quá khứ phức tạp, vô tình gặp được Tú - cô gái bị mất trí nhớ sở hữu chiếc vòng tay bí ẩn. Từ đây, cả hai phải đối mặt với những thế lực nguy hiểm và tham lam đang truy đuổi họ vì chiếc vòng tay ấy.',
            'Cinetour lần này có sự tham gia của đạo diễn Lý Hải cùng các diễn viên chính gồm Võ Thành Tâm, Huy Khánh, Thanh Thức, Huỳnh Thi, Diệp Bảo Ngọc và các diễn viên khác. Các nghệ sĩ đã có những chia sẻ thú vị về hậu trường làm phim, những kỷ niệm đáng nhớ và cả những cảnh quay nguy hiểm.',
            'Đặc biệt, đạo diễn Lý Hải chia sẻ: "Lật mặt 8 là dự án tâm huyết mà tôi và ekip đã dành rất nhiều tâm sức. Chúng tôi muốn mang đến cho khán giả không chỉ những cảnh hành động mãn nhãn mà còn là câu chuyện cảm xúc về tình người, về sự hy sinh và lòng dũng cảm."',
            'Buổi giao lưu diễn ra trong không khí sôi động với sự tham gia nhiệt tình của hàng trăm khán giả. Nhiều khán giả đã có cơ hội đặt câu hỏi trực tiếp cho đoàn làm phim và nhận được những món quà lưu niệm từ đoàn phim.',
            'Sự kiện Cinetour "Lật mặt 8: Vòng tay nắng" tại rạp chiếu phim BingeBox đã khép lại thành công, để lại nhiều ấn tượng đẹp trong lòng khán giả yêu điện ảnh Việt Nam.'
        ],
        relatedNews: [
            { id: 2, title: 'Cinetour "Thám Tử Kiên: Kỳ Án Không Đầu" - Giao lưu bùng nổ tại rạp chiếu phim BingeBox' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại rạp chiếu phim BingeBox' }
        ]
    },

    '2': {
        title: 'Cinetour "Thám Tử Kiên: Kỳ Án Không Đầu" - Giao lưu bùng nổ tại rạp chiếu phim BingeBox',
        date: '29/04/2025',
        intro: 'Đoàn làm phim "Thám Tử Kiên: Kỳ Án Không Đầu" đã có buổi gặp gỡ khán giả tại rạp chiếu phim BingeBox. Sự kiện thu hút hàng trăm người hâm mộ, với sự tham gia của đạo diễn Phạm Gia An cùng dàn diễn viên chính của tác phẩm kinh dị được mong đợi nhất năm nay.',
        images: [
            {
                src: 'assets/images/news/thamtukien1.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả tại rạp chiếu phim BingeBox'
            },
            {
                src: 'assets/images/news/thamtukien3.jpg',
                caption: 'Các diễn viên chính chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/news/thamtukien2.jpg',
                caption: 'Khán giả háo hức chờ đón buổi chiếu phim'
            }
        ],
        paragraphs: [
            '"Thám Tử Kiên: Kỳ Án Không Đầu" là bộ phim kinh dị - trinh thám được chuyển thể từ tiểu thuyết cùng tên của nhà văn Nguyễn Phong. Bộ phim xoay quanh câu chuyện về thám tử Kiên, người phải đối mặt với một vụ án kỳ bí liên quan đến hàng loạt cái chết không đầu gây rúng động thành phố.',
            'Tại buổi giao lưu, đạo diễn Phạm Gia An chia sẻ: "Chúng tôi đã mất gần 3 năm để hoàn thành bộ phim này. Đây không chỉ là một phim kinh dị đơn thuần mà còn chứa đựng nhiều thông điệp sâu sắc về xã hội và con người."',
            'Diễn viên chính Trần Phong - người vào vai thám tử Kiên - tiết lộ anh đã phải trải qua quá trình đào tạo nghiêm túc về kỹ năng điều tra, phân tích hiện trường để đảm bảo tính chân thực cho nhân vật. "Tôi đã làm việc với các cựu cảnh sát và chuyên gia pháp y để hiểu rõ hơn về công việc của một thám tử thực thụ", Phong chia sẻ.',
            'Buổi giao lưu kết thúc với phần ký tặng và chụp ảnh lưu niệm cùng khán giả. Bộ phim sẽ chính thức khởi chiếu vào ngày 10/5/2025 tại các rạp trên toàn quốc.'
        ],
        relatedNews: [
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động rạp chiếu phim BingeBox' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại rạp chiếu phim BingeBox' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' }
        ]
    },

    '3': {
        title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!',
        date: '24/04/2025',
        intro: 'Sự kiện đặc biệt "Thế Quyền Lực Cho Gen Z" đã diễn ra tại rạp chiếu phim BingeBox với sự tham gia của hàng trăm bạn trẻ thuộc thế hệ Gen Z. Chương trình không chỉ mang đến những bộ phim đặc sắc mà còn tạo ra diễn đàn thảo luận sôi nổi về vai trò của điện ảnh trong việc định hình tư duy của giới trẻ.',
        images: [
            {
                src: 'assets/images/news/thegenz1.jpg',
                caption: 'Các bạn trẻ Gen Z tham gia sự kiện tại rạp chiếu phim BingeBox'
            },
            {
                src: 'assets/images/news/thegenz2.jpg',
                caption: 'Panel thảo luận về vai trò của điện ảnh trong đời sống Gen Z'
            }
        ],
        paragraphs: [
            'Sự kiện "Thế Quyền Lực Cho Gen Z" là một sáng kiến của rạp chiếu phim BingeBox nhằm tạo không gian cho giới trẻ thể hiện quan điểm và đam mê điện ảnh. Chương trình bao gồm chuỗi chiếu phim ngắn do các nhà làm phim trẻ thực hiện, kết hợp với các phiên thảo luận về những vấn đề xã hội đang được Gen Z quan tâm.',
            'Đại diện ban tổ chức, anh Nguyễn Minh Đức chia sẻ: "Chúng tôi muốn trao quyền cho Gen Z không chỉ là khán giả mà còn là những người sáng tạo nội dung điện ảnh. Thông qua sự kiện này, chúng tôi hy vọng sẽ phát hiện và nuôi dưỡng những tài năng trẻ trong lĩnh vực điện ảnh Việt Nam."',
            'Phần thi làm phim ngắn 48 giờ đã thu hút 20 đội thi với những tác phẩm sáng tạo và đầy cảm xúc. Giải nhất thuộc về nhóm "Z Vision" với bộ phim ngắn "Tiếng Vọng Z" - một tác phẩm phản ánh chân thực về áp lực xã hội mà Gen Z đang phải đối mặt trong thời đại số.',
            'Bên cạnh việc thưởng thức phim, các bạn trẻ còn có cơ hội tham gia workshop về kỹ thuật làm phim, diễn xuất và biên kịch do các chuyên gia hàng đầu trong ngành điện ảnh hướng dẫn.',
            'Sự kiện khép lại với buổi hòa nhạc acoustic gồm những bản nhạc phim nổi tiếng được trình bày bởi các nghệ sĩ trẻ tài năng. Ban tổ chức cho biết, "Thế Quyền Lực Cho Gen Z" sẽ trở thành sự kiện thường niên, hứa hẹn nhiều điều thú vị hơn nữa trong những năm tới.'
        ],
        relatedNews: [
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động rạp chiếu phim BingeBox' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '4': {
        title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025) VÀ CÁC NGÀY LỄ LỚN 1/5, 7/5/2025',
        date: '24/04/2025',
          intro: 'Kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2025) và các ngày lễ lớn 1/5, 7/5/2025, BINGEBOX CINEMA tổ chức đợt phim đặc biệt với hàng loạt tác phẩm điện ảnh kinh điển và hiện đại về lịch sử đấu tranh giải phóng dân tộc.',
        images: [
            {
                src: 'assets/images/news/dot1.jpg',
                caption: 'Poster chính thức của đợt phim kỷ niệm'
            },
            {
                src: 'assets/images/news/dot2.jpg',
                caption: 'Lễ khai mạc đợt phim kỷ niệm tại rạp chiếu phim BingeBox'
            }
        ],
        paragraphs: [
            'Đợt phim kỷ niệm sẽ diễn ra từ ngày 25/4 đến 10/5/2025, với hơn 20 tác phẩm điện ảnh được tuyển chọn kỹ lưỡng. Các phim được chia thành ba chủ đề chính: "Ký ức hào hùng", "Con đường thống nhất" và "50 năm - Một chặng đường phát triển".',
            'Trong khuôn khổ đợt phim, khán giả sẽ được thưởng thức những tác phẩm kinh điển như "Vĩ tuyến 17 ngày và đêm", "Mùa xuân đầu tiên", "Đường về quê mẹ" cùng với các phim hiện đại như "Đất rừng phương Nam", "Em và Trịnh", "Bố già".',
            'Điểm nhấn của đợt phim là buổi chiếu đặc biệt phim tài liệu "50 năm - Những dấu ấn lịch sử" vào ngày 30/4/2025, với sự tham dự của các nhân chứng lịch sử, cựu chiến binh và các thế hệ trẻ.',
            'Bên cạnh việc chiếu phim, rạp chiếu phim BingeBox còn tổ chức nhiều hoạt động phụ trợ như triển lãm ảnh "50 năm nhìn lại", tọa đàm "Điện ảnh và lịch sử dân tộc" cùng chương trình giao lưu với các đạo diễn, diễn viên gạo cội của nền điện ảnh cách mạng Việt Nam.',
            'Đại diện rạp chiếu phim BingeBox cho biết: "Đợt phim này không chỉ là dịp để ôn lại truyền thống lịch sử hào hùng của dân tộc mà còn là cơ hội để các thế hệ hôm nay, đặc biệt là giới trẻ, hiểu hơn về giá trị của hòa bình, độc lập và tự do mà các thế hệ cha anh đã đổi bằng xương máu để giành được."',
            'Đặc biệt, toàn bộ vé xem phim trong đợt chiếu này sẽ được giảm 50% cho học sinh, sinh viên và người có công với cách mạng.'
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại rạp chiếu phim BingeBox' }
        ]
    },

    '5': {
        title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC',
        date: '17/04/2025',
        intro: 'rạp chiếu phim BingeBox chính thức ra mắt chương trình "Suất chiếu đặc biệt sáng thứ 7" - một sáng kiến nhằm mang đến trải nghiệm xem phim độc đáo vào buổi sáng cuối tuần, hướng tới đối tượng gia đình và các bạn nhỏ.',
        images: [
            {
                src: 'assets/images/news/nhoctrum3.jpg',
                caption: 'Poster quảng bá cho suất chiếu đặc biệt sáng thứ 7'
            }
        ],
        paragraphs: [
            'Chương trình "Suất chiếu đặc biệt sáng thứ 7" sẽ bắt đầu từ ngày 19/4/2025 và diễn ra hàng tuần vào lúc 9h30 sáng tại Trung tâm Chiếu phim Quốc gia. Đây là dịp để gia đình có thêm lựa chọn giải trí chất lượng cao vào buổi sáng cuối tuần.',
            'Khởi đầu chương trình là bộ phim hoạt hình "Nhóc trùm 3: Cuộc phiêu lưu mới" - tác phẩm mới nhất trong series hoạt hình ăn khách toàn cầu. Đây là bộ phim phù hợp với mọi lứa tuổi, đặc biệt là các gia đình có con nhỏ.',
            'Đại diện Trung tâm Chiếu phim Quốc gia, bà Nguyễn Thị Minh Ngọc chia sẻ: "Chúng tôi nhận thấy nhu cầu giải trí vào buổi sáng cuối tuần của các gia đình ngày càng tăng. Suất chiếu đặc biệt này không chỉ mang đến những bộ phim chất lượng mà còn tạo ra không gian gắn kết gia đình thông qua nghệ thuật điện ảnh."',
            'Ngoài xem phim, khán giả tham gia suất chiếu sáng thứ 7 còn được trải nghiệm các hoạt động phụ trợ như giao lưu với nhân vật hoạt hình, workshop vẽ tranh theo chủ đề phim và tham gia các trò chơi tương tác trước giờ chiếu.',
            'Giá vé cho suất chiếu sáng thứ 7 được áp dụng mức ưu đãi đặc biệt. Cụ thể, vé gia đình (2 người lớn + 2 trẻ em) chỉ 200.000 đồng, thấp hơn 30% so với tổng giá vé lẻ. Ngoài ra, các gia đình mua vé trước 3 ngày sẽ được tặng thêm combo bắp nước miễn phí.'
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]   
    },

    '6': {
        title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại rạp chiếu phim BingeBox',
        date: '07/04/2025',
        intro: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại rạp chiếu phim BingeBox (NCC) vào tối ngày 3/4/2025 đã để lại ấn tượng sâu sắc trong lòng khán giả.',
        images: [
            {
                src: 'assets/images/news/diadao1.jpg',
                caption: 'Đoàn làm phim chụp ảnh với khán giả tại rạp chiếu phim BingeBox'
            },
            {
                src: 'assets/images/news/diadao2.jpg',
                caption: 'Các diễn viên chính chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/news/diadao3.jpg',
                caption: 'Khán giả háo hức chờ đón buổi chiếu phim'
            },
            {
                src: 'assets/images/news/diadao4.jpg',
                caption: 'Các diễn viên chính chụp ảnh cùng khán giả'
            },
            {
                src: 'assets/images/news/diadao5.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả'
            }
        ],
        paragraphs: [
            'Con số vé đặt trước vượt trội, đánh dấu một cột mốc ấn tượng cho bộ phim lịch sử Địa Đạo: Mặt Trời Trong Bóng Tối – tác phẩm hứa hẹn sẽ làm dậy sóng màn ảnh rộng trong tháng 4 này. Tinh thần dân tộc, niềm tự hào dân tộc được khắc họa rõ nét, tạo nên một cuộc hành trình đầy cảm xúc và kiêu hãnh.',
            'Ê-kíp của bộ phim, với sự góp mặt của đạo diễn Bùi Thạc Chuyên, NSƯT Cao Minh, diễn viên Thái Hòa, diễn viên Hồ Thu Anh cùng các thành viên khác, đã mang đến những chia sẻ thú vị về quá trình sản xuất và cảm hứng sáng tạo bộ phim. Đây là một cơ hội tuyệt vời để người hâm mộ được trực tiếp giao lưu và hiểu thêm về những câu chuyện đằng sau những cảnh quay đầy cảm xúc và ấn tượng của "Địa đạo: Mặt trời trong bóng tối".',
            'Các diễn viên chính cũng chia sẻ về cảm nhận của mình về bộ phim và cảm hứng sáng tạo từ những câu chuyện đằng sau những cảnh quay đầy cảm xúc và ấn tượng của "Địa đạo: Mặt trời trong bóng tối".',
        ],
        relatedNews: [
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động rạp chiếu phim BingeBox' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '7': {
        title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025',
        date: '02/04/2025',
        intro: 'rạp chiếu phim BingeBox xin thông báo danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025. Xin chúc mừng tất cả các bạn đã trúng tuyển cộng tác viên tại TTCPQG!',
        images: [
            {
                src: 'assets/images/news/danhsach1.jpg',
                caption: 'Danh sách cộng tác viên trúng tuyển'
            }
        ],
        paragraphs: [
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '8': {
        title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại rạp chiếu phim BingeBox.',
        date: '02/04/2025',
        intro: 'Tối qua, sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối đã chính thức diễn ra tại rạp chiếu phim BingeBox, thu hút sự chú ý mạnh mẽ từ đông đảo khách mời đến từ các cơ quan, ban ngành, nghệ sĩ, cùng cộng đồng yêu điện ảnh Việt Nam. ',
        images: [
            {
                src: 'assets/images/news/ramat1.jpg',
                caption: 'Đoàn làm phim chụp ảnh cùng poster'
            },
            {
                src: 'assets/images/news/ramat2.jpg',
                caption: 'Nghệ sĩ Xuân Bắc'
            },
            {
                src: 'assets/images/news/ramat3.jpg',
                caption: 'số lượng lớn khán giả đi xem Địa Đạo'
            },
            {
                src: 'assets/images/news/ramat4.jpg',
                caption: 'Khán giả háo hức chờ đón buổi chiếu phim'
            },
            {
                src: 'assets/images/news/ramat5.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả,'
            },
            {
                src: 'assets/images/news/ramat6.jpg',
                caption: 'Các diễn viên chính chụp ảnh cùng khán giả'
            }
            
        ],
        paragraphs: [
            'Mặc dù suất chiếu chính thức chỉ bắt đầu vào lúc 19h ngày 2/4, nhưng ngay trước đó, vào 13h cùng ngày, bộ phim đã ghi nhận một con số doanh thu ấn tượng lên đến hơn 2,9 tỷ đồng, với 38.000 vé được bán ra. Đây là một thành công vượt trội, đặc biệt khi Địa Đạo đạt doanh thu gấp ba lần tổng doanh thu của 24 bộ phim khác đang cùng lúc chiếu tại các rạp Việt.',
            'Màn khởi đầu này không chỉ khẳng định sức hút mãnh liệt của bộ phim, mà còn là một tín hiệu tích cực cho thấy Địa Đạo: Mặt Trời Trong Bóng Tối có thể trở thành một trong những tác phẩm ăn khách nhất tại phòng vé Việt trong năm 2025. Được đạo diễn bởi Bùi Thạc Chuyên, bộ phim không chỉ mang lại những trải nghiệm điện ảnh xuất sắc mà còn mở ra một hành trình cảm xúc sâu lắng về lòng yêu nước, sự hy sinh anh dũng của những người lính và nhân dân miền Nam trong cuộc kháng chiến chống Mỹ.',
            'Điểm đặc biệt của Địa Đạo chính là cách mà bộ phim tái hiện một thời kỳ lịch sử hào hùng, đầy thử thách nhưng cũng vô cùng anh dũng của dân tộc. Từ những trận đánh ác liệt, đến những hình ảnh kiên cường của các chiến sĩ trong lòng đất chật hẹp, thiếu thốn đủ mọi thứ nhưng vẫn không khuất phục trước khó khăn, bộ phim đã khắc họa một cách chân thực và xúc động sức mạnh của ý chí và tình yêu quê hương đất nước. Đây không chỉ là một tác phẩm điện ảnh đầy kịch tính mà còn là một bản hùng ca, chạm đến trái tim người xem, khơi dậy niềm tự hào và lòng trân trọng những giá trị lịch sử vô giá của dân tộc Việt Nam.',
            'Với sự thành công ngay từ những giờ phút đầu tiên, Địa Đạo chắc chắn sẽ làm nên tiếng vang lớn và là một dấu ấn sâu đậm trong nền điện ảnh Việt Nam.'
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại rạp chiếu phim BingeBox tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '9': {
        title: 'Liên hoan phim ngắn cuối tuần tại rạp chiếu phim BingeBox',
        date: '01/04/2025',
        intro: 'Rạp chiếu phim BingeBox khởi động chuỗi sự kiện "Liên hoan phim ngắn cuối tuần" nhằm tạo sân chơi cho các nhà làm phim trẻ và giới thiệu những tác phẩm điện ảnh ngắn xuất sắc đến công chúng.',
        images: [
            {
                src: 'assets/images/news/ramat2.jpg',
                caption: 'Phiên khai mạc Liên hoan phim ngắn cuối tuần'
            }
        ],
        paragraphs: [
            'Liên hoan phim ngắn cuối tuần sẽ diễn ra định kỳ vào các ngày cuối tuần tại rạp chiếu phim BingeBox. Mỗi tuần sẽ có một chủ đề khác nhau, tạo nên sự đa dạng và phong phú cho sự kiện.',
            'Đây là cơ hội tuyệt vời cho các nhà làm phim trẻ được giới thiệu tác phẩm của mình đến công chúng rộng rãi. Ngoài ra, khán giả cũng có dịp thưởng thức những tác phẩm điện ảnh ngắn chất lượng cao từ nhiều thể loại và phong cách khác nhau.',
            'Chương trình không chỉ dừng lại ở việc chiếu phim mà còn tạo ra diễn đàn thảo luận giữa các nhà làm phim và khán giả, góp phần thúc đẩy sự phát triển của điện ảnh ngắn tại Việt Nam.',
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI rạp chiếu phim BingeBox' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại rạp chiếu phim BingeBox' }
        ]
    },

    '10': {
        title: 'Triển lãm "50 năm điện ảnh Việt Nam" tại rạp chiếu phim BingeBox',
        date: '29/03/2025',
        intro: 'Triển lãm "50 năm điện ảnh Việt Nam" được tổ chức tại rạp chiếu phim BingeBox, tái hiện chặng đường phát triển của nền điện ảnh nước nhà từ 1975 đến 2025 với hàng trăm hiện vật, tư liệu quý giá.',
        images: [
            {
                src: 'assets/images/news/latmat3.jpg',
                caption: 'Không gian triển lãm tại rạp chiếu phim BingeBox'
            }
        ],
        paragraphs: [
            'Triển lãm "50 năm điện ảnh Việt Nam" là sự kiện văn hóa - nghệ thuật đánh dấu nửa thế kỷ phát triển của điện ảnh Việt Nam kể từ ngày đất nước thống nhất. Triển lãm quy tụ hàng trăm hiện vật, tư liệu quý giá từ các bộ phim tiêu biểu của điện ảnh Việt Nam qua các thời kỳ.',
            'Không gian triển lãm được chia thành 5 khu vực chính, tương ứng với 5 giai đoạn phát triển của điện ảnh Việt Nam: Giai đoạn điện ảnh cách mạng (1975-1985), Giai đoạn đổi mới (1986-1995), Giai đoạn hội nhập (1996-2005), Giai đoạn bùng nổ thương mại (2006-2015) và Giai đoạn phát triển toàn diện (2016-2025).',
            'Đặc biệt, triển lãm còn giới thiệu những công nghệ điện ảnh hiện đại đang được áp dụng trong sản xuất phim tại Việt Nam hiện nay, hứa hẹn mang đến trải nghiệm thú vị cho người xem.',
        ],
        relatedNews: [
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại rạp chiếu phim BingeBox' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại rạp chiếu phim BingeBox' }
        ]
    },

    '11': {
        title: 'Workshop "Nghệ thuật dựng phim" tại rạp chiếu phim BingeBox',
        date: '25/03/2025',
        intro: 'Workshop "Nghệ thuật dựng phim" do rạp chiếu phim BingeBox phối hợp với Hiệp hội Điện ảnh Việt Nam tổ chức đã thu hút đông đảo sinh viên điện ảnh và những người đam mê làm phim tham gia.',
        images: [
            {
                src: 'assets/images/news/thamtukien3.jpg',
                caption: 'Không khí workshop tại rạp chiếu phim BingeBox'
            }
        ],
        paragraphs: [
            'Workshop "Nghệ thuật dựng phim" là một phần trong chuỗi sự kiện đào tạo về kỹ năng làm phim do Trung tâm Chiếu phim Quốc gia tổ chức. Chương trình có sự tham gia hướng dẫn của chuyên gia dựng phim hàng đầu Việt Nam, nhà dựng phim Nguyễn Tuấn Anh và biên tập phim Hoàng Thị Mai.',
            'Trong khuôn khổ workshop, các học viên được tiếp cận với các kỹ thuật dựng phim hiện đại, từ lý thuyết đến thực hành trên các phần mềm chuyên nghiệp như Adobe Premiere Pro, Final Cut Pro và DaVinci Resolve.',
            'Điểm nổi bật của workshop là phần thực hành dựng phim ngắn từ các footage có sẵn, giúp học viên áp dụng trực tiếp những kiến thức đã học vào công việc thực tế.',
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại rạp chiếu phim BingeBox' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' }
        ]
    },

    '12': {
        title: 'Lễ trao giải cuộc thi "Kịch bản phim ngắn Việt Nam 2025" tại rạp chiếu phim BingeBox',
        date: '20/03/2025',
        intro: 'Lễ trao giải cuộc thi "Kịch bản phim ngắn Việt Nam 2025" đã diễn ra trang trọng tại rạp chiếu phim BingeBox, vinh danh những tài năng trẻ trong lĩnh vực sáng tác kịch bản phim.',
        images: [
            {
                src: 'assets/images/news/diadao4.jpg',
                caption: 'Ban giám khảo và các tác giả đoạt giải tại lễ trao giải'
            }
        ],
        paragraphs: [
            'Cuộc thi "Kịch bản phim ngắn Việt Nam 2025" là sáng kiến của rạp chiếu phim BingeBox nhằm khuyến khích sáng tạo trong lĩnh vực viết kịch bản phim và phát hiện những tài năng mới. Cuộc thi đã thu hút hơn 200 bài dự thi từ các tác giả trẻ trên cả nước.',
            'Giải Nhất thuộc về kịch bản "Tiếng vọng từ làng" của tác giả Nguyễn Văn Minh - một câu chuyện xúc động về những thay đổi văn hóa tại một làng quê Việt Nam trong quá trình đô thị hóa.',
            'Đặc biệt, 5 kịch bản xuất sắc nhất sẽ được rạp chiếu phim BingeBox hỗ trợ kinh phí sản xuất thành phim ngắn và công chiếu tại Trung tâm vào cuối năm nay.',
        ],
        relatedNews: [
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại rạp chiếu phim BingeBox' },
            { id: 11, title: 'Workshop "Nghệ thuật dựng phim" tại rạp chiếu phim BingeBox' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' }
        ]
    },

    '13': {
        title: 'Chương trình chiếu phim đặc biệt cho trẻ em khuyết tật tại rạp chiếu phim BingeBox',
        date: '15/03/2025',
        intro: 'rạp chiếu phim BingeBox phối hợp với các tổ chức từ thiện tổ chức chương trình chiếu phim đặc biệt dành cho trẻ em khuyết tật, nhằm mang đến trải nghiệm điện ảnh độc đáo và ý nghĩa cho các em nhỏ có hoàn cảnh đặc biệt.',
        images: [
            {
                src: 'assets/images/news/thegenz1.jpg',
                caption: 'Các em nhỏ hào hứng tham gia chương trình tại rạp chiếu phim BingeBox'
            }
        ],
        paragraphs: [
            'Chương trình chiếu phim đặc biệt đã mang đến niềm vui cho hơn 200 trẻ em khuyết tật đến từ các trung tâm bảo trợ xã hội trên địa bàn Hà Nội. Các em được thưởng thức bộ phim hoạt hình "Voi con Dumbo phiêu lưu ký" - tác phẩm được chuyển ngữ và có phụ đề đặc biệt phù hợp với trẻ em khiếm thính.',
            'Bên cạnh việc xem phim, các em còn được tham gia vào các hoạt động tương tác với các nhân vật hoạt hình và nhận quà tặng từ ban tổ chức. Đây là một phần trong chuỗi hoạt động cộng đồng thường niên của Trung tâm Chiếu phim Quốc gia.',
            'Đại diện rạp chiếu phim BingeBox cho biết: "Chúng tôi mong muốn nghệ thuật điện ảnh có thể đến với mọi đối tượng khán giả, không phân biệt hoàn cảnh hay điều kiện sống. Những nụ cười của các em hôm nay là động lực để chúng tôi tiếp tục duy trì và mở rộng chương trình này trong những năm tiếp theo."',
        ],
        relatedNews: [
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại rạp chiếu phim BingeBox' }
        ]
    },

    '14': {
        title: 'Rạp chiếu phim BingeBox nâng cấp hệ thống âm thanh Dolby Atmos',
        date: '10/03/2025',
        intro: 'Rạp chiếu phim BingeBox chính thức khánh thành hệ thống âm thanh Dolby Atmos hiện đại, đánh dấu bước tiến quan trọng trong việc nâng cao chất lượng trải nghiệm điện ảnh cho khán giả Việt Nam.',
        images: [
            {
                src: 'assets/images/news/dot2.jpg',
                caption: 'Lễ khánh thành hệ thống âm thanh mới tại rạp chiếu phim BingeBox'
            }
        ],
        paragraphs: [
            'Hệ thống âm thanh Dolby Atmos mới được lắp đặt tại hai phòng chiếu lớn nhất của rạp chiếu phim BingeBox, với tổng công suất 64 loa, mang đến trải nghiệm âm thanh vòm 3D sống động chưa từng có. Đây là hệ thống âm thanh điện ảnh tiên tiến nhất thế giới hiện nay.',
            'Với công nghệ này, âm thanh không còn bị giới hạn trong các kênh truyền thống mà có thể được định vị chính xác trong không gian ba chiều, giúp khán giả cảm nhận rõ ràng hướng di chuyển của từng âm thanh, từ tiếng mưa rơi phía trên đầu đến tiếng động cơ xe lao vút từ trước ra sau.',
            'Đại diện rạp chiếu phim BingeBox cho biết, việc nâng cấp hệ thống âm thanh nằm trong kế hoạch hiện đại hóa cơ sở vật chất kỹ thuật, nhằm đáp ứng nhu cầu ngày càng cao của khán giả về chất lượng trải nghiệm điện ảnh.',
        ],
        relatedNews: [
            { id: 15, title: 'rạp chiếu phim BingeBox kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại rạp chiếu phim BingeBox' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' }
        ]
    },

    '15': {
        title: 'Rạp chiếu phim BingeBox kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam',
        date: '05/03/2025',
        intro: 'Rạp chiếu phim BingeBox gia tổ chức lễ kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam với nhiều hoạt động đặc sắc và ưu đãi hấp dẫn cho khán giả.',
        images: [
            {
                src: 'assets/images/news/nhoctrum3.jpg',
                caption: 'Buổi lễ kỷ niệm 5 năm thành lập rạp chiếu phim 4D'
            }
        ],
        paragraphs: [
            'Rạp chiếu phim 4D tại rạp chiếu phim BingeBox chính thức đi vào hoạt động từ tháng 3/2020, mở ra một kỷ nguyên mới cho trải nghiệm điện ảnh tại Việt Nam. Trong 5 năm qua, rạp đã phục vụ hơn 1 triệu lượt khán giả, chiếu hơn 200 bộ phim định dạng 4D.',
            'Nhân dịp kỷ niệm 5 năm thành lập, rạp chiếu phim BingeBox tổ chức tuần lễ phim 4D với giá vé ưu đãi đặc biệt chỉ bằng 50% giá vé thông thường. Ngoài ra, 100 khán giả đầu tiên mỗi ngày còn được tặng bộ sưu tập kính 4D phiên bản giới hạn.',
            'Trong khuôn khổ sự kiện, rạp chiếu phim BingeBox cũng công bố kế hoạch nâng cấp trải nghiệm 4D với việc bổ sung thêm các hiệu ứng mới như khói lạnh, hương thơm và hiệu ứng bong bóng, dự kiến sẽ hoàn thành vào cuối năm 2025.',
        ],
        relatedNews: [
            { id: 14, title: 'Rạp chiếu phim BingeBox nâng cấp hệ thống âm thanh Dolby Atmos' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' },
            { id: 13, title: 'Chương trình chiếu phim đặc biệt cho trẻ em khuyết tật tại rạp chiếu phim BingeBox' }
        ]
    },

    '16': {
        title: 'Rạp chiếu phim BingeBox tổ chức "Tuần lễ điện ảnh Nhật Bản 2025"',
        date: '01/03/2025',
        intro: 'Rạp chiếu phim BingeBox phối hợp với Đại sứ quán Nhật Bản tại Việt Nam tổ chức "Tuần lễ điện ảnh Nhật Bản 2025", giới thiệu những tác phẩm điện ảnh xuất sắc của xứ sở hoa anh đào đến khán giả Việt Nam.',
        images: [
            {
                src: 'assets/images/news/diadao3.jpg',
                caption: 'Lễ khai mạc Tuần lễ điện ảnh Nhật Bản 2025'
            }
        ],
        paragraphs: [
            'Tuần lễ điện ảnh Nhật Bản 2025 diễn ra từ ngày 1/3 đến 7/3/2025 tại rạp chiếu phim BingeBox, với 14 bộ phim đặc sắc thuộc nhiều thể loại khác nhau, từ phim nghệ thuật, phim thương mại đến phim hoạt hình anime nổi tiếng.',
            'Điểm nhấn của sự kiện là buổi chiếu ra mắt bộ phim "Hoa anh đào mùa đông" của đạo diễn Hirokazu Kore-eda, tác phẩm vừa đoạt giải Cành Cọ Vàng tại Liên hoan phim Cannes 2024. Đặc biệt, đạo diễn Kore-eda sẽ có mặt tại buổi chiếu để giao lưu với khán giả Việt Nam.',
            'Ngoài các buổi chiếu phim, "Tuần lễ điện ảnh Nhật Bản 2025" còn tổ chức nhiều hoạt động văn hóa đặc sắc như trình diễn nghệ thuật truyền thống Nhật Bản, workshop làm phim anime và triển lãm poster phim Nhật Bản qua các thời kỳ.',
        ],
        relatedNews: [
            { id: 10, title: 'Triển lãm "50 năm điện ảnh Việt Nam" tại rạp chiếu phim BingeBox' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại rạp chiếu phim BingeBox' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' }
        ]
    }
} 

export { news };

const promotions = [
    {
        id: '01',
        title: "THỨ 2 CUỐI THÁNG",
        image: "assets/images/promotions/promotion1.PNG",
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
        image: "assets/images/promotions/promotion2.PNG",
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
        image: "assets/images/promotions/promotion3.PNG",
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
        image: "assets/images/promotions/promotion4.PNG",
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
        title: "SIÊU THỨ 4",
        image: "assets/images/promotions/promotion5.PNG",
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
        image: "assets/images/promotions/promotion6.PNG",
        description: "Mua vé online được tặng 1 nước ngọt tại quầy.",
        content: `
      🥤 Tặng ngay <strong>1 ly nước ngọt miễn phí</strong> khi mua vé online.<br>
      📱 Áp dụng qua app/web chính thức.<br>
      🧾 Xuất trình mã vé tại quầy để nhận nước.<br>
      ⚠ Mỗi vé được nhận 1 phần nước (không quy đổi sang sản phẩm khác).
    `
    }

];

export { promotions };



