// News Content Data Store
const newsData = {
    // News Item 1
    '1': {
        title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động BINGEBOX CINEMA',
        date: '29/04/2025',
        intro: 'Trong khuôn khổ hoạt động Cinetour khuấy lên cơn sốt "Lật mặt 8: Vòng tay nắng" đoàn làm phim đã có dịp giao lưu với khán giả tại các cụm rạp chiếu phim khắp cả nước. Tại Trung tâm Chiếu phim Quốc gia, Cinetour đã có buổi giao lưu đầy ý nghĩa với sự góp mặt của đạo diễn Lý Hải và các diễn viên chính của bộ phim như Võ Thành Tâm và nhiều gương mặt trẻ tài năng khác.',
        images: [
            {
                src: 'assets/images/new/latmat1.jpg',
                caption: 'Toàn cảnh buổi giao lưu với khán giả tại BINGEBOX CINEMA'
            },
            {
                src: 'assets/images/new/latmat2.jpg',
                caption: 'Đạo diễn và dàn diễn viên chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/new/latmat3.jpg',
                caption: 'Không khí sôi động của khán giả tại buổi chiếu'
            },
            {
                src: 'assets/images/new/latmat4.jpg',
                caption: 'Đoàn phim giao lưu với khán giả sau buổi chiếu'
            },
            {
                src: 'assets/images/new/latmat5.jpg',
                caption: 'Đoàn phim chụp ảnh lưu niệm cùng khán giả'
            }
        ],
        paragraphs: [
            '"Lật mặt 8: Vòng tay nắng" là phần thứ 8 trong series phim hành động ăn khách của đạo diễn Lý Hải. Nội dung phim xoay quanh câu chuyện về Hiếu - một tài xế xe ôm công nghệ có quá khứ phức tạp, vô tình gặp được Tú - cô gái bị mất trí nhớ sở hữu chiếc vòng tay bí ẩn. Từ đây, cả hai phải đối mặt với những thế lực nguy hiểm và tham lam đang truy đuổi họ vì chiếc vòng tay ấy.',
            'Cinetour lần này có sự tham gia của đạo diễn Lý Hải cùng các diễn viên chính gồm Võ Thành Tâm, Huy Khánh, Thanh Thức, Huỳnh Thi, Diệp Bảo Ngọc và các diễn viên khác. Các nghệ sĩ đã có những chia sẻ thú vị về hậu trường làm phim, những kỷ niệm đáng nhớ và cả những cảnh quay nguy hiểm.',
            'Đặc biệt, đạo diễn Lý Hải chia sẻ: "Lật mặt 8 là dự án tâm huyết mà tôi và ekip đã dành rất nhiều tâm sức. Chúng tôi muốn mang đến cho khán giả không chỉ những cảnh hành động mãn nhãn mà còn là câu chuyện cảm xúc về tình người, về sự hy sinh và lòng dũng cảm."',
            'Buổi giao lưu diễn ra trong không khí sôi động với sự tham gia nhiệt tình của hàng trăm khán giả. Nhiều khán giả đã có cơ hội đặt câu hỏi trực tiếp cho đoàn làm phim và nhận được những món quà lưu niệm từ đoàn phim.',
            'Sự kiện Cinetour "Lật mặt 8: Vòng tay nắng" tại BINGEBOX CINEMA đã khép lại thành công, để lại nhiều ấn tượng đẹp trong lòng khán giả yêu điện ảnh Việt Nam.'
        ],
        relatedNews: [
            { id: 2, title: 'Cinetour "Thám Tử Kiên: Kỳ Án Không Đầu" - Giao lưu bùng nổ tại BINGEBOX CINEMA' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại BINGEBOX CINEMA' }
        ]
    },

    // News Item 2
    '2': {
        title: 'Cinetour "Thám Tử Kiên: Kỳ Án Không Đầu" - Giao lưu bùng nổ tại BINGEBOX CINEMA',
        date: '29/04/2025',
        intro: 'Đoàn làm phim "Thám Tử Kiên: Kỳ Án Không Đầu" đã có buổi gặp gỡ khán giả tại BINGEBOX CINEMA. Sự kiện thu hút hàng trăm người hâm mộ, với sự tham gia của đạo diễn Phạm Gia An cùng dàn diễn viên chính của tác phẩm kinh dị được mong đợi nhất năm nay.',
        images: [
            {
                src: 'assets/images/new/thamtukien1.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả tại BINGEBOX CINEMA'
            },
            {
                src: 'assets/images/new/thamtukien3.jpg',
                caption: 'Các diễn viên chính chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/new/thamtukien2.jpg',
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
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động BINGEBOX CINEMA' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại BINGEBOX CINEMA' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' }
        ]
    },

    // News Item 3
    '3': {
        title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!',
        date: '24/04/2025',
        intro: 'Sự kiện đặc biệt "Thế Quyền Lực Cho Gen Z" đã diễn ra tại BINGEBOX CINEMA với sự tham gia của hàng trăm bạn trẻ thuộc thế hệ Gen Z. Chương trình không chỉ mang đến những bộ phim đặc sắc mà còn tạo ra diễn đàn thảo luận sôi nổi về vai trò của điện ảnh trong việc định hình tư duy của giới trẻ.',
        images: [
            {
                src: 'assets/images/new/thegenz1.jpg',
                caption: 'Các bạn trẻ Gen Z tham gia sự kiện tại BINGEBOX CINEMA'
            },
            {
                src: 'assets/images/new/thegenz2.jpg',
                caption: 'Panel thảo luận về vai trò của điện ảnh trong đời sống Gen Z'
            }
        ],
        paragraphs: [
            'Sự kiện "Thế Quyền Lực Cho Gen Z" là một sáng kiến của BINGEBOX CINEMA nhằm tạo không gian cho giới trẻ thể hiện quan điểm và đam mê điện ảnh. Chương trình bao gồm chuỗi chiếu phim ngắn do các nhà làm phim trẻ thực hiện, kết hợp với các phiên thảo luận về những vấn đề xã hội đang được Gen Z quan tâm.',
            'Đại diện ban tổ chức, anh Nguyễn Minh Đức chia sẻ: "Chúng tôi muốn trao quyền cho Gen Z không chỉ là khán giả mà còn là những người sáng tạo nội dung điện ảnh. Thông qua sự kiện này, chúng tôi hy vọng sẽ phát hiện và nuôi dưỡng những tài năng trẻ trong lĩnh vực điện ảnh Việt Nam."',
            'Phần thi làm phim ngắn 48 giờ đã thu hút 20 đội thi với những tác phẩm sáng tạo và đầy cảm xúc. Giải nhất thuộc về nhóm "Z Vision" với bộ phim ngắn "Tiếng Vọng Z" - một tác phẩm phản ánh chân thực về áp lực xã hội mà Gen Z đang phải đối mặt trong thời đại số.',
            'Bên cạnh việc thưởng thức phim, các bạn trẻ còn có cơ hội tham gia workshop về kỹ thuật làm phim, diễn xuất và biên kịch do các chuyên gia hàng đầu trong ngành điện ảnh hướng dẫn.',
            'Sự kiện khép lại với buổi hòa nhạc acoustic gồm những bản nhạc phim nổi tiếng được trình bày bởi các nghệ sĩ trẻ tài năng. Ban tổ chức cho biết, "Thế Quyền Lực Cho Gen Z" sẽ trở thành sự kiện thường niên, hứa hẹn nhiều điều thú vị hơn nữa trong những năm tới.'
        ],
        relatedNews: [
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động BINGEBOX CINEMA' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    // Add more news items here following the same structure
    '4': {
        title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 – 30/4/2025) VÀ CÁC NGÀY LỄ LỚN 1/5, 7/5/2025',
        date: '24/04/2025',
        intro: 'Kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 - 30/4/2025) và các ngày lễ lớn 1/5, 7/5/2025, BINGEBOX CINEMA tổ chức đợt phim đặc biệt với hàng loạt tác phẩm điện ảnh kinh điển và hiện đại về lịch sử đấu tranh giải phóng dân tộc.',
        images: [
            {
                src: 'assets/images/new/dot1.jpg',
                caption: 'Poster chính thức của đợt phim kỷ niệm'
            },
            {
                src: 'assets/images/new/dot2.jpg',
                caption: 'Lễ khai mạc đợt phim kỷ niệm tại BINGEBOX CINEMA'
            }
        ],
        paragraphs: [
            'Đợt phim kỷ niệm sẽ diễn ra từ ngày 25/4 đến 10/5/2025, với hơn 20 tác phẩm điện ảnh được tuyển chọn kỹ lưỡng. Các phim được chia thành ba chủ đề chính: "Ký ức hào hùng", "Con đường thống nhất" và "50 năm - Một chặng đường phát triển".',
            'Trong khuôn khổ đợt phim, khán giả sẽ được thưởng thức những tác phẩm kinh điển như "Vĩ tuyến 17 ngày và đêm", "Mùa xuân đầu tiên", "Đường về quê mẹ" cùng với các phim hiện đại như "Đất rừng phương Nam", "Em và Trịnh", "Bố già".',
            'Điểm nhấn của đợt phim là buổi chiếu đặc biệt phim tài liệu "50 năm - Những dấu ấn lịch sử" vào ngày 30/4/2025, với sự tham dự của các nhân chứng lịch sử, cựu chiến binh và các thế hệ trẻ.',
            'Bên cạnh việc chiếu phim, BINGEBOX CINEMA còn tổ chức nhiều hoạt động phụ trợ như triển lãm ảnh "50 năm nhìn lại", tọa đàm "Điện ảnh và lịch sử dân tộc" cùng chương trình giao lưu với các đạo diễn, diễn viên gạo cội của nền điện ảnh cách mạng Việt Nam.',
            'Đại diện BINGEBOX CINEMA cho biết: "Đợt phim này không chỉ là dịp để ôn lại truyền thống lịch sử hào hùng của dân tộc mà còn là cơ hội để các thế hệ hôm nay, đặc biệt là giới trẻ, hiểu hơn về giá trị của hòa bình, độc lập và tự do mà các thế hệ cha anh đã đổi bằng xương máu để giành được."',
            'Đặc biệt, toàn bộ vé xem phim trong đợt chiếu này sẽ được giảm 50% cho học sinh, sinh viên và người có công với cách mạng.'
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại BINGEBOX CINEMA' }
        ]
    },

    '5': {
        title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA',
        date: '17/04/2025',
        intro: 'BINGEBOX CINEMA chính thức ra mắt chương trình "Suất chiếu đặc biệt sáng thứ 7" - một sáng kiến nhằm mang đến trải nghiệm xem phim độc đáo vào buổi sáng cuối tuần, hướng tới đối tượng gia đình và các bạn nhỏ.',
        images: [
            {
                src: 'assets/images/new/nhoctrum3.jpg',
                caption: 'Poster quảng bá cho suất chiếu đặc biệt sáng thứ 7'
            }
        ],
        paragraphs: [
            'Chương trình "Suất chiếu đặc biệt sáng thứ 7" sẽ bắt đầu từ ngày 19/4/2025 và diễn ra hàng tuần vào lúc 9h30 sáng tại BINGEBOX CINEMA. Đây là dịp để gia đình có thêm lựa chọn giải trí chất lượng cao vào buổi sáng cuối tuần.',
            'Khởi đầu chương trình là bộ phim hoạt hình "Nhóc trùm 3: Cuộc phiêu lưu mới" - tác phẩm mới nhất trong series hoạt hình ăn khách toàn cầu. Đây là bộ phim phù hợp với mọi lứa tuổi, đặc biệt là các gia đình có con nhỏ.',
            'Đại diện BINGEBOX CINEMA  chia sẻ: "Chúng tôi nhận thấy nhu cầu giải trí vào buổi sáng cuối tuần của các gia đình ngày càng tăng. Suất chiếu đặc biệt này không chỉ mang đến những bộ phim chất lượng mà còn tạo ra không gian gắn kết gia đình thông qua nghệ thuật điện ảnh."',
            'Ngoài xem phim, khán giả tham gia suất chiếu sáng thứ 7 còn được trải nghiệm các hoạt động phụ trợ như giao lưu với nhân vật hoạt hình, workshop vẽ tranh theo chủ đề phim và tham gia các trò chơi tương tác trước giờ chiếu.',
            'Giá vé cho suất chiếu sáng thứ 7 được áp dụng mức ưu đãi đặc biệt. Cụ thể, vé gia đình (2 người lớn + 2 trẻ em) chỉ 200.000 đồng, thấp hơn 30% so với tổng giá vé lẻ. Ngoài ra, các gia đình mua vé trước 3 ngày sẽ được tặng thêm combo bắp nước miễn phí.'
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]   
    },

    '6': {
        title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại BINGEBOX CINEMA',
        date: '07/04/2025',
        intro: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại BINGEBOX CINEMA vào tối ngày 3/4/2025 đã để lại ấn tượng sâu sắc trong lòng khán giả.',
        images: [
            {
                src: 'assets/images/new/diadao1.jpg',
                caption: 'Đoàn làm phim chụp ảnh với khán giả tại BINGEBOX CINEMA'
            },
            {
                src: 'assets/images/new/diadao2.jpg',
                caption: 'Các diễn viên chính chia sẻ về quá trình làm phim'
            },
            {
                src: 'assets/images/new/diadao3.jpg',
                caption: 'Khán giả háo hức chờ đón buổi chiếu phim'
            },
            {
                src: 'assets/images/new/diadao4.jpg',
                caption: 'Các diễn viên chính chụp ảnh cùng khán giả'
            },
            {
                src: 'assets/images/new/diadao5.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả'
            }
        ],
        paragraphs: [
            'Con số vé đặt trước vượt trội, đánh dấu một cột mốc ấn tượng cho bộ phim lịch sử Địa Đạo: Mặt Trời Trong Bóng Tối – tác phẩm hứa hẹn sẽ làm dậy sóng màn ảnh rộng trong tháng 4 này. Tinh thần dân tộc, niềm tự hào dân tộc được khắc họa rõ nét, tạo nên một cuộc hành trình đầy cảm xúc và kiêu hãnh.',
            'Ê-kíp của bộ phim, với sự góp mặt của đạo diễn Bùi Thạc Chuyên, NSƯT Cao Minh, diễn viên Thái Hòa, diễn viên Hồ Thu Anh cùng các thành viên khác, đã mang đến những chia sẻ thú vị về quá trình sản xuất và cảm hứng sáng tạo bộ phim. Đây là một cơ hội tuyệt vời để người hâm mộ được trực tiếp giao lưu và hiểu thêm về những câu chuyện đằng sau những cảnh quay đầy cảm xúc và ấn tượng của "Địa đạo: Mặt trời trong bóng tối".',
            'Các diễn viên chính cũng chia sẻ về cảm nhận của mình về bộ phim và cảm hứng sáng tạo từ những câu chuyện đằng sau những cảnh quay đầy cảm xúc và ấn tượng của "Địa đạo: Mặt trời trong bóng tối".',
        ],
        relatedNews: [
            { id: 1, title: 'Cinetour "Lật Mặt 8: Vòng tay nắng" khuấy động BINGEBOX CINEMA' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '7': {
        title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025',
        date: '02/04/2025',
        intro: 'BINGEBOX CINEMA xin thông báo danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025. Xin chúc mừng tất cả các bạn đã trúng tuyển cộng tác viên tại BINGEBOX CINEMA!',
        images: [
            {
                src: 'assets/images/new/danhsach1.jpg',
                caption: 'Danh sách cộng tác viên trúng tuyển'
            }
        ],
        paragraphs: [
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    '8': {
        title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại BINGEBOX CINEMA.',
        date: '02/04/2025',
        intro: 'Tối qua, sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối đã chính thức diễn ra tại BINGEBOX CINEMA, thu hút sự chú ý mạnh mẽ từ đông đảo khách mời đến từ các cơ quan, ban ngành, nghệ sĩ, cùng cộng đồng yêu điện ảnh Việt Nam. ',
        images: [
            {
                src: 'assets/images/new/ramat1.jpg',
                caption: 'Đoàn làm phim chụp ảnh cùng poster'
            },
            {
                src: 'assets/images/new/ramat2.jpg',
                caption: 'Nghệ sĩ Xuân Bắc'
            },
            {
                src: 'assets/images/new/ramat3.jpg',
                caption: 'Số lượng lớn khán giả đi xem Địa Đạo'
            },
            {
                src: 'assets/images/new/ramat4.jpg',
                caption: 'Khán giả háo hức chờ đón buổi chiếu phim'
            },
            {
                src: 'assets/images/new/ramat5.jpg',
                caption: 'Đoàn làm phim giao lưu với khán giả,'
            },
            {
                src: 'assets/images/new/ramat6.jpg',
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
            { id: 7, title: 'Danh sách cộng tác viên trúng tuyển tại BINGEBOX CINEMA tháng 4/2025' },
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' }
        ]
    },

    // News Items for Page 2
    '9': {
        title: 'Liên hoan phim ngắn cuối tuần tại BINGEBOX CINEMA',
        date: '01/04/2025',
        intro: 'BINGEBOX CINEMA khởi động chuỗi sự kiện "Liên hoan phim ngắn cuối tuần" nhằm tạo sân chơi cho các nhà làm phim trẻ và giới thiệu những tác phẩm điện ảnh ngắn xuất sắc đến công chúng.',
        images: [
            {
                src: 'assets/images/new/ramat2.jpg',
                caption: 'Phiên khai mạc Liên hoan phim ngắn cuối tuần'
            }
        ],
        paragraphs: [
            'Liên hoan phim ngắn cuối tuần sẽ diễn ra định kỳ vào các ngày cuối tuần tại BINGEBOX CINEMA. Mỗi tuần sẽ có một chủ đề khác nhau, tạo nên sự đa dạng và phong phú cho sự kiện.',
            'Đây là cơ hội tuyệt vời cho các nhà làm phim trẻ được giới thiệu tác phẩm của mình đến công chúng rộng rãi. Ngoài ra, khán giả cũng có dịp thưởng thức những tác phẩm điện ảnh ngắn chất lượng cao từ nhiều thể loại và phong cách khác nhau.',
            'Chương trình không chỉ dừng lại ở việc chiếu phim mà còn tạo ra diễn đàn thảo luận giữa các nhà làm phim và khán giả, góp phần thúc đẩy sự phát triển của điện ảnh ngắn tại Việt Nam.',
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại BINGEBOX CINEMA' }
        ]
    },

    '10': {
        title: 'Triển lãm "50 năm điện ảnh Việt Nam" tại BINGEBOX CINEMA',
        date: '29/03/2025',
        intro: 'Triển lãm "50 năm điện ảnh Việt Nam" được tổ chức tại BINGEBOX CINEMA, tái hiện chặng đường phát triển của nền điện ảnh nước nhà từ 1975 đến 2025 với hàng trăm hiện vật, tư liệu quý giá.',
        images: [
            {
                src: 'assets/images/new/latmat3.jpg',
                caption: 'Không gian triển lãm tại BINGEBOX CINEMA'
            }
        ],
        paragraphs: [
            'Triển lãm "50 năm điện ảnh Việt Nam" là sự kiện văn hóa - nghệ thuật đánh dấu nửa thế kỷ phát triển của điện ảnh Việt Nam kể từ ngày đất nước thống nhất. Triển lãm quy tụ hàng trăm hiện vật, tư liệu quý giá từ các bộ phim tiêu biểu của điện ảnh Việt Nam qua các thời kỳ.',
            'Không gian triển lãm được chia thành 5 khu vực chính, tương ứng với 5 giai đoạn phát triển của điện ảnh Việt Nam: Giai đoạn điện ảnh cách mạng (1975-1985), Giai đoạn đổi mới (1986-1995), Giai đoạn hội nhập (1996-2005), Giai đoạn bùng nổ thương mại (2006-2015) và Giai đoạn phát triển toàn diện (2016-2025).',
            'Đặc biệt, triển lãm còn giới thiệu những công nghệ điện ảnh hiện đại đang được áp dụng trong sản xuất phim tại Việt Nam hiện nay, hứa hẹn mang đến trải nghiệm thú vị cho người xem.',
        ],
        relatedNews: [
            { id: 4, title: 'ĐỢT PHIM KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại BINGEBOX CINEMA' },
            { id: 6, title: 'Buổi Cinetour của đoàn làm phim "Địa đạo: Một trời trong bóng tối" tại BINGEBOX CINEMA' }
        ]
    },

    '11': {
        title: 'Workshop "Nghệ thuật dựng phim" tại BINGEBOX CINEMA',
        date: '25/03/2025',
        intro: 'Workshop "Nghệ thuật dựng phim" do BINGEBOX CINEMA phối hợp với Hiệp hội Điện ảnh Việt Nam tổ chức đã thu hút đông đảo sinh viên điện ảnh và những người đam mê làm phim tham gia.',
        images: [
            {
                src: 'assets/images/new/thamtukien3.jpg',
                caption: 'Không khí workshop tại BINGEBOX CINEMA'
            }
        ],
        paragraphs: [
            'Workshop "Nghệ thuật dựng phim" là một phần trong chuỗi sự kiện đào tạo về kỹ năng làm phim do BINGEBOX CINEMA tổ chức. Chương trình có sự tham gia hướng dẫn của chuyên gia dựng phim hàng đầu Việt Nam, nhà dựng phim Nguyễn Tuấn Anh và biên tập phim Hoàng Thị Mai.',
            'Trong khuôn khổ workshop, các học viên được tiếp cận với các kỹ thuật dựng phim hiện đại, từ lý thuyết đến thực hành trên các phần mềm chuyên nghiệp như Adobe Premiere Pro, Final Cut Pro và DaVinci Resolve.',
            'Điểm nổi bật của workshop là phần thực hành dựng phim ngắn từ các footage có sẵn, giúp học viên áp dụng trực tiếp những kiến thức đã học vào công việc thực tế.',
        ],
        relatedNews: [
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại BINGEBOX CINEMA' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' }
        ]
    },

    '12': {
        title: 'Lễ trao giải cuộc thi "Kịch bản phim ngắn Việt Nam 2025" tại BINGEBOX CINEMA',
        date: '20/03/2025',
        intro: 'Lễ trao giải cuộc thi "Kịch bản phim ngắn Việt Nam 2025" đã diễn ra trang trọng tại BINGEBOX CINEMA, vinh danh những tài năng trẻ trong lĩnh vực sáng tác kịch bản phim.',
        images: [
            {
                src: 'assets/images/new/diadao4.jpg',
                caption: 'Ban giám khảo và các tác giả đoạt giải tại lễ trao giải'
            }
        ],
        paragraphs: [
            'Cuộc thi "Kịch bản phim ngắn Việt Nam 2025" là sáng kiến của BINGEBOX CINEMA nhằm khuyến khích sáng tạo trong lĩnh vực viết kịch bản phim và phát hiện những tài năng mới. Cuộc thi đã thu hút hơn 200 bài dự thi từ các tác giả trẻ trên cả nước.',
            'Giải Nhất thuộc về kịch bản "Tiếng vọng từ làng" của tác giả Nguyễn Văn Minh - một câu chuyện xúc động về những thay đổi văn hóa tại một làng quê Việt Nam trong quá trình đô thị hóa.',
            'Đặc biệt, 5 kịch bản xuất sắc nhất sẽ được BINGEBOX CINEMA hỗ trợ kinh phí sản xuất thành phim ngắn và công chiếu tại BINGEBOX CINEMA vào cuối năm nay.',
        ],
        relatedNews: [
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại BINGEBOX CINEMA' },
            { id: 11, title: 'Workshop "Nghệ thuật dựng phim" tại BINGEBOX CINEMA' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' }
        ]
    },

    '13': {
        title: 'Chương trình chiếu phim đặc biệt cho trẻ em khuyết tật tại BINGEBOX CINEMA',
        date: '15/03/2025',
        intro: 'BINGEBOX CINEMA phối hợp với các tổ chức từ thiện tổ chức chương trình chiếu phim đặc biệt dành cho trẻ em khuyết tật, nhằm mang đến trải nghiệm điện ảnh độc đáo và ý nghĩa cho các em nhỏ có hoàn cảnh đặc biệt.',
        images: [
            {
                src: 'assets/images/new/thegenz1.jpg',
                caption: 'Các em nhỏ hào hứng tham gia chương trình tại BINGEBOX CINEMA'
            }
        ],
        paragraphs: [
            'Chương trình chiếu phim đặc biệt đã mang đến niềm vui cho hơn 200 trẻ em khuyết tật đến từ các trung tâm bảo trợ xã hội trên địa bàn Hà Nội. Các em được thưởng thức bộ phim hoạt hình "Voi con Dumbo phiêu lưu ký" - tác phẩm được chuyển ngữ và có phụ đề đặc biệt phù hợp với trẻ em khiếm thính.',
            'Bên cạnh việc xem phim, các em còn được tham gia vào các hoạt động tương tác với các nhân vật hoạt hình và nhận quà tặng từ ban tổ chức. Đây là một phần trong chuỗi hoạt động cộng đồng thường niên của BINGEBOX CINEMA.',
            'Đại diện BINGEBOX CINEMA cho biết: "Chúng tôi mong muốn nghệ thuật điện ảnh có thể đến với mọi đối tượng khán giả, không phân biệt hoàn cảnh hay điều kiện sống. Những nụ cười của các em hôm nay là động lực để chúng tôi tiếp tục duy trì và mở rộng chương trình này trong những năm tiếp theo."',
        ],
        relatedNews: [
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' },
            { id: 3, title: 'THẾ QUYỀN LỰC CHO GEN Z ĐẨY RỒI!!!' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại BINGEBOX CINEMA' }
        ]
    },

    '14': {
        title: 'BINGEBOX CINEMA nâng cấp hệ thống âm thanh Dolby Atmos',
        date: '10/03/2025',
        intro: 'BINGEBOX CINEMA chính thức khánh thành hệ thống âm thanh Dolby Atmos hiện đại, đánh dấu bước tiến quan trọng trong việc nâng cao chất lượng trải nghiệm điện ảnh cho khán giả Việt Nam.',
        images: [
            {
                src: 'assets/images/new/dot2.jpg',
                caption: 'Lễ khánh thành hệ thống âm thanh mới tại BINGEBOX CINEMA'
            }
        ],
        paragraphs: [
            'Hệ thống âm thanh Dolby Atmos mới được lắp đặt tại hai phòng chiếu lớn nhất của Trung tâm Chiếu phim Quốc gia, với tổng công suất 64 loa, mang đến trải nghiệm âm thanh vòm 3D sống động chưa từng có. Đây là hệ thống âm thanh điện ảnh tiên tiến nhất thế giới hiện nay.',
            'Với công nghệ này, âm thanh không còn bị giới hạn trong các kênh truyền thống mà có thể được định vị chính xác trong không gian ba chiều, giúp khán giả cảm nhận rõ ràng hướng di chuyển của từng âm thanh, từ tiếng mưa rơi phía trên đầu đến tiếng động cơ xe lao vút từ trước ra sau.',
            'Đại diện BINGEBOX CINEMA cho biết, việc nâng cấp hệ thống âm thanh nằm trong kế hoạch hiện đại hóa cơ sở vật chất kỹ thuật, nhằm đáp ứng nhu cầu ngày càng cao của khán giả về chất lượng trải nghiệm điện ảnh.',
        ],
        relatedNews: [
            { id: 15, title: 'BINGEBOX CINEMA kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam' },
            { id: 8, title: 'Sự kiện ra mắt phim Địa Đạo - Một Trời Trong Bóng Tối tại BINGEBOX CINEMA' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' }
        ]
    },

    '15': {
        title: 'BINGEBOX CINEMA kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam',
        date: '05/03/2025',
        intro: 'BINGEBOX CINEMA tổ chức lễ kỷ niệm 5 năm thành lập rạp chiếu phim 4D đầu tiên tại Việt Nam với nhiều hoạt động đặc sắc và ưu đãi hấp dẫn cho khán giả.',
        images: [
            {
                src: 'assets/images/new/nhoctrum3.jpg',
                caption: 'Buổi lễ kỷ niệm 5 năm thành lập rạp chiếu phim 4D'
            }
        ],
        paragraphs: [
            'Rạp chiếu phim 4D tại BINGEBOX CINEMA chính thức đi vào hoạt động từ tháng 3/2020, mở ra một kỷ nguyên mới cho trải nghiệm điện ảnh tại Việt Nam. Trong 5 năm qua, rạp đã phục vụ hơn 1 triệu lượt khán giả, chiếu hơn 200 bộ phim định dạng 4D.',
            'Nhân dịp kỷ niệm 5 năm thành lập, BINGEBOX CINEMA tổ chức tuần lễ phim 4D với giá vé ưu đãi đặc biệt chỉ bằng 50% giá vé thông thường. Ngoài ra, 100 khán giả đầu tiên mỗi ngày còn được tặng bộ sưu tập kính 4D phiên bản giới hạn.',
            'Trong khuôn khổ sự kiện, Trung tâm Chiếu phim Quốc gia cũng công bố kế hoạch nâng cấp trải nghiệm 4D với việc bổ sung thêm các hiệu ứng mới như khói lạnh, hương thơm và hiệu ứng bong bóng, dự kiến sẽ hoàn thành vào cuối năm 2025.',
        ],
        relatedNews: [
            { id: 14, title: 'BINGEBOX CINEMA nâng cấp hệ thống âm thanh Dolby Atmos' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI NCC' },
            { id: 13, title: 'Chương trình chiếu phim đặc biệt cho trẻ em khuyết tật tại BINGEBOX CINEMA' }
        ]
    },

    '16': {
        title: 'BINGEBOX CINEMA tổ chức "Tuần lễ điện ảnh Nhật Bản 2025"',
        date: '01/03/2025',
        intro: 'BINGEBOX CINEMA phối hợp với Đại sứ quán Nhật Bản tại Việt Nam tổ chức "Tuần lễ điện ảnh Nhật Bản 2025", giới thiệu những tác phẩm điện ảnh xuất sắc của xứ sở hoa anh đào đến khán giả Việt Nam.',
        images: [
            {
                src: 'assets/images/new/diadao3.jpg',
                caption: 'Lễ khai mạc Tuần lễ điện ảnh Nhật Bản 2025'
            }
        ],
        paragraphs: [
            'Tuần lễ điện ảnh Nhật Bản 2025 diễn ra từ ngày 1/3 đến 7/3/2025 tại BINGEBOX CINEMA, với 14 bộ phim đặc sắc thuộc nhiều thể loại khác nhau, từ phim nghệ thuật, phim thương mại đến phim hoạt hình anime nổi tiếng.',
            'Điểm nhấn của sự kiện là buổi chiếu ra mắt bộ phim "Hoa anh đào mùa đông" của đạo diễn Hirokazu Kore-eda, tác phẩm vừa đoạt giải Cành Cọ Vàng tại Liên hoan phim Cannes 2024. Đặc biệt, đạo diễn Kore-eda sẽ có mặt tại buổi chiếu để giao lưu với khán giả Việt Nam.',
            'Ngoài các buổi chiếu phim, "Tuần lễ điện ảnh Nhật Bản 2025" còn tổ chức nhiều hoạt động văn hóa đặc sắc như trình diễn nghệ thuật truyền thống Nhật Bản, workshop làm phim anime và triển lãm poster phim Nhật Bản qua các thời kỳ.',
        ],
        relatedNews: [
            { id: 10, title: 'Triển lãm "50 năm điện ảnh Việt Nam" tại BINGEBOX CINEMA' },
            { id: 9, title: 'Liên hoan phim ngắn cuối tuần tại BINGEBOX CINEMA' },
            { id: 5, title: 'SUẤT CHIẾU ĐẶC BIỆT SÁNG THỨ 7 TẠI BINGEBOX CINEMA' }
        ]
    }
} 