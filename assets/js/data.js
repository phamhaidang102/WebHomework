/* =====================================================
   DỮ LIỆU MẪU DÙNG CHUNG - ABC TOURS
   Nạp vào localStorage ở lần truy cập đầu hoặc khi tăng ABC_DATA_VERSION:
   - Key "abc_tours": Danh sách 12 tour đủ Bắc/Trung/Nam, Á/Âu/Mỹ,
     Standard/Premium/MICE và đủ thông tin chi tiết cho trang tour-detail.html.
   - Key "abc_orders": 2 đơn đặt tour mẫu để trang my-bookings.html,
     cancel-refund.html và admin.html có dữ liệu kiểm thử ngay lập tức.
   ===================================================== */
var ABC_DATA_VERSION = 2;

var ABC_SAMPLE_TOURS = [
  {
    id: "T001", code: "DN-BN-001", name: "Đà Nẵng - Bà Nà Hills - Hội An",
    scope: "domestic", region: "Miền Trung", destination: "Đà Nẵng", type: "standard",
    days: 4, nights: 3, price: 5990000, oldPrice: 7990000, singleRoomSurcharge: 1200000,
    rating: 4.8, reviews: 1200, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao ven biển Mỹ Khê", seats: 40, seatsLeft: 12,
    departureDates: ["2026-11-15", "2026-11-22", "2026-12-05"],
    image: "assets/images/tour-danang.jpg",
    gallery: ["assets/images/tour-danang.jpg", "assets/images/hero-halong.jpg", "assets/images/promo-summer.jpg"],
    featured: true, sale: true,
    summary: "Hành trình khám phá thành phố đáng sống nhất Việt Nam, check-in Cầu Vàng Bà Nà Hills và phố cổ Hội An lung linh đèn lồng.",
    itinerary: [
      { day: 1, title: "TP.HCM - Đà Nẵng - Bán đảo Sơn Trà", detail: "Đón khách tại sân bay Tân Sơn Nhất, bay đi Đà Nẵng. Tham quan chùa Linh Ứng, biển Mỹ Khê, ăn tối hải sản." },
      { day: 2, title: "Khu du lịch Bà Nà Hills - Cầu Vàng - Phố cổ Hội An", detail: "Đi cáp treo lên đỉnh Bà Nà, tham quan Cầu Vàng, Làng Pháp, Fantasy Park. Chiều tối dạo Phố cổ Hội An, thả hoa đăng." },
      { day: 3, title: "Ngũ Hành Sơn - Làng đá Non Nước - Cầu Rồng", detail: "Tham quan danh thắng Ngũ Hành Sơn, mua sắm đặc sản miền Trung, tự do tắm biển và ngắm Cầu Rồng phun lửa." },
      { day: 4, title: "Chợ Hàn - Tiễn sân bay Đà Nẵng - TP.HCM", detail: "Ăn sáng tại khách sạn, tự do mua sắm tại chợ Hàn, làm thủ tục bay về TP.HCM." }
    ]
  },
  {
    id: "T002", code: "NT-VP-002", name: "Nha Trang - VinWonders - Đảo Hòn Mun",
    scope: "domestic", region: "Miền Trung", destination: "Nha Trang", type: "standard",
    days: 3, nights: 2, price: 4990000, oldPrice: 0, singleRoomSurcharge: 900000,
    rating: 4.7, reviews: 860, departure: "TP. Hồ Chí Minh", transport: "Xe du lịch",
    hotel: "Khách sạn 4 sao đường Trần Phú", seats: 35, seatsLeft: 18,
    departureDates: ["2026-11-14", "2026-11-21", "2026-11-28"],
    image: "assets/images/tour-nhatrang.jpg",
    gallery: ["assets/images/tour-nhatrang.jpg", "assets/images/promo-summer.jpg", "assets/images/tour-phuquoc.jpg"],
    featured: true, sale: false,
    summary: "Tận hưởng nắng vàng biển xanh vịnh Nha Trang, lặn ngắm san hô Hòn Mun và vui chơi trọn gói tại VinWonders.",
    itinerary: [
      { day: 1, title: "TP.HCM - Nha Trang - Tháp Bà Ponagar", detail: "Khởi hành đi Nha Trang theo cao tốc mới, nhận phòng khách sạn, tham quan Tháp Bà Ponagar và tắm bùn khoáng." },
      { day: 2, title: "Du ngoạn 3 đảo Vịnh Nha Trang - VinWonders", detail: "Canô tham quan Hòn Mun, Làng Chài, Hòn Tằm. Chiều vượt cáp treo sang đảo Hòn Tre vui chơi tại VinWonders." },
      { day: 3, title: "Chùa Long Sơn - Chợ Đầm - TP.HCM", detail: "Viếng chùa Long Sơn, mua đặc sản yến sào & hải sản khô tại Chợ Đầm, khởi hành về lại TP.HCM." }
    ]
  },
  {
    id: "T003", code: "PQ-DN-003", name: "Phú Quốc - Đảo Ngọc - Grand World",
    scope: "domestic", region: "Miền Nam", destination: "Phú Quốc", type: "premium",
    days: 4, nights: 3, price: 6990000, oldPrice: 8490000, singleRoomSurcharge: 1500000,
    rating: 4.8, reviews: 940, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Resort 5 sao chuẩn quốc tế", seats: 30, seatsLeft: 9,
    departureDates: ["2026-11-18", "2026-11-25", "2026-12-02"],
    image: "assets/images/tour-phuquoc.jpg",
    gallery: ["assets/images/tour-phuquoc.jpg", "assets/images/tour-nhatrang.jpg", "assets/images/promo-summer.jpg"],
    featured: true, sale: true,
    summary: "Nghỉ dưỡng đẳng cấp 5 sao tại đảo ngọc Phú Quốc, khám phá thành phố không ngủ Grand World và cáp treo Hòn Thơm.",
    itinerary: [
      { day: 1, title: "TP.HCM - Phú Quốc - Sunset Sanato - Dinh Cậu", detail: "Bay thẳng đến Phú Quốc, nhận phòng resort 5 sao, ngắm hoàng hôn tại Sunset Sanato và dạo chợ đêm Phú Quốc." },
      { day: 2, title: "Bắc Đảo - Vinpearl Safari - Grand World", detail: "Tham quan vườn thú bán hoang dã Safari, khám phá thành phố không ngủ Grand World, xem show Tinh Hoa Việt Nam." },
      { day: 3, title: "Nam Đảo - Cáp treo Hòn Thơm - Cano 4 đảo", detail: "Trải nghiệm cáp treo 3 dây vượt biển dài nhất thế giới, chụp ảnh SUP và lặn ngắm san hô tại Hòn Móng Tay - Mây Rút." },
      { day: 4, title: "Cơ sở ngọc trai - Nhà thùng nước mắm - TP.HCM", detail: "Mua sắm đặc sản Phú Quốc, ra sân bay đáp chuyến bay về lại TP.HCM." }
    ]
  },
  {
    id: "T004", code: "SG-MY-004", name: "Singapore - Malaysia Liên Tuyến",
    scope: "international", region: "Châu Á", destination: "Singapore", type: "premium",
    days: 5, nights: 4, price: 11990000, oldPrice: 0, singleRoomSurcharge: 3200000,
    rating: 4.9, reviews: 410, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao trung tâm", seats: 25, seatsLeft: 7,
    departureDates: ["2026-11-20", "2026-11-29", "2026-12-10"],
    image: "assets/images/tour-singapore.jpg",
    gallery: ["assets/images/tour-singapore.jpg", "assets/images/hero-halong.jpg", "assets/images/tour-danang.jpg"],
    featured: true, sale: false,
    summary: "Hành trình 2 quốc gia Đông Nam Á: khám phá Gardens by the Bay, đảo Sentosa, phố cổ Malacca và tháp đôi Petronas.",
    itinerary: [
      { day: 1, title: "TP.HCM - Sân bay Changi - Jewel - Merlion Park", detail: "Đáp chuyến bay đến Singapore, tham quan thác nước Jewel Changi, công viên Sư tử biển Merlion Park." },
      { day: 2, title: "Gardens by the Bay - Đảo Sentosa - Malacca", detail: "Tham quan khu vườn năng lượng, chụp hình Universal Studios trên đảo Sentosa, sau đó khởi hành sang phố cổ Malacca (Malaysia)." },
      { day: 3, title: "Malacca - Cao nguyên Genting - Động Batu", detail: "Tham quan Quảng trường Hà Lan, động Batu của người Ấn Độ giáo, đi cáp treo lên cao nguyên giải trí Genting." },
      { day: 4, title: "Kuala Lumpur - Tháp đôi Petronas - Hoàng cung", detail: "Chụp ảnh tại Tháp đôi Twin Towers, Quảng trường Độc Lập, Hoàng cung Malaysia và mua sắm sô-cô-la." },
      { day: 5, title: "Thành phố mới Putrajaya - Sân bay KLIA - TP.HCM", detail: "Tham quan thành phố thông minh Putrajaya, ra sân bay đáp chuyến bay về TP.HCM." }
    ]
  },
  {
    id: "T005", code: "HL-SP-005", name: "Hà Nội - Vịnh Hạ Long - Sapa - Fansipan",
    scope: "domestic", region: "Miền Bắc", destination: "Hạ Long", type: "premium",
    days: 5, nights: 4, price: 8990000, oldPrice: 10500000, singleRoomSurcharge: 1800000,
    rating: 4.9, reviews: 650, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao & Du thuyền Hạ Long", seats: 30, seatsLeft: 10,
    departureDates: ["2026-11-16", "2026-11-23", "2026-12-01"],
    image: "assets/images/hero-halong.jpg",
    gallery: ["assets/images/hero-halong.jpg", "assets/images/tour-danang.jpg", "assets/images/promo-summer.jpg"],
    featured: false, sale: true,
    summary: "Ngủ đêm trên du thuyền Vịnh Hạ Long kỳ quan thiên nhiên thế giới và chinh phục đỉnh thiêng Fansipan nóc nhà Đông Dương.",
    itinerary: [
      { day: 1, title: "TP.HCM - Hà Nội - Phố cổ 36 phố phường", detail: "Bay ra Hà Nội, tham quan Hồ Hoàn Kiếm, Đền Ngọc Sơn, thưởng thức ẩm thực phố cổ." },
      { day: 2, title: "Hà Nội - Vịnh Hạ Long - Hang Sửng Sốt - Đảo Titop", detail: "Xuống tàu du ngoạn Vịnh Hạ Long, thăm Hang Sửng Sốt, tắm biển đảo Titop." },
      { day: 3, title: "Hạ Long - Lào Cai - Thị trấn mờ sương Sapa", detail: "Ngắm bình minh trên vịnh, di chuyển cao tốc lên Sapa, thăm bản Cát Cát và nhà thờ Đá." },
      { day: 4, title: "Chinh phục đỉnh Fansipan - Đèo Ô Quy Hồ", detail: "Đi cáp treo lên đỉnh Fansipan (3.143m), săn mây tại cổng trời Ô Quy Hồ." },
      { day: 5, title: "Sapa - Lăng Bác - Chùa Một Cột - TP.HCM", detail: "Về lại Hà Nội viếng Lăng Chủ tịch Hồ Chí Minh, Văn Miếu Quốc Tử Giám, ra sân bay Nội Bài về TP.HCM." }
    ]
  },
  {
    id: "T006", code: "HG-CB-006", name: "Hà Giang - Cao nguyên đá Đồng Văn - Sông Nho Quế",
    scope: "domestic", region: "Miền Bắc", destination: "Hà Giang", type: "standard",
    days: 4, nights: 3, price: 4790000, oldPrice: 5490000, singleRoomSurcharge: 900000,
    rating: 4.8, reviews: 520, departure: "Hà Nội", transport: "Xe du lịch",
    hotel: "Khách sạn 3 sao & Homestay bản địa", seats: 28, seatsLeft: 14,
    departureDates: ["2026-11-13", "2026-11-20", "2026-11-27"],
    image: "assets/images/hero-halong.jpg",
    gallery: ["assets/images/hero-halong.jpg", "assets/images/tour-nhatrang.jpg"],
    featured: false, sale: true,
    summary: "Chinh phục đèo Mã Pí Lèng hùng vĩ, đi thuyền trên hẻm vực Tu Sản sông Nho Quế và check-in cột cờ Lũng Cú mùa hoa tam giác mạch.",
    itinerary: [
      { day: 1, title: "Hà Nội - Hà Giang - Cổng trời Quản Bạ", detail: "Khởi hành từ Hà Nội đi Hà Giang, dừng chân chụp ảnh Km0, Cổng trời Quản Bạ và Núi Đôi Cô Tiên." },
      { day: 2, title: "Yên Minh - Dinh Vua Mèo - Cột cờ Lũng Cú - Đồng Văn", detail: "Thăm phố cổ Đồng Văn, Dinh thự họ Vương và điểm cực Bắc thiêng liêng Lũng Cú." },
      { day: 3, title: "Đèo Mã Pí Lèng - Du thuyền sông Nho Quế - Mèo Vạc", detail: "Chinh phục tứ đại đỉnh đèo Mã Pí Lèng, đi thuyền ngắm hẻm vực Tu Sản xanh ngọc bích." },
      { day: 4, title: "Hà Giang - Đồi chè Tuyên Quang - Hà Nội", detail: "Mua sắm đặc sản vùng cao, khởi hành về lại thủ đô Hà Nội." }
    ]
  },
  {
    id: "T007", code: "DL-MICE-007", name: "Đà Lạt M.I.C.E - Hội nghị & Team Building Cao nguyên",
    scope: "domestic", region: "Miền Nam", destination: "Đà Lạt", type: "mice",
    days: 3, nights: 2, price: 4590000, oldPrice: 0, singleRoomSurcharge: 1000000,
    rating: 4.8, reviews: 310, departure: "TP. Hồ Chí Minh", transport: "Xe du lịch",
    hotel: "Khách sạn 4 sao có phòng hội nghị", seats: 80, seatsLeft: 45,
    departureDates: ["2026-11-19", "2026-11-26", "2026-12-03"],
    image: "assets/images/promo-summer.jpg",
    gallery: ["assets/images/promo-summer.jpg", "assets/images/tour-danang.jpg"],
    featured: false, sale: false,
    summary: "Chương trình du lịch kết hợp hội nghị khách hàng, Gala Dinner và Team Building chuyên nghiệp dành cho doanh nghiệp tại Đà Lạt.",
    itinerary: [
      { day: 1, title: "TP.HCM - Đà Lạt - Hội thảo Doanh nghiệp", detail: "Di chuyển lên Đà Lạt, nhận phòng khách sạn 4 sao, tổ chức phiên Hội nghị tổng kết nửa ngày với trang thiết bị âm thanh ánh sáng chuẩn M.I.C.E." },
      { day: 2, title: "Team Building Thung Lũng Vàng - Đêm Gala Dinner", detail: "Sáng tham gia hoạt động Team Building gắn kết đội ngũ. Chiều tham quan Langbiang. Tối dự tiệc Gala Dinner vinh danh." },
      { day: 3, title: "Quảng trường Lâm Viên - Chợ Đà Lạt - TP.HCM", detail: "Check-in Nụ hoa Atiso, mua đặc sản dâu tây & mứt Đà Lạt, khởi hành về lại TP.HCM." }
    ]
  },
  {
    id: "T008", code: "MT-CT-008", name: "Miền Tây Sông Nước: Mỹ Tho - Bến Tre - Cần Thơ",
    scope: "domestic", region: "Miền Nam", destination: "Cần Thơ", type: "standard",
    days: 2, nights: 1, price: 2490000, oldPrice: 2990000, singleRoomSurcharge: 500000,
    rating: 4.6, reviews: 780, departure: "TP. Hồ Chí Minh", transport: "Xe du lịch",
    hotel: "Khách sạn 4 sao bến Ninh Kiều", seats: 45, seatsLeft: 20,
    departureDates: ["2026-11-14", "2026-11-21", "2026-11-28"],
    image: "assets/images/tour-phuquoc.jpg",
    gallery: ["assets/images/tour-phuquoc.jpg", "assets/images/tour-nhatrang.jpg"],
    featured: false, sale: true,
    summary: "Trải nghiệm xuồng ba lá dưới rặng dừa Bến Tre, nghe đờn ca tài tử, thưởng thức trái cây miệt vườn và đi chợ nổi Cái Răng.",
    itinerary: [
      { day: 1, title: "TP.HCM - Mỹ Tho - Cồn Thới Sơn - Bến Ninh Kiều Cần Thơ", detail: "Đi thuyền trên sông Tiền, thăm lò kẹo dừa Bến Tre, đi xuồng chèo rạch nhỏ, tối ăn tối trên du thuyền Cần Thơ." },
      { day: 2, title: "Chợ nổi Cái Răng - Nhà cổ Bình Thủy - Làng du lịch Mỹ Khánh - TP.HCM", detail: "Dậy sớm đi thuyền tham quan chợ nổi Cái Răng, thăm nhà cổ Bình Thủy, hái trái cây miệt vườn trước khi về TP.HCM." }
    ]
  },
  {
    id: "T009", code: "PT-MICE-009", name: "Phan Thiết - Mũi Né M.I.C.E & Gala Biển",
    scope: "domestic", region: "Miền Trung", destination: "Phan Thiết", type: "mice",
    days: 3, nights: 2, price: 3990000, oldPrice: 4690000, singleRoomSurcharge: 900000,
    rating: 4.7, reviews: 290, departure: "TP. Hồ Chí Minh", transport: "Xe du lịch",
    hotel: "Resort 4 sao bãi biển riêng Mũi Né", seats: 100, seatsLeft: 60,
    departureDates: ["2026-11-15", "2026-11-22", "2026-11-29"],
    image: "assets/images/tour-nhatrang.jpg",
    gallery: ["assets/images/tour-nhatrang.jpg", "assets/images/promo-summer.jpg"],
    featured: false, sale: true,
    summary: "Gói tour M.I.C.E nghỉ dưỡng biển kết hợp vận động trường bãi biển, lửa trại và hội nghị dành cho đoàn thể và công ty.",
    itinerary: [
      { day: 1, title: "TP.HCM - Cao tốc Dầu Giây Phan Thiết - Hội nghị", detail: "Di chuyển chỉ 2.5 giờ qua cao tốc, nhận phòng resort, tổ chức hội thảo buổi chiều tại phòng Ballroom." },
      { day: 2, title: "Đồi Cát Bay - Team Building Bãi Biển - Gala Dinner", detail: "Đón bình minh Đồi Cát Bay bằng xe Jeep, tham gia Team Building trên bãi biển riêng, tối dự tiệc Gala hải sản." },
      { day: 3, title: "Lâu đài Rượu Vang - Bàu Trắng - TP.HCM", detail: "Tham quan Lâu đài Rượu Vang Sea Links, mua nước mắm Phan Thiết và thanh long, về lại TP.HCM." }
    ]
  },
  {
    id: "T010", code: "JP-TYO-010", name: "Nhật Bản Mùa Lá Đỏ: Tokyo - Phú Sĩ - Kyoto - Osaka",
    scope: "international", region: "Châu Á", destination: "Nhật Bản", type: "premium",
    days: 6, nights: 5, price: 28990000, oldPrice: 32990000, singleRoomSurcharge: 6500000,
    rating: 4.9, reviews: 530, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao & Onsen truyền thống", seats: 25, seatsLeft: 6,
    departureDates: ["2026-11-17", "2026-11-24", "2026-12-08"],
    image: "assets/images/tour-singapore.jpg",
    gallery: ["assets/images/tour-singapore.jpg", "assets/images/hero-halong.jpg"],
    featured: false, sale: true,
    summary: "Cung đường vàng Nhật Bản ngắm sắc thu Momiji rực rỡ, trải nghiệm tàu cao tốc Shinkansen và tắm khoáng nóng Onsen dưới chân núi Phú Sĩ.",
    itinerary: [
      { day: 1, title: "TP.HCM - Sân bay Narita (Tokyo)", detail: "Đáp chuyến bay đêm đi Tokyo, nghỉ đêm trên máy bay." },
      { day: 2, title: "Tokyo - Chùa Asakusa - Tháp Tokyo Skytree", detail: "Viếng chùa cổ Asakusa Kannon, chụp hình tháp Skytree, mua sắm tại Akihabara và Ginza." },
      { day: 3, title: "Tokyo - Núi Phú Sĩ - Làng cổ Oshino Hakkai - Tắm Onsen", detail: "Lên trạm 5 núi Phú Sĩ, thăm làng cổ Oshino Hakkai, mặc Yukata tắm suối khoáng nóng Onsen." },
      { day: 4, title: "Trải nghiệm tàu Shinkansen - Cố đô Kyoto - Chùa Vàng", detail: "Đi tàu siêu tốc Shinkansen đến Kyoto, tham quan Chùa Thanh Thủy và Chùa Vàng Kinkaku-ji." },
      { day: 5, title: "Lâu đài Osaka - Phố mua sắm Shinsaibashi", detail: "Chụp ảnh bên ngoài Lâu đài Osaka, thưởng thức bò Kobe và tự do mua sắm tại Dotonbori." },
      { day: 6, title: "Sân bay quốc tế Kansai - TP.HCM", detail: "Làm thủ tục đáp chuyến bay thẳng từ Kansai về lại TP.HCM." }
    ]
  },
  {
    id: "T011", code: "EU-FRP-011", name: "Tây Âu Hoa Lệ: Pháp - Thụy Sĩ - Ý - Vatican",
    scope: "international", region: "Châu Âu", destination: "Châu Âu", type: "premium",
    days: 9, nights: 8, price: 54990000, oldPrice: 59990000, singleRoomSurcharge: 12000000,
    rating: 4.9, reviews: 185, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao tiêu chuẩn Châu Âu", seats: 20, seatsLeft: 5,
    departureDates: ["2026-11-25", "2026-12-12"],
    image: "assets/images/tour-singapore.jpg",
    gallery: ["assets/images/tour-singapore.jpg", "assets/images/tour-danang.jpg"],
    featured: false, sale: true,
    summary: "Du ngoạn 4 quốc gia châu Âu kinh điển: tháp Eiffel Paris, núi tuyết Titlis Thụy Sĩ, kênh đào Venice và đấu trường La Mã Colosseum.",
    itinerary: [
      { day: 1, title: "TP.HCM - Paris (Pháp)", detail: "Khởi hành đi Paris trên chuyến bay quốc tế 5 sao." },
      { day: 2, title: "Paris - Tháp Eiffel - Khải Hoàn Môn - Du thuyền sông Seine", detail: "Tham quan đại lộ Champs-Élysées, bảo tàng Louvre và đi thuyền ngắm kiến trúc hai bờ sông Seine." },
      { day: 3, title: "Paris - Cung điện Versailles - Dijon", detail: "Thăm cung điện Versailles lộng lẫy, di chuyển về vùng rượu vang Dijon." },
      { day: 4, title: "Dijon - Lucerne - Núi tuyết Titlis (Thụy Sĩ)", detail: "Đi cáp treo xoay 360 độ lên đỉnh núi tuyết vĩnh cửu Titlis, thăm cầu gỗ Chapel và Hồ Lucerne." },
      { day: 5, title: "Lucerne - Kinh đô thời trang Milan - Venice (Ý)", detail: "Thăm nhà thờ chính tòa Duomo Milan, di chuyển đến thành phố nổi Venice." },
      { day: 6, title: "Đảo Venice - Tháp nghiêng Pisa - Florence", detail: "Ngồi thuyền Gondola len lỏi kênh đào Venice, chụp ảnh cùng Tháp nghiêng Pisa kỳ quan thế giới." },
      { day: 7, title: "Florence - Rome - Tòa thánh Vatican", detail: "Tham quan Đại vương cung thánh đường Thánh Phêrô tại Vatican và đài phun nước Trevi." },
      { day: 8, title: "Đấu trường La Mã Colosseum - Sân bay Fiumicino", detail: "Chụp ảnh tại Đấu trường Colosseum cổ đại, tự do mua sắm hàng hiệu trước khi ra sân bay." },
      { day: 9, title: "Về đến TP.HCM", detail: "Hạ cánh tại sân bay Tân Sơn Nhất, kết thúc hành trình Tây Âu." }
    ]
  },
  {
    id: "T012", code: "US-NYL-012", name: "Bờ Đông - Bờ Tây Hoa Kỳ: New York - Washington D.C - Las Vegas - Los Angeles",
    scope: "international", region: "Châu Mỹ", destination: "Hoa Kỳ", type: "premium",
    days: 10, nights: 9, price: 68990000, oldPrice: 0, singleRoomSurcharge: 15000000,
    rating: 4.9, reviews: 140, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    hotel: "Khách sạn 4 sao trung tâm", seats: 20, seatsLeft: 8,
    departureDates: ["2026-11-28", "2026-12-18"],
    image: "assets/images/tour-singapore.jpg",
    gallery: ["assets/images/tour-singapore.jpg", "assets/images/promo-summer.jpg"],
    featured: false, sale: false,
    summary: "Hành trình xuyên lục địa khám phá nước Mỹ: Tượng Nữ thần Tự do, Nhà Trắng, đại vực Grand Canyon và kinh đô điện ảnh Hollywood.",
    itinerary: [
      { day: 1, title: "TP.HCM - New York", detail: "Làm thủ tục xuất cảnh bay đi New York (Hoa Kỳ)." },
      { day: 2, title: "New York - Tượng Nữ thần Tự do - Quảng trường Thời Đại", detail: "Đi du thuyền ra đảo Liberty, thăm phố tài chính Wall Street, Ground Zero và Times Square." },
      { day: 3, title: "New York - Philadelphia - Thủ đô Washington D.C", detail: "Thăm Chuông Tự Do Liberty Bell, Tòa nhà Độc Lập tại Philadelphia, tiếp tục đi Washington D.C." },
      { day: 4, title: "Nhà Trắng - Điện Capitol - Bảo tàng Hàng không Vũ trụ", detail: "Tham quan bên ngoài Nhà Trắng, Đài tưởng niệm Lincoln, Jefferson và Bảo tàng Smithsonian." },
      { day: 5, title: "Washington D.C - Bay nội địa đi Las Vegas", detail: "Đáp chuyến bay sang bờ Tây đến thành phố giải trí không ngủ Las Vegas." },
      { day: 6, title: "Las Vegas - Đập thủy điện Hoover Dam - Đại vực Grand Canyon", detail: "Khám phá kỳ quan thiên nhiên Grand Canyon West Rim và trải nghiệm cầu kính Skywalk." },
      { day: 7, title: "Las Vegas - Quận Cam (Little Saigon) - Los Angeles", detail: "Mua sắm tại chuỗi Outlet Barstow, thăm cộng đồng người Việt tại khu thương mại Phước Lộc Thọ." },
      { day: 8, title: "Đại lộ Danh vọng Hollywood - Phim trường Universal Studios", detail: "Chụp ảnh ngôi sao tên các nghệ sĩ tại Hollywood Boulevard và vui chơi tại Universal Studios." },
      { day: 9, title: "Los Angeles - Sân bay quốc tế LAX", detail: "Tự do mua sắm quà lưu niệm, ra sân bay LAX đáp chuyến bay về Việt Nam." },
      { day: 10, title: "Về đến TP.HCM", detail: "Vượt tuyến đổi ngày quốc tế, hạ cánh tại sân bay Tân Sơn Nhất." }
    ]
  }
];

/* =====================================================
   ĐƠN ĐẶT TOUR MẪU (Nạp vào localStorage key "abc_orders")
   Giúp Quốc Duy (my-bookings.html, cancel-refund.html, admin.html)
   có sẵn dữ liệu chuẩn để kiểm thử ngay mà không cần chờ Khánh Duy.
   - Đơn 1 (ORD-20261115-01): Khởi hành còn > 24h -> Hủy hoàn 70%
   - Đơn 2 (ORD-20261031-02): Khởi hành còn ~18h -> Hủy hoàn 50%
   ===================================================== */
var ABC_SAMPLE_ORDERS = [
  {
    orderCode: "ORD-20261115-01",
    tourId: "T001",
    tourCode: "DN-BN-001",
    tourName: "Đà Nẵng - Bà Nà Hills - Hội An",
    departureDate: "2026-11-15T08:00:00",
    bookedAt: "2026-10-31T09:30:00",
    paymentDeadline: "2026-11-01T09:30:00",
    contact: {
      fullName: "Nguyễn Văn An",
      phone: "0901234567",
      email: "nguyenvanan@gmail.com",
      cccd: "079204001234",
      address: "12 Nguyễn Văn Bảo, P.4, Gò Vấp, TP.HCM"
    },
    passengers: [
      { fullName: "Nguyễn Văn An", dob: "2004-05-12", gender: "Nam", cccd: "079204001234", nationality: "Việt Nam", singleRoom: false },
      { fullName: "Trần Thị Bình", dob: "2004-08-20", gender: "Nữ", cccd: "079304005678", nationality: "Việt Nam", singleRoom: true }
    ],
    unitPrice: 5990000,
    singleRoomTotal: 1200000,
    totalPrice: 13180000,
    paymentMethod: "Chuyển khoản ngân hàng (QR VietQR)",
    status: "confirmed" // "pending" | "confirmed" | "cancelled"
  },
  {
    orderCode: "ORD-20261101-02",
    tourId: "T003",
    tourCode: "PQ-DN-003",
    tourName: "Phú Quốc - Đảo Ngọc - Grand World",
    departureDate: "2026-11-01T07:30:00",
    bookedAt: "2026-10-31T10:00:00",
    paymentDeadline: "2026-11-01T10:00:00",
    contact: {
      fullName: "Lê Minh Hoàng",
      phone: "0912345678",
      email: "leminhhoang@gmail.com",
      cccd: "079203009876",
      address: "45 Lê Lợi, Quận 1, TP.HCM"
    },
    passengers: [
      { fullName: "Lê Minh Hoàng", dob: "2003-11-02", gender: "Nam", cccd: "079203009876", nationality: "Việt Nam", singleRoom: false }
    ],
    unitPrice: 6990000,
    singleRoomTotal: 0,
    totalPrice: 6990000,
    paymentMethod: "Thanh toán tại văn phòng ABC Tours",
    status: "pending"
  }
];
