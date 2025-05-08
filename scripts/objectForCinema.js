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
        subtitle: 'Unknown',
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
                schedules: []
            },
        ]
    },
    {
        id: 'MV015',
        name: 'NHIỆM VỤ BẤT KHẢ THI: NGHIỆP BÁO - PHẦN 2',
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
        bigPoster: './assets/images/movieBigPosters/BPsnowwhite.webp',
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
        id: 'MV016',
        name: 'SUPERMAN',
        duration: 'x phút',
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
        imageUrl: './assets/images/movies/comingsoons/fantastic4.jpeg',
        bigPoster: './assets/images/movieBigPosters/BPfantastic4.avif',
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
        id: 'MV017',
        name: 'BỘ TỨ SIÊU ĐẲNG: BƯỚC ĐẦU TIÊN',
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
        imageUrl: './assets/images/movies/comingsoons/fantastic4.jpeg',
        bigPoster: './assets/images/movieBigPosters/BPfantastic4.avif',
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
    }
]

export { movieComingSoons };






