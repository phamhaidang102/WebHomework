/* =====================================================
   DỮ LIỆU TOUR MẪU - DÙNG CHUNG CHO TOÀN BỘ WEBSITE
   Nạp vào localStorage (key: "abc_tours") ở lần truy cập đầu.
   Các trang khác chỉ cần gọi ABC.getTours() / ABC.getTourById(id).
   Ảnh hiện là ảnh tạm cắt từ layout mẫu -> Lĩnh (SV7) sẽ thay ảnh thật
   bằng cách giữ nguyên tên file hoặc sửa trường "image" bên dưới.
   ===================================================== */
// Tăng số này mỗi khi sửa ABC_SAMPLE_TOURS để trình duyệt nạp lại dữ liệu mới
var ABC_DATA_VERSION = 1;
var ABC_SAMPLE_TOURS = [
  {
    id: "T001", code: "DN-BN-001", name: "Đà Nẵng - Bà Nà - Hội An",
    scope: "domestic", region: "Miền Trung", type: "standard",
    days: 4, nights: 3, price: 5990000, oldPrice: 7990000,
    rating: 4.8, reviews: 1200, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    seats: 40, image: "assets/images/tour-danang.jpg", featured: true, sale: true
  },
  {
    id: "T002", code: "NT-002", name: "Nha Trang - Vinpearl",
    scope: "domestic", region: "Miền Trung", type: "standard",
    days: 3, nights: 2, price: 4990000, oldPrice: 0,
    rating: 4.7, reviews: 860, departure: "TP. Hồ Chí Minh", transport: "Xe du lịch",
    seats: 35, image: "assets/images/tour-nhatrang.jpg", featured: true, sale: false
  },
  {
    id: "T003", code: "PQ-003", name: "Phú Quốc - Đảo Ngọc",
    scope: "domestic", region: "Miền Nam", type: "premium",
    days: 4, nights: 3, price: 6990000, oldPrice: 8490000,
    rating: 4.8, reviews: 940, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    seats: 30, image: "assets/images/tour-phuquoc.jpg", featured: true, sale: true
  },
  {
    id: "T004", code: "SG-MY-004", name: "Singapore - Malaysia",
    scope: "international", region: "Châu Á", type: "premium",
    days: 5, nights: 4, price: 11990000, oldPrice: 0,
    rating: 4.9, reviews: 410, departure: "TP. Hồ Chí Minh", transport: "Máy bay",
    seats: 25, image: "assets/images/tour-singapore.jpg", featured: true, sale: false
  }
];
