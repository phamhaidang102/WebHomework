# BÀI TẬP LỚN HỆ THỐNG VÀ CÔNG NGHỆ WEB (FIT - IUH)
## Đề tài: Website giới thiệu tour du lịch và đăng ký trực tuyến - ABC Tours

---

### 1. Cấu trúc thư mục dự án
```
D:\Code\Bài tập lớn Web\
├── index.html              # 1. Trang chủ (Đăng - Nhóm trưởng)
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
│   │   └── style.css       # File stylesheet chung (Desktop first)
│   ├── vendor/
│   │   ├── bootstrap/      # Bootstrap 5 offline
│   │   └── jquery/         # jQuery 3.7.1 offline
│   ├── js/
│   │   ├── data.js         # Dữ liệu tour mẫu nạp vào LocalStorage
│   │   └── main.js         # Logic dùng chung
│   └── images/             # Toàn bộ hình ảnh dự án (Lĩnh chuẩn hóa)
└── notes/                  # Thư mục ghi chú nội bộ (Đã được .gitignore tự động bỏ qua)
```

---

### 2. Bảng phân công nhiệm vụ
- **Đăng (Nhóm trưởng / Architect & Slide Lead):** Điều phối Git, khởi tạo template dùng chung, Trang chủ (`index.html`), **thiết kế toàn bộ Slide thuyết trình PowerPoint (`ThuyetTrinh_BTL_Web.pptx`)**, tổng hợp hoàn thiện Báo cáo Word.
- **Khánh nhỏ (Frontend Dev & Thuyết trình viên chính):** **Đại diện nhóm thuyết trình và trả lời phản biện**, lập trình module Đăng ký (`register.html` regex validate jQuery) & Đăng nhập (`login.html`), quản lý session `currentUser` qua LocalStorage.
- **Khánh lớn (Frontend Dev / Tour Catalog):** Trang Danh sách tour (`tours.html`), bộ lọc đa tiêu chí bên trái (Vùng miền, Quốc tế, Giá, Loại tour M.I.C.E), phân trang.
- **Phúc (Frontend Dev / Tour Detail):** Trang Chi tiết tour (`tour-detail.html`), Carousel ảnh, bảng giá, lịch trình chi tiết từng ngày, chính sách tour.
- **Khánh Duy (Frontend Dev / Booking Logic):** Trang Đặt tour & Modal thêm người đi cùng (`booking.html`), Trang Xác nhận & Thanh toán (`checkout.html`, `booking-success.html`), tính tiền và lưu đơn hàng vào LocalStorage.
- **Quốc Duy (Frontend Dev / Lookup & Refund):** Trang Tra cứu đơn (`my-bookings.html`), Hủy tour & tính % hoàn tiền theo mốc 24h/12h (`cancel-refund.html`), Trang Quản trị đơn (`admin.html`).
- **Lĩnh (Frontend Dev - Lập trình vừa sức):** Lập trình **Trang Giới thiệu (`about.html`)** và **Trang Sitemap (`sitemap.html`)**. **Quản lý kho hình ảnh chung** (`assets/images/`): thay ảnh tạm bằng ảnh thật chất lượng cao, đảm bảo tối thiểu 7 ảnh có `alt`, theo quy ước ở mục 6.
- **Thành viên 8:** Thành viên phác thảo Concept giao diện ban đầu (hiện vắng mặt/mất liên lạc).

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
| Thành viên | Trang phụ trách | Tên Branch quy ước |
|:---|:---|:---|
| **Đăng** | Trang chủ (`index.html`) | `feature/home` |
| **Khánh nhỏ** | Đăng ký & Đăng nhập (`register.html`, `login.html`) | `feature/auth` |
| **Khánh lớn** | Danh sách tour (`tours.html`) | `feature/tours` |
| **Phúc** | Chi tiết tour (`tour-detail.html`) | `feature/tour-detail` |
| **Khánh Duy** | Đặt tour & Thanh toán (`booking.html`, `checkout.html`) | `feature/booking` |
| **Quốc Duy** | Tra cứu & Hủy tour (`my-bookings.html`, `cancel-refund.html`) | `feature/refund` |
| **Lĩnh** | Giới thiệu & Sitemap (`about.html`, `sitemap.html`) | `feature/about-sitemap` |

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
1. **Phân chia file độc lập:** Mỗi bạn chỉ tạo và sửa file HTML được phân công trong bảng mục 2. Không sửa file HTML của nhau.
2. **Khi viết thêm CSS vào file `assets/css/style.css`:**
   Kéo xuống dưới cùng của file `style.css`, ghi chú tên mình rồi viết CSS tiếp theo:
   ```css
   /* ======================================= */
   /* CSS DÀNH RIÊNG CHO TRANG TOURS (KHÁNH LỚN) */
   /* ======================================= */
   .tour-card { ... }
   ```
3. **Thư mục ghi chú:** Toàn bộ note cá nhân, tài liệu nháp cứ ném vào thư mục `notes/`. Thư mục này đã có `.gitignore` bảo vệ nên không bao giờ bị đẩy lên GitHub làm bẩn repo chung.

---

### 5. LỊCH TRÌNH VÀ DEADLINE CHI TIẾT (31/10 - 11/11/2026)

> **Mục tiêu:** Hoàn thành toàn bộ code trước ngày **09/11**, dành 2 ngày cuối (10/11 - 11/11) hoàn thiện Báo cáo Word, Slide thuyết trình PPTX và dợt thuyết trình demo.

| Giai đoạn | Hạn chót (Deadline) | Thành viên | Nhiệm vụ cần hoàn thành & Merge PR |
|:---|:---:|:---|:---|
| **Pha 1: Xây móng** | **23:59 ngày 02/11** | **Đăng** | Khởi tạo khung Header/Footer/CSS chung và Trang chủ (index.html) -> Merge vào main để cả nhóm kéo về |
| **Pha 2: Giao diện tĩnh & Auth** | **23:59 ngày 05/11** | **Lĩnh** | Hoàn thành `sitemap.html`, `about.html`; quản lý kho ảnh `assets/images/` (thay ảnh tạm bằng ảnh thật chất lượng cao, xem mục 6) |
| | | **Khánh nhỏ** | Hoàn thành 
egister.html (Regex jQuery) & login.html (Lưu LocalStorage) |
| | | **Phúc** | Hoàn thành `tour-detail.html` (Carousel ảnh, lịch trình ngày, bảng giá) |
| **Pha 3: Danh mục & Đặt tour** | **23:59 ngày 08/11** | **Khánh lớn** | Hoàn thành `tours.html` (Bộ lọc đa năng, phân trang) |
| | | **Khánh Duy** | Hoàn thành `booking.html`, `checkout.html`, `booking-success.html` (Lưu đơn LocalStorage) |
| | | **Quốc Duy** | Hoàn thành my-bookings.html (Tra cứu), cancel-refund.html (Hủy tour/hoàn tiền), `admin.html` |
| **Pha 4: Khóa Code & Đóng gói** | **23:59 ngày 10/11** | **Cả nhóm** | Kiểm tra liên kết 12 trang, W3C validation, không còn lỗi hiển thị |
| | | **Đăng** | Hoàn thiện Báo cáo Word (BaoCao_BTL_Web.docx) & Slide thuyết trình (ThuyetTrinh_BTL_Web.pptx) |
| | | **Khánh nhỏ** | Nhận slide từ Đăng và dợt kịch bản thuyết trình thử |
| **Pha 5: Ngày nộp bài** | **11/11/2026** | **Cả nhóm** | Đóng gói nộp LMS và báo cáo trước giảng viên! |

---

### 6. QUY ƯỚC QUẢN LÝ HÌNH ẢNH (`assets/images/`)

> **Người phụ trách: Lĩnh.** Lĩnh quản lý kho ảnh chung của website; các bạn khác không tự ý sửa, xóa hoặc đổi tên ảnh chung.

**Phân công**
- Lĩnh thay các ảnh tạm (đang bị mờ vì cắt từ layout mẫu) bằng ảnh thật chất lượng cao: `hero-halong.jpg`, `promo-summer.jpg`, `tour-danang.jpg`, `tour-nhatrang.jpg`, `tour-phuquoc.jpg`, `tour-singapore.jpg`.
- Lĩnh bổ sung ảnh cho các tour mới và ảnh thành viên cho trang `about.html`.
- Website phải có tối thiểu **7 hình ảnh** (yêu cầu đề bài).
- Deadline: **23:59 ngày 05/11** để cả nhóm kiểm tra giao diện với ảnh thật.

**Quy ước đặt tên và định dạng**
- Chữ thường, không dấu, nối bằng dấu gạch ngang. Ví dụ: `tour-danang.jpg`, `member-linh.jpg`.
- Thay ảnh cũ thì **giữ nguyên tên file** để không phải sửa code. Nếu bắt buộc đổi tên, sửa trường `image` trong `assets/js/data.js` và tăng `ABC_DATA_VERSION`.
- Định dạng `.jpg`/`.webp`, rộng khoảng 1200px cho ảnh banner, khoảng 800px cho ảnh tour. Mỗi ảnh nên dưới 300 KB.
- Mọi thẻ `<img>` phải có thuộc tính `alt` mô tả nội dung (alt rỗng chỉ dùng cho ảnh trang trí).
- Dùng ảnh có bản quyền cho phép (tự chụp hoặc ảnh miễn phí như Unsplash/Pexels) và ghi nguồn ở mục Tài liệu tham khảo của báo cáo.

**Quy trình Git cho ảnh**
- Lĩnh làm trên branch `feature/images` hoặc `feature/about-sitemap`, rồi tạo Pull Request như mục 4.
- Bạn nào cần thêm ảnh riêng cho trang của mình: nhờ Lĩnh hoặc tự thêm file mới với tên không trùng, không sửa ảnh đang có.
