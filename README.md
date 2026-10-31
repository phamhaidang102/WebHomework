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

### 2. Bảng phân công nhiệm vụ
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

---

### 4. HƯỚNG DẪN DÙNG GIT & QUY TRÌNH GITHUB WORKFLOW CHO NHÓM

> **Nguyên tắc cốt lõi:**
> - Nhánh `main` là nhánh sản phẩm hoàn chỉnh, **KHÔNG AI ĐƯỢC CODE TRỰC TIẾP TRÊN MAIN**.
> - Mỗi thành viên làm trang nào thì tạo một **branch riêng** cho trang đó theo cú pháp: `feature/<ten-trang>`.
> - Sau khi làm xong và test chạy tốt trên máy của mình thì mới đẩy (push) branch lên GitHub và tạo **Pull Request (PR)** để Trưởng nhóm gộp (merge) vào `main`.

#### 4.1. Bảng quy ước tên Branch theo trang cho từng thành viên:
| Thành viên | Trang phụ trách | Tên Branch quy ước |
|:---|:---|:---|
| **SV1** | Trang chủ (`index.html`) | `feature/home` |
| **SV2** | Đăng ký & Đăng nhập (`register.html`, `login.html`) | `feature/auth` |
| **SV3** | Danh sách tour (`tours.html`) | `feature/tours` |
| **SV4** | Chi tiết tour (`tour-detail.html`) | `feature/tour-detail` |
| **SV5** | Đặt tour & Thanh toán (`booking.html`, `checkout.html`) | `feature/booking` |
| **SV6** | Tra cứu & Hủy tour (`my-bookings.html`, `cancel-refund.html`) | `feature/refund` |
| **SV7** | Giới thiệu & Sitemap (`about.html`, `sitemap.html`) | `feature/about-sitemap` |

---

#### 4.2. Quy trình làm việc 5 bước cụ thể (Kèm ví dụ thực chiến)

Giả sử bạn là **SV3**, được phân công làm trang **Danh sách tour (`tours.html`)**:

##### 🔹 BƯỚC 1: Lấy code mới nhất từ nhánh `main` về máy
Mở terminal/cmd tại thư mục dự án và chạy:
```bash
# 1. Chuyển sang nhánh main
git checkout main

# 2. Kéo code mới nhất từ GitHub về
git pull origin main
```

##### 🔹 BƯỚC 2: Tạo branch mới cho trang của mình và bắt đầu làm
```bash
# Tạo nhánh mới và tự động chuyển sang nhánh đó
git checkout -b feature/tours

# Kiểm tra xem mình đã ở nhánh feature/tours chưa (sẽ thấy dấu * màu xanh ở tên nhánh)
git branch
```
👉 *Bây giờ bạn bắt đầu mở VS Code lên tạo file `tours.html` và viết code.*

##### 🔹 BƯỚC 3: Lưu lại tiến độ (Commit code)
Sau khi code xong hoặc làm được một phần công việc:
```bash
# 1. Xem các file bạn vừa tạo hoặc chỉnh sửa
git status

# 2. Thêm các file cần lưu vào vùng chờ (stage)
git add tours.html assets/

# 3. Ghi lại nội dung commit rõ ràng
git commit -m "feat(tours): Hoan thanh giao dien danh sach tour va bo loc"
```

##### 🔹 BƯỚC 4: Đẩy (Push) branch của mình lên GitHub
```bash
git push origin feature/tours
```
*(Nếu là lần đầu push nhánh này, terminal có thể nhắc dùng lệnh `git push --set-upstream origin feature/tours`, bạn cứ chạy theo gợi ý).*

##### 🔹 BƯỚC 5: Tạo Pull Request (PR) trên GitHub
1. Vào trang GitHub của dự án (trên trình duyệt).
2. Bạn sẽ thấy thanh màu vàng thông báo: **`feature/tours had recent pushes`** -> Nhấn nút **`Compare & pull request`**.
3. Điền tiêu đề và mô tả ngắn gọn: *"Đã hoàn thành trang danh sách tour kèm bộ lọc"*.
4. Nhấn **`Create pull request`**.
5. Nhắn **Nhóm trưởng (SV1)** lên duyệt và nhấn nút **`Merge pull request`** vào nhánh `main`.

---

#### 4.3. Hướng dẫn dành cho Nhóm trưởng (SV1) duyệt và gộp code:
- **Cách 1 (Dễ nhất):** Vào GitHub trên trình duyệt -> Tab **Pull requests** -> Mở PR của bạn thành viên -> Xem thay đổi (Files changed) -> Bấm **Merge pull request** -> **Confirm merge**.
- **Cách 2 (Trên máy tính cá nhân):**
  ```bash
  git checkout main
  git pull origin main
  git merge feature/tours
  git push origin main
  ```

---

#### 4.4. Các lưu ý quan trọng để không bị xung đột code (Conflict):
1. **Ai làm file nào chỉ sửa file đó:** SV3 chỉ tạo và sửa `tours.html`, SV4 chỉ làm `tour-detail.html`. Không tự ý sửa file HTML của người khác.
2. **Khi viết thêm CSS chung vào `assets/css/style.css`:**
   Mỗi bạn hãy kéo xuống dưới cùng của file `style.css` và ghi chú rõ ràng theo cú pháp:
   ```css
   /* ==================================== */
   /* CSS DÀNH RIÊNG CHO TRANG TOURS (SV3) */
   /* ==================================== */
   .tour-card { ... }
   ```
3. **Thư mục ghi chú:** Toàn bộ note, dàn ý nháp, tài liệu cá nhân hãy để trong thư mục `notes/`. Thư mục này đã được cài đặt tự động bỏ qua trong `.gitignore` nên sẽ không bị đẩy lên GitHub làm bẩn repo.
