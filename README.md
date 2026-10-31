# BÀI TẬP LỚN HỆ THỐNG VÀ CÔNG NGHỆ WEB (FIT - IUH)
## Đề tài: Website giới thiệu tour du lịch và đăng ký trực tuyến - ABC Tours

---

### 1. Cấu trúc thư mục dự án
```
D:\Code\Bài tập lớn Web\
├── index.html              # 1. Trang chủ (SV1 - Nhóm trưởng)
├── sitemap.html            # 2. Trang Sitemap (SV7)
├── about.html              # 3. Trang Giới thiệu (SV7)
├── register.html           # 4. Trang Đăng ký (SV2 - Thuyết trình viên)
├── login.html              # 5. Trang Đăng nhập (SV2 - Thuyết trình viên)
├── tours.html              # 6. Trang Danh sách tour (SV3)
├── tour-detail.html        # 7. Trang Chi tiết tour (SV4)
├── booking.html            # 8. Trang Nhập thông tin hành khách (SV5)
├── checkout.html           # 9. Trang Xác nhận & Thanh toán (SV5)
├── booking-success.html    # 10. Trang Đặt tour thành công (SV5)
├── my-bookings.html        # 11. Trang Tra cứu & Quản lý đơn tour (SV6)
├── cancel-refund.html      # 12. Trang Hủy tour & Chính sách hoàn tiền (SV6)
├── admin.html              # Trang Quản trị cơ bản (SV6)
│
├── assets/
│   ├── css/
│   │   └── style.css       # File stylesheet chung (Desktop first)
│   ├── vendor/
│   │   ├── bootstrap/      # Bootstrap 5 offline
│   │   └── jquery/         # jQuery 3.7.1 offline
│   ├── js/
│   │   ├── data.js         # Dữ liệu tour mẫu nạp vào LocalStorage
│   │   └── main.js         # Logic dùng chung
│   └── images/             # Toàn bộ hình ảnh dự án (SV7 chuẩn hóa)
└── notes/                  # Thư mục ghi chú nội bộ (Đã được .gitignore tự động bỏ qua)
```

---

### 2. Bảng phân công nhiệm vụ (Cập nhật mới nhất)
- **SV1 (Nhóm trưởng / Architect & Slide Lead):** Điều phối Git, khởi tạo template dùng chung, Trang chủ (`index.html`), **thiết kế toàn bộ Slide thuyết trình PowerPoint (`ThuyetTrinh_BTL_Web.pptx`)**, tổng hợp hoàn thiện Báo cáo Word.
- **SV2 (Frontend Dev & Thuyết trình viên chính):** **Đại diện nhóm thuyết trình và trả lời phản biện**, lập trình module Đăng ký (`register.html` regex validate jQuery) & Đăng nhập (`login.html`), quản lý session `currentUser` qua LocalStorage.
- **SV3 (Frontend Dev / Tour Catalog):** Trang Danh sách tour (`tours.html`), bộ lọc đa tiêu chí bên trái (Vùng miền, Quốc tế, Giá, Loại tour M.I.C.E), phân trang.
- **SV4 (Frontend Dev / Tour Detail):** Trang Chi tiết tour (`tour-detail.html`), Carousel ảnh, bảng giá, lịch trình chi tiết từng ngày, chính sách tour.
- **SV5 (Frontend Dev / Booking Logic):** Trang Đặt tour & Modal thêm người đi cùng (`booking.html`), Trang Xác nhận & Thanh toán (`checkout.html`, `booking-success.html`), tính tiền và lưu đơn hàng vào LocalStorage.
- **SV6 (Frontend Dev / Lookup & Refund):** Trang Tra cứu đơn (`my-bookings.html`), Hủy tour & tính % hoàn tiền theo mốc 24h/12h (`cancel-refund.html`), Trang Quản trị đơn (`admin.html`).
- **SV7 (Frontend Dev - Lập trình vừa sức):** Lập trình **Trang Giới thiệu (`about.html`)** và **Trang Sitemap (`sitemap.html`)**, chuẩn hóa kho hình ảnh chất lượng cao (>7 ảnh có `alt`).
- **SV8:** Thành viên phác thảo Concept giao diện ban đầu (hiện vắng mặt/mất liên lạc).

---

### 3. Quy chuẩn kỹ thuật môn học
1. **Thư viện Offline:** Đã nạp sẵn Bootstrap 5 và jQuery tại `assets/vendor/`, tuyệt đối không dùng link CDN.
2. **Giao diện:** Tối ưu chuẩn **Desktop / Laptop** (1366x768 - 1920x1080), không làm responsive mobile.
3. **Màu sắc thương hiệu ABC Tours:**
   - Xanh dương chính: `#007BFF`
   - Xanh lá phụ: `#00C896`
   - Cam điểm nhấn: `#FF6B00`
   - Xám nhạt nền: `#F5F7FA`
   - Xanh đậm chữ: `#1E293B`
4. **Lưu trữ dữ liệu:** Dùng mảng JavaScript và `localStorage`, không dùng backend database.
5. **Tiêu chuẩn HTML:** Thẻ `<title>` có ý nghĩa riêng cho từng trang, tuân thủ chuẩn W3C validation.
