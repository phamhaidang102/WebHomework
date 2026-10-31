# BÀI TẬP LỚN HỆ THỐNG VÀ CÔNG NGHỆ WEB (FIT - IUH)
## Đề tài: Website giới thiệu tour du lịch và đăng ký trực tuyến - ABC Tours

---

### 1. Cấu trúc thư mục dự án
```
D:\Code\Bài tập lớn Web\
├── index.html              # 1. Trang chủ (Đăng - Nhóm trưởng) [ĐÃ HOÀN THÀNH]
├── sitemap.html            # 2. Trang Sitemap (Lĩnh)
├── about.html              # 3. Trang Giới thiệu (Lĩnh)
├── register.html           # 4. Trang Đăng ký (Khánh nhỏ - Thuyết trình viên)
├── login.html              # 5. Trang Đăng nhập (Khánh nhỏ - Thuyết trình viên)
├── tours.html              # 6. Trang Danh sách tour (Khánh lớn)
├── tour-detail.html        # 7. Trang Chi tiết tour (Phúc)
├── booking.html            # 8. Trang Nhập thông tin hành khách (Khánh Duy)
├── checkout.html           # 9. Trang Xác nhận & Thanh toán (Khánh Duy)
├── booking-success.html    # 10. Trang Đặt tour thành công (Khánh Duy)
├── my-bookings.html        # 11. Trang Tra cứu & Quản lý đơn tour (Quốc Duy)
├── cancel-refund.html      # 12. Trang Hủy tour & Chính sách hoàn tiền (Quốc Duy)
├── admin.html              # Trang Quản trị cơ bản (Quốc Duy)
│
├── assets/
│   ├── css/
│   │   └── style.css       # File stylesheet chung (Desktop first) [ĐÃ HOÀN THÀNH]
│   ├── vendor/
│   │   ├── bootstrap/      # Bootstrap 5 offline [ĐÃ NẠP SẴN]
│   │   └── jquery/         # jQuery 3.7.1 offline [ĐÃ NẠP SẴN]
│   ├── js/
│   │   ├── data.js         # 12 tour mẫu + 2 đơn hàng mẫu nạp vào LocalStorage [ĐÃ HOÀN THÀNH]
│   │   ├── main.js         # Header/Footer/Modal Đăng nhập nhanh & Helper dùng chung [ĐÃ HOÀN THÀNH]
│   │   └── home.js         # Logic riêng của Trang chủ [ĐÃ HOÀN THÀNH]
│   └── images/             # Toàn bộ hình ảnh dự án (Lĩnh chuẩn hóa)
└── notes/                  # Thư mục ghi chú nội bộ (Đã được .gitignore tự động bỏ qua)
```

---

### 2. Bảng phân công nhiệm vụ
- **Đăng (Nhóm trưởng / Architect & Slide Lead):** Điều phối Git, khởi tạo template dùng chung (`style.css`, `data.js`, `main.js`), Trang chủ (`index.html`), **thiết kế toàn bộ Slide thuyết trình PowerPoint (`ThuyetTrinh_BTL_Web.pptx`)**, tổng hợp hoàn thiện Báo cáo Word (`BaoCao_BTL_Web.docx`).
- **Khánh nhỏ (Frontend Dev & Thuyết trình viên chính):** **Đại diện nhóm thuyết trình và trả lời phản biện**, lập trình module Đăng ký (`register.html` regex validate jQuery) & Đăng nhập (`login.html`), quản lý danh sách `abc_users` và phiên `currentUser` qua LocalStorage.
- **Khánh lớn (Frontend Dev / Tour Catalog):** Trang Danh sách tour (`tours.html`), bộ lọc đa tiêu chí bên trái (Vùng miền Bắc/Trung/Nam, Quốc tế Á/Âu/Mỹ, Khoảng giá, Loại tour Phổ thông/Cao cấp/M.I.C.E), sắp xếp và phân trang.
- **Phúc (Frontend Dev / Tour Detail):** Trang Chi tiết tour (`tour-detail.html`), Carousel ảnh, bảng giá, lịch trình chi tiết từng ngày (`itinerary`), chính sách tour, nút "Đặt ngay" chuyển sang `booking.html?id=<tourId>`.
- **Khánh Duy (Frontend Dev / Booking Logic):** Trang Đặt tour & Modal thêm người đi cùng (`booking.html`), Trang Xác nhận & Thanh toán (`checkout.html`), Trang Đặt tour thành công (`booking-success.html`), tính tổng tiền (kèm phụ thu phòng đơn) và lưu đơn hàng vào `abc_orders` trong LocalStorage.
- **Quốc Duy (Frontend Dev / Lookup & Refund):** Trang Tra cứu đơn (`my-bookings.html` kèm đếm ngược hạn thanh toán 24h), Hủy tour & tính % hoàn tiền theo mốc 24h (70%) / 12h (50%) (`cancel-refund.html`), Trang Quản trị tour & đơn hàng (`admin.html`).
- **Lĩnh (Frontend Dev - Lập trình vừa sức):** Lập trình **Trang Giới thiệu (`about.html`)** và **Trang Sitemap (`sitemap.html`)**. **Quản lý kho hình ảnh chung** (`assets/images/`): thay ảnh tạm bằng ảnh thật chất lượng cao, đảm bảo tối thiểu 7 ảnh có `alt` chuẩn W3C theo quy ước ở mục 6.
- **Thành viên 8:** Thành viên phác thảo Concept giao diện ban đầu (hiện vắng mặt/mất liên lạc; ghi nhận ở giai đoạn Concept).

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
5. **Tiêu chuẩn HTML:** Thẻ `<title>` có ý nghĩa riêng cho từng trang, mọi thẻ `<img>` có `alt`, mọi `<input>`/`<select>` có `<label>`, tuân thủ chuẩn W3C validation.

---

### 4. HƯỚNG DẪN DÙNG GIT & GITHUB WORKFLOW (CHO VS CODE VÀ TERMINAL)

#### 4.0. BƯỚC BẮT BUỘC: Nhóm trưởng cấp quyền Cộng sự (Collaborator)
> **Giải đáp thắc mắc:** *"Muốn sửa repo thì phải ở dạng cộng sự, dùng VS Code có được không?"*
> - **DÙNG VS CODE HOÀN TOÀN PUSH ĐƯỢC 100%!** VS Code chỉ là công cụ giao diện hỗ trợ Git.
> - Tuy nhiên, vì repo này nằm trên tài khoản GitHub cá nhân của Đăng (`phamhaidang102`), nên **bắt buộc Đăng phải mời các bạn làm Cộng sự** thì các bạn mới có quyền đẩy (push) code lên:
>   1. Đăng vào link: [https://github.com/phamhaidang102/WebHomework/settings/access](https://github.com/phamhaidang102/WebHomework/settings/access)
>   2. Bấm nút màu xanh **"Add people"**.
>   3. Nhập Username GitHub hoặc Email của từng bạn (Khánh nhỏ, Khánh lớn, Phúc, Khánh Duy, Quốc Duy, Lĩnh) để gửi lời mời.
>   4. Các bạn vào email kiểm tra thư từ GitHub và bấm **"Accept invitation"** (Chấp nhận lời mời).
>   👉 *Sau khi chấp nhận, các bạn mở VS Code lên là push tẹt ga, không bao giờ bị báo lỗi từ chối quyền (403 Permission Denied).*

---

#### 4.1. Hướng dẫn tải và cài đặt Git (Dành cho bạn nào máy chưa có Git)
1. Tải bộ cài Git chính thức tại: [https://git-scm.com/downloads](https://git-scm.com/downloads) (chọn bản cho Windows).
2. Mở file cài đặt vừa tải về, cứ bấm **Next** liên tục theo mặc định cho đến khi hoàn tất (**Finish**).
3. Mở phần mềm **Visual Studio Code (VS Code)** lên là VS Code sẽ tự động nhận diện Git.

---

#### 4.2. Bảng quy ước tên Branch theo trang cho từng thành viên:
| Thành viên | Trang & File phụ trách | Tên Branch quy ước | Trạng thái |
|:---|:---|:---|:---:|
| **Đăng** | Khung dùng chung (`style.css`, `data.js`, `main.js`) & Trang chủ (`index.html`) | `feature/home` | ✅ Đã Merge |
| **Khánh nhỏ** | Đăng ký & Đăng nhập (`register.html`, `login.html`) | `feature/auth` | Đang thực hiện |
| **Khánh lớn** | Danh sách tour (`tours.html`) | `feature/tours` | Đang thực hiện |
| **Phúc** | Chi tiết tour (`tour-detail.html`) | `feature/tour-detail` | Đang thực hiện |
| **Khánh Duy** | Đặt tour & Thanh toán (`booking.html`, `checkout.html`, `booking-success.html`) | `feature/booking` | Đang thực hiện |
| **Quốc Duy** | Tra cứu, Hủy tour & Quản trị (`my-bookings.html`, `cancel-refund.html`, `admin.html`) | `feature/refund` | Đang thực hiện |
| **Lĩnh** | Giới thiệu, Sitemap & Kho ảnh (`about.html`, `sitemap.html`, `assets/images/`) | `feature/about-sitemap` | Đang thực hiện |

---

#### 4.3. CÁCH 1: Dùng Git bằng Giao diện trực quan trên VS Code (DỄ NHẤT - KHUYÊN DÙNG)

*(Không cần nhớ lệnh gõ terminal, chỉ cần click chuột)*

1. **Clone repo về máy:**
   - Mở VS Code -> Nhấn `Ctrl + Shift + P` -> Gõ `Git: Clone` -> Dán link: `https://github.com/phamhaidang102/WebHomework.git` -> Chọn thư mục lưu trên máy tính.
   - Nhấn **Open** để mở thư mục dự án trên VS Code.
   - *(Lần đầu tiên VS Code có thể hiện cửa sổ nhỏ ở góc dưới hỏi đăng nhập GitHub, bạn bấm **Sign in to GitHub** và cấp quyền là xong).*

2. **Tạo branch riêng của mình:**
   - Nhìn xuống **thanh trạng thái màu xanh dưới cùng bên trái của VS Code**, bạn sẽ thấy chữ `main`.
   - Bấm chuột vào chữ `main` đó -> Chọn **"+ Create new branch..."**.
   - Nhập tên nhánh của mình (theo bảng 4.2 ở trên, ví dụ: `feature/tours`) rồi nhấn **Enter**.
   - Lúc này góc dưới bên trái sẽ chuyển thành tên nhánh của bạn.

3. **Viết code và lưu lại (Commit):**
   - Bạn mở file HTML/CSS được phân công lên viết code bình thường.
   - Khi muốn lưu lại: Nhìn sang thanh công cụ bên trái của VS Code, bấm vào icon **Source Control** (hình nhánh cây có vòng tròn hoặc phím tắt `Ctrl + Shift + G`).
   - Bạn sẽ thấy danh sách các file mình vừa sửa ở mục *Changes*.
   - Nhập nội dung vào ô tin nhắn (Message), ví dụ: *"Hoàn thành giao diện danh sách tour"*.
   - Bấm nút **Commit** (hoặc dấu tích `✓`).

4. **Đẩy lên GitHub (Push):**
   - Ngay sau khi bấm Commit, bạn sẽ thấy nút màu xanh **"Publish Branch"** (hoặc nút **Sync Changes** có icon 2 mũi tên xoay tròn ở góc dưới bên trái).
   - Bấm vào nút đó! VS Code sẽ tự động đẩy nhánh `feature/...` của bạn lên GitHub.

5. **Tạo Pull Request:**
   - Vào link: [https://github.com/phamhaidang102/WebHomework](https://github.com/phamhaidang102/WebHomework)
   - Bấm nút **"Compare & pull request"** màu vàng -> Nhấn **"Create pull request"**.
   - Nhắn Đăng (Trưởng nhóm) vào bấm Merge là xong!

---

#### 4.4. CÁCH 2: Dùng Git bằng Dòng lệnh Terminal (Dành cho bạn nào thích gõ lệnh)

Mở terminal/cmd trong thư mục dự án:
```bash
# 1. Kéo code mới nhất từ main về máy
git checkout main
git pull origin main

# 2. Tạo nhánh riêng của mình (ví dụ làm trang tours)
git checkout -b feature/tours

# 3. Viết code xong thì thêm file và commit
git add .
git commit -m "feat(tours): Hoan thanh giao dien va bo loc tour"

# 4. Đẩy nhánh lên GitHub
git push origin feature/tours
```
Sau đó lên link GitHub bấm **Compare & pull request** tương tự như Bước 5 của Cách 1.

---

#### 4.5. Hướng dẫn dành cho Nhóm trưởng (Đăng) duyệt và gộp code:
- Vào link repo trên GitHub -> Tab **Pull requests** -> Bấm vào PR của bạn thành viên gửi -> Xem các file thay đổi (Files changed) -> Bấm **Merge pull request** -> **Confirm merge**.
- Sau khi Đăng merge xong, nhánh `main` trên GitHub sẽ có code mới của bạn đó. Các bạn khác muốn lấy code mới về chỉ cần bấm nút **Sync** trên VS Code hoặc gõ `git checkout main && git pull origin main`.

---

#### 4.6. Các lưu ý quan trọng để không bao giờ bị xung đột (Conflict):
1. **Phân chia file độc lập:** Mỗi bạn chỉ tạo và sửa file HTML được phân công trong bảng mục 4.2. Không sửa file HTML của nhau.
2. **Dữ liệu `assets/js/data.js` và `assets/js/main.js` đã được khóa chuẩn:** Đăng đã nạp sẵn **12 tour đầy đủ** (Bắc/Trung/Nam, Á/Âu/Mỹ, Standard/Premium/MICE, lịch trình từng ngày) và **2 đơn đặt tour mẫu** trong `data.js`. Các bạn **không cần sửa `data.js`** để tránh xung đột.
3. **Khi viết thêm CSS vào file `assets/css/style.css`:**
   Kéo xuống dưới cùng của file `style.css`, ghi chú tên mình rồi viết CSS tiếp theo:
   ```css
   /* ======================================= */
   /* CSS DÀNH RIÊNG CHO TRANG TOURS (KHÁNH LỚN) */
   /* ======================================= */
   .tour-filter-sidebar { ... }
   ```
4. **Thư mục ghi chú:** Toàn bộ note cá nhân, tài liệu nháp cứ ném vào thư mục `notes/`. Thư mục này đã có `.gitignore` bảo vệ nên không bao giờ bị đẩy lên GitHub làm bẩn repo chung.

---

### 5. LỊCH TRÌNH VÀ DEADLINE CHI TIẾT (31/10 - 11/11/2026)

> **Cập nhật tiến độ:** Nhóm trưởng (**Đăng**) đã hoàn thành xong **Pha 1** ngay trong ngày **31/10/2026** (sớm hơn kế hoạch 2 ngày). Toàn bộ các thành viên có thể `git pull origin main` và bắt đầu code ngay từ hôm nay!

| Giai đoạn | Hạn chót (Deadline) | Thành viên | Nhiệm vụ cần hoàn thành & Merge PR | Trạng thái |
|:---|:---:|:---|:---|:---:|
| **Pha 1: Xây dựng nền tảng & Trang chủ** | **Hoàn thành ngày 31/10** | **Đăng** | Khởi tạo Header/Footer/Modal Đăng nhập nhanh, CSS chung, 12 tour mẫu (`data.js`), helper (`main.js`) và Trang chủ (`index.html`) -> Đã merge vào `main` | ✅ **Đã xong (31/10)** |
| **Pha 2: Giao diện tĩnh, Auth & Danh mục/Chi tiết Tour** | **23:59 ngày 04/11** | **Lĩnh** | Hoàn thành `sitemap.html`, `about.html`; cập nhật kho ảnh thật chất lượng cao vào `assets/images/` (xem mục 6) | ⏳ Đang mở |
| | | **Khánh nhỏ** | Hoàn thành `register.html` (Regex validate jQuery) & `login.html` (Xác thực LocalStorage) | ⏳ Đang mở |
| | | **Khánh lớn** | Hoàn thành `tours.html` (Bộ lọc đa tiêu chí Bắc/Trung/Nam, Á/Âu/Mỹ, Giá, M.I.C.E & phân trang) | ⏳ Đang mở |
| | | **Phúc** | Hoàn thành `tour-detail.html` (Carousel ảnh, lịch trình từng ngày, bảng giá, nút Đặt ngay) | ⏳ Đang mở |
| **Pha 3: Luồng Đặt tour, Thanh toán & Tra cứu/Hoàn tiền** | **23:59 ngày 07/11** | **Khánh Duy** | Hoàn thành `booking.html` (Modal hành khách), `checkout.html`, `booking-success.html` (Lưu đơn vào `abc_orders`) | ⏳ Đang mở |
| | | **Quốc Duy** | Hoàn thành `my-bookings.html` (Tra cứu & đếm ngược 24h), `cancel-refund.html` (Hoàn tiền 70%/50%), `admin.html` *(Đã có sẵn 2 đơn mẫu trong `data.js` để code song song từ 01/11)* | ⏳ Đang mở |
| **Pha 4: Kiểm thử tích hợp, Khóa Code & Tài liệu** | **23:59 ngày 09/11** | **Cả nhóm** | Kiểm tra liên kết xuyên suốt 12 trang, test luồng đặt/hủy tour, kiểm tra W3C validation | ⏳ Sắp tới |
| | | **Đăng** | Tổng hợp Báo cáo Word (`BaoCao_BTL_Web.docx` - chuẩn hóa danh sách tên & MSSV) và thiết kế Slide (`ThuyetTrinh_BTL_Web.pptx`) | ⏳ Sắp tới |
| **Pha 5: Duyệt thuyết trình & Nộp bài** | **10/11 - 11/11/2026** | **Khánh nhỏ & Đăng** | Nhận slide, chạy thử demo trực tiếp trên trình duyệt và dợt kịch bản phản biện (ngày 10/11) | ⏳ Sắp tới |
| | | **Cả nhóm** | Đóng gói nộp LMS và báo cáo trước giảng viên (ngày 11/11/2026) | 🎯 Đích đến |

---

### 6. QUY ƯỚC QUẢN LÝ HÌNH ẢNH (`assets/images/`)

> **Người phụ trách: Lĩnh.** Lĩnh quản lý kho ảnh chung của website trên nhánh `feature/about-sitemap`; các bạn khác không tự ý sửa, xóa hoặc đổi tên ảnh đang có.

**Phân công**
- Lĩnh thay 6 ảnh tạm (đang cắt từ layout mẫu) bằng ảnh thật chất lượng cao, **giữ nguyên tên file**: `hero-halong.jpg`, `promo-summer.jpg`, `tour-danang.jpg`, `tour-nhatrang.jpg`, `tour-phuquoc.jpg`, `tour-singapore.jpg`.
- Lĩnh bổ sung ảnh thành viên/công ty cho trang `about.html` (và có thể thêm ảnh cho các tour `T005`–`T012` nếu muốn).
- Website phải có tối thiểu **7 hình ảnh** (yêu cầu đề bài).
- Deadline hoàn thành kho ảnh: **23:59 ngày 04/11** cùng với nhánh `feature/about-sitemap`.

**Quy ước đặt tên và định dạng**
- Chữ thường, không dấu, nối bằng dấu gạch ngang. Ví dụ: `tour-danang.jpg`, `member-linh.jpg`.
- Thay ảnh cũ thì **giữ nguyên tên file** để không phải sửa code.
- Định dạng `.jpg`/`.webp`, rộng khoảng 1200px cho ảnh banner, khoảng 800px cho ảnh tour. Mỗi ảnh nên dưới 300 KB.
- Mọi thẻ `<img>` phải có thuộc tính `alt` mô tả nội dung (alt rỗng chỉ dùng cho ảnh trang trí).
- Dùng ảnh có bản quyền cho phép (tự chụp hoặc ảnh miễn phí như Unsplash/Pexels) và ghi nguồn ở mục Tài liệu tham khảo của báo cáo.

---

### 7. QUY ƯỚC DỮ LIỆU `LOCALSTORAGE` & LIÊN KẾT TRANG (BẮT BUỘC ĐỂ KHỚP NỐI)

Để các trang của **Khánh nhỏ**, **Khánh lớn**, **Phúc**, **Khánh Duy** và **Quốc Duy** ghép lại chạy trơn tru ngay lần đầu, cả nhóm thống nhất sử dụng khung HTML và các hàm dựng sẵn trong `assets/js/main.js`:

#### 7.1. Khung HTML chung cho mọi trang
Mọi trang `.html` đều nạp CSS/JS offline và để `<header id="site-header"></header>` + `<footer id="site-footer"></footer>` (file `main.js` sẽ tự động gắn Navbar, Modal Đăng nhập nhanh và Footer):
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tên trang - ABC Tours</title>
  <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-page="tours"> <!-- data-page: home | tours | support | login -->
  <a class="skip-link" href="#main">Bỏ qua điều hướng, đến nội dung chính</a>
  <header id="site-header"></header>

  <main id="main" class="container py-4">
    <!-- Nội dung riêng của trang -->
  </main>

  <footer id="site-footer"></footer>

  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="assets/js/data.js"></script>
  <script src="assets/js/main.js"></script>
  <!-- Script riêng của trang (nếu có) -->
</body>
</html>
```

#### 7.2. Quy ước truyền tham số URL giữa các trang
- **Trang chủ (`index.html`) -> Danh sách tour (`tours.html`):**
  - Tìm kiếm: `tours.html?q=Đà Nẵng&date=2026-11-15&people=2`
  - Lọc nhanh từ menu: `tours.html?scope=domestic`, `tours.html?scope=international`, `tours.html?type=premium`, `tours.html?type=mice`, `tours.html?sale=1`
- **Danh sách tour (`tours.html`) -> Chi tiết tour (`tour-detail.html`):**
  - Link xem chi tiết: `tour-detail.html?id=T001` (dùng hàm `ABC.getTourById(id)` để lấy object tour).
- **Chi tiết tour (`tour-detail.html`) -> Đặt tour (`booking.html`):**
  - Nút Đặt ngay: `booking.html?id=T001`
- **Đặt tour (`booking.html`) -> Thanh toán (`checkout.html`) -> Thành công (`booking-success.html`):**
  - Lưu tạm thông tin đang nhập vào `ABC.write(ABC.KEYS.draftBooking, draftObj)` khi chuyển từ `booking.html` sang `checkout.html`.
  - Khi bấm xác nhận ở `checkout.html`: tạo mã đơn `orderCode` (ví dụ `ORD-20261115-89`), gọi `ABC.saveOrder(orderObj)` rồi chuyển sang `booking-success.html?order=ORD-20261115-89`.
- **Tra cứu (`my-bookings.html`) -> Hủy tour (`cancel-refund.html`):**
  - Link sang hủy đơn: `cancel-refund.html?order=ORD-20261115-01`

#### 7.3. Cấu trúc chuẩn các Key trong `localStorage` (Đã hỗ trợ sẵn trong `ABC`)
1. **Tài khoản (`abc_users` & `currentUser`) - Phụ trách: Khánh nhỏ:**
   - Gọi `ABC.saveUser({ fullName, email, phone, cccd, password, address })` khi đăng ký thành công.
   - Gọi `ABC.login(identifier, password)` khi đăng nhập (tự động lưu `currentUser` vào `localStorage`).
   - Tài khoản mẫu có sẵn để test: `demo@abctours.vn` / mật khẩu `Abc@1234`.
2. **Danh sách Tour (`abc_tours`) - Phụ trách đọc: Khánh lớn, Phúc, Khánh Duy, Quốc Duy:**
   - Gọi `ABC.getTours()` để lấy mảng 12 tour; gọi `ABC.getTourById("T001")` để lấy 1 tour; gọi `ABC.formatVND(5990000)` để định dạng tiền tệ (`5.990.000đ`).
3. **Đơn đặt tour (`abc_orders`) - Phụ trách ghi: Khánh Duy / Phụ trách đọc & cập nhật: Quốc Duy:**
   - Đã có sẵn 2 đơn mẫu `ORD-20261115-01` và `ORD-20261101-02` để Quốc Duy kiểm thử ngay.
   - Mỗi object đơn hàng gồm các trường chuẩn:
     ```json
     {
       "orderCode": "ORD-20261115-01",
       "tourId": "T001",
       "tourCode": "DN-BN-001",
       "tourName": "Đà Nẵng - Bà Nà Hills - Hội An",
       "departureDate": "2026-11-15T08:00:00",
       "bookedAt": "2026-10-31T09:30:00",
       "paymentDeadline": "2026-11-01T09:30:00",
       "contact": {
         "fullName": "Nguyễn Văn An",
         "phone": "0901234567",
         "email": "nguyenvanan@gmail.com",
         "cccd": "079204001234",
         "address": "12 Nguyễn Văn Bảo, P.4, Gò Vấp, TP.HCM"
       },
       "passengers": [
         { "fullName": "Nguyễn Văn An", "dob": "2004-05-12", "gender": "Nam", "cccd": "079204001234", "nationality": "Việt Nam", "singleRoom": false }
       ],
       "unitPrice": 5990000,
       "singleRoomTotal": 0,
       "totalPrice": 5990000,
       "paymentMethod": "Chuyển khoản ngân hàng (QR VietQR)",
       "status": "confirmed"
     }
     ```
   - Các hàm có sẵn cho Khánh Duy & Quốc Duy:
     - `ABC.getOrders()`: Lấy danh sách tất cả đơn hàng.
     - `ABC.getOrderByCode(code)`: Tìm đơn theo mã `orderCode`.
     - `ABC.saveOrder(orderObj)`: Thêm đơn mới vào `abc_orders`.
     - `ABC.calcRefund(orderObj)`: Tự động tính `{ hoursLeft, percent, refundAmount, reason }` theo mốc 24h (70%) / 12h (50%).
     - `ABC.updateOrderStatus(code, "cancelled", { cancelledAt, refundAmount, cancelReason })`: Cập nhật trạng thái đơn khi hủy.
