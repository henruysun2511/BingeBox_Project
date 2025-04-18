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
                    actorImage: './assets/images/actor/jackblack.webp'
                },
                {
                    actorName: 'Jason Momoa',
                    actorImage: './assets/images/actor/jasonmomooa.jpg'
                }, 
                {
                    actorName: 'Emma Myers',
                    actorImage: './assets/images/actor/emmamyer.jpg'
                },
                {
                    actorName: 'Sebastian Eugene Hansen',
                    actorImage: './assets/images/actor/hansen.webp'
                }
            ],
            imageUrl: './assets/images/movie/minecraft.webp',
            trailer: 'https://www.youtube.com/watch?v=wJO_vIDZn-I',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/jackblack.webp'
                },
                {
                    actorName: 'Quang Tuấn',
                    actorImage: ''
                }, 
                {
                    actorName: 'Diễm Hằng Lamoon',
                    actorImage: ''
                },
                {
                    actorName: 'Anh Tú Wilson',
                    actorImage: ''
                },
                {
                    actorName: 'Uyển Ân',
                    actorImage: ''
                }
            ],
            imageUrl: 'assets/images/movie/diadao.webp',
            trailer: 'https://www.youtube.com/watch?v=-OGDDtsIBHA',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
            format: '2D IMAX',
            script: 'Sau khi gặp tổng thống Hoa Kỳ mới đắc cử Thaddeus Ross, Sam phải đối mặt với một sự cố quy mô quốc tế. Anh phải tìm ra mục đích đằng sau trước khi kẻ chủ mưu khiến cả thế giới phải khiếp sợ',
            actors: [
                {
                    actorName: 'Anthony Mackie',
                    actorImage: './assets/images/actor/janthonymackie.webp'
                },
                {
                    actorName: 'Harrison Ford',
                    actorImage: './assets/images/actor/harrisonford.jpg'
                }, 
                {
                    actorName: 'Sebastian Stan',
                    actorImage: './assets/images/actor/stan.webp'
                },
                {
                    actorName: 'Giancarlo Esposito',
                    actorImage: './assets/images/actor/esposito.webp'
                },
                {
                    actorName: 'Danny Ramirez',
                    actorImage: './assets/images/actor/danny.webp'
                }
            ],
            imageUrl: './assets/images/movie/captainamericaa.jpg',
            trailer: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
            ]
        },
        {
            id: 'MV004',
            name: 'CƯỚI MA GIẢI HẠN',
            duration: '118 phút',
            releaseDate: '2025-03-14',
            nation: 'Mỹ',
            director: 'Julius Onah',
            categories: ['Hành động', 'Siêu anh hùng'],
            agePermisson: 'T13',
            subtitle: 'Phụ đề',
            format: '2D IMAX',
            script: 'Sau khi gặp tổng thống Hoa Kỳ mới đắc cử Thaddeus Ross, Sam phải đối mặt với một sự cố quy mô quốc tế. Anh phải tìm ra mục đích đằng sau trước khi kẻ chủ mưu khiến cả thế giới phải khiếp sợ',
            actor: [
                {
                    actorName: 'Anthony Mackie',
                    actorImage: './assets/images/actor/janthonymackie.webp'
                },
                {
                    actorName: 'Harrison Ford',
                    actorImage: './assets/images/actor/harrisonford.jpg'
                }, 
                {
                    actorName: 'Sebastian Stan',
                    actorImage: './assets/images/actor/stan.webp'
                },
                {
                    actorName: 'Giancarlo Esposito',
                    actorImage: './assets/images/actor/esposito.webp'
                },
                {
                    actorName: 'Danny Ramirez',
                    actorImage: './assets/images/actor/danny.webp'
                }
            ],
            imageUrl: './assets/images/movie/cuoimaigiahan.webp',
            trailer: 'https://www.youtube.com/watch?v=wJO_vIDZn-I',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/fahy.jpg'
                },
                {
                    actorName: 'Brandon Sklenar',
                    actorImage: './assets/images/actor/brandon.webp'
                }
            ],
            imageUrl: './assets/images/movie/buoihenhokinhhoang.webp',
            trailer: 'https://www.youtube.com/watch?v=cQ1eYm_XIcA',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/mc.webp'
                },
                {
                    actorName: 'Anne Hathaway',
                    actorImage: './assets/images/actor/anne.jpg'
                },
                {
                    actorName: 'Jessica Chastain',
                    actorImage: './assets/images/actor/jessica.webp'
                }
            ],
            imageUrl: './assets/images/movie/interstellar.jpg',
            trailer: 'https://www.youtube.com/watch?v=QqSp_dwslro',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/meo.png'
                },
                {
                    actorName: 'Capybara',
                    actorImage: './assets/images/actor/capybara.png'
                },
                {
                    actorName: 'Chó Labrador Retriever',
                    actorImage: './assets/images/actor/cho.png'
                },
                {
                    actorName: 'Vượn cáo',
                    actorImage: './assets/images/actor/vuoncao.png'
                },
                {
                    actorName: 'Chim thu ky',
                    actorImage: './assets/images/actor/chim.png'
                }
            ],
            imageUrl: './assets/images/movie/flow.webp',
            trailer: 'https://www.youtube.com/watch?v=B3V-9tiuQTo',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/rami.jpg'
                },
                {
                    actorName: 'Jon Bernthal',
                    actorImage: './assets/images/actor/jon.jpg'
                },
            ],
            imageUrl: './assets/images/movie/taynghiepdu.webp',
            trailer: 'https://www.youtube.com/watch?v=c0SG_zJarME',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/rachel.webp'
                },
                {
                    actorName: 'Gal Gadot',
                    actorImage: './assets/images/actor/galgadot.jpg'
                },
            ],
            imageUrl: './assets/images/movie/snowwhite.webp',
            trailer: 'https://www.youtube.com/watch?v=iV46TJKL8cU',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
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
                    actorImage: './assets/images/actor/rachel.webp'
                },
                {
                    actorName: 'Zendaya',
                    actorImage: './assets/images/actor/galgadot.jpg'
                },
                {
                    actorName: 'Javier Bardem',
                    actorImage: './assets/images/actor/galgadot.jpg'
                },
                {
                    actorName: 'Josh Brolin',
                    actorImage: './assets/images/actor/galgadot.jpg'
                },
                {
                    actorName: 'Rebecca Ferguson',
                    actorImage: './assets/images/actor/galgadot.jpg'
                }
            ],
            imageUrl: './assets/images/movie/dune.jpg',
            trailer: 'https://www.youtube.com/watch?v=Way9Dexny3w',
            schedules: [
                {
                    date: '2025-04-13',
                    showtime: [
                        { time: '10:20', room: 'Phòng 1' },
                        { time: '12:10', room: 'Phòng 2' },
                        { time: '14:00', room: 'Phòng 3' },
                        { time: '15:50', room: 'Phòng 4' },
                        { time: '17:40', room: 'Phòng 5' },
                        { time: '20:20', room: 'Phòng 6' }
                    ]
                },
                {
                    date: '2025-04-14',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
                {
                    date: '2025-04-15',
                    showtime: [
                        { time: '19:20', room: 'Phòng 1' },
                        { time: '20:40', room: 'Phòng 2' }
                    ]
                },
            ]
        }
    ]

    
    var filmListContainer = document.getElementById("film-list");

    movies.forEach(item => {
        var colDiv = document.createElement('div');
        colDiv.className = "col-xl-3 col-lg-4 col-md-4 col-sm-6";
    
        colDiv.innerHTML = `
            <div class="inner-film">
                <div class="film-detail">
                    <a href="#">
                        <div class="film-poster">
                            <img src="${item.imageUrl}" alt="${item.name}">
                            <div class="inner-icon">
                                <a href="${item.trailer}" target="_blank"><i class="fa-regular fa-circle-play"></i></a>
                            </div>
                            <div class="inner-button">
                                <button>
                                    <a href="#">
                                        <i class="fa-solid fa-ticket"></i>
                                        MUA VÉ NGAY
                                    </a>
                                </button>
                            </div>
                        </div>
                    </a>
                    <ul>
                        <li><p class="infor age-permission">${item.agePermisson}</p></li>
                        <li><p class="infor subtitle">${item.subtitle}</p></li>
                        <li><p class="infor film-format">${item.format}</p></li>
                    </ul>
                    <a href="#"><h2 class="film-name">${item.name}</h2></a>
                    <h3 class="film-category">Thể loại: ${item.categories.join(', ')}</h3>
                </div>
            </div>
        `;
    
        filmListContainer.appendChild(colDiv);
    });


    let moviesJson = JSON.stringify(movies);
    console.log(moviesJson);


    

