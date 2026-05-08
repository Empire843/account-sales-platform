# Kế Hoạch Phát Triển Nền Tảng Bán Tài Khoản (Account Sales Platform)

Tài liệu này mô tả chi tiết kiến trúc, tính năng, và lộ trình phát triển cho nền tảng bán tài khoản kỹ thuật số tự động (tương tự như TKCursor, WokuShop, TapHoaMMO).

---

## 1. Mục Tiêu Dự Án
Xây dựng một hệ thống thương mại điện tử trọn gói, tự động hóa 100% quy trình từ lúc khách hàng chọn mua tài khoản đến lúc nhận thông tin đăng nhập, không cần sự can thiệp thủ công của Admin.

## 2. Các Tính Năng Cốt Lõi (Core Features)

### 2.1. Dành cho Khách hàng (End-user)
- **Giao diện mua sắm:** Danh mục sản phẩm dạng Grid, phân trang, bộ lọc (AI Tools, Design, Dev).
- **Quy trình thanh toán:** Popup thanh toán mô phỏng quét mã QR ngân hàng.
- **Tự động xác nhận:** Chờ xác nhận thanh toán (Polling/Webhook từ ngân hàng) trong 5-10 giây.
- **Nhận tài khoản:** Tự động gửi thông tin (User/Pass hoặc License Key) ngay sau khi thanh toán thành công lên màn hình và qua Email.
- **Tính năng tăng độ tin cậy (Trust):** Popup live "Khách hàng vừa mua", hiển thị Badge bảo hành.

### 2.2. Dành cho Quản trị viên (Admin)
- **Quản lý Sản phẩm:** Thêm/sửa/xóa gói tài khoản, định giá, gán category.
- **Quản lý Kho tài khoản (Inventory):** Nhập danh sách tài khoản (Email|Password) vào kho. Hệ thống tự động phân phối và trừ đi khi có người mua.
- **Quản lý Đơn hàng (Orders):** Theo dõi trạng thái đơn hàng, doanh thu.
- **Cấu hình thanh toán:** Thiết lập API Key ngân hàng để nhận webhook tự động.

---

## 3. Kiến Trúc Công Nghệ (Tech Stack)

### 3.1. Frontend (UI/UX)
- **Công nghệ:** HTML5, CSS3 (Vanilla với CSS Variables), JavaScript thuần. 
- **Thiết kế:** Dark mode mặc định, phong cách Glassmorphism, Micro-animations.
- *(Có thể chuyển đổi sang React/Next.js nếu cần thiết lập các luồng routing phức tạp hơn).*

### 3.2. Backend (API & Logic)
- **Công nghệ đề xuất:** Node.js (Express/NestJS) hoặc Python (FastAPI/Django).
- **Nhiệm vụ:**
  - Xử lý API cho Frontend (Lấy danh sách sản phẩm, tạo đơn hàng).
  - Tích hợp Webhook nhận thông báo biến động số dư từ đối tác thứ 3 (như SePay, Casso).
  - Quản lý thuật toán cấp phát tài khoản (FIFO).

### 3.3. Database (Cơ sở dữ liệu)
- **Công nghệ:** PostgreSQL hoặc MySQL.
- **Các bảng chính (Tables Draft):**
  - `products`: id, name, description, price, category, status.
  - `inventory`: id, product_id, account_info, is_sold.
  - `orders`: id, product_id, amount, status (pending/success), created_at.

---

## 4. Quy Trình Thanh Toán Tự Động (Auto-Delivery Flow)

1. **Checkout:** Khách bấm "Mua", Backend tạo `Order` (trạng thái: *Pending*) và sinh nội dung chuyển khoản độc nhất (Ví dụ: `PAY PRO299`).
2. **Payment:** Khách quét mã QR và chuyển tiền.
3. **Webhook:** Ngân hàng/Cổng thanh toán gửi Webhook biến động số dư về Backend.
4. **Validation:** Backend khớp nội dung chuyển khoản và số tiền với `Order`.
5. **Delivery:** Đổi trạng thái `Order` -> *Success*. Backend xuất 1 tài khoản từ `inventory` (chưa bán) và trả về cho Frontend hiển thị.

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Phase 1: Giao diện và Mockup (Hoàn thành)
- [x] Phân tích đối thủ (TKCursor).
- [x] Thiết kế UI Frontend (HTML/CSS/JS) với giao diện Landing page và Popup thanh toán.

### Phase 2: Xây dựng Backend Core (Tiếp theo)
- [ ] Thiết kế Database schema chi tiết.
- [ ] Xây dựng các API cơ bản: Lấy sản phẩm, Tạo đơn hàng.
- [ ] Làm chức năng quản lý kho tài khoản.

### Phase 3: Tích hợp Thanh Toán tự động
- [ ] Viết API Webhook nhận biến động số dư.
- [ ] Viết luồng xử lý và tự động xuất tài khoản.
- [ ] Gắn API vào UI (Frontend kết nối Backend thay cho dữ liệu tĩnh).

### Phase 4: Admin Panel & Launch
- [ ] Thiết kế và Code giao diện trang Quản trị.
- [ ] Bảo mật, chạy thử nghiệm (UAT) và triển khai lên Server.
