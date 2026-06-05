# 🌐 Personal Digital Portfolio - Nhập môn Công nghệ số & Ứng dụng AI

[![Author](https://img.shields.io/badge/Author-Duong%20Minh%20Phuong-blue?style=flat-square)](https://github.com/phuongdm-uet)
[![Major](https://img.shields.io/badge/Field-Mechatronics-orange?style=flat-square)](https://uet.vnu.edu.vn/)
[![Academic%20Year](https://img.shields.io/badge/Academic%20Year-2025--2026-purple?style=flat-square)]()
[![License](https://img.shields.io/badge/Academic%20Integrity-UET%20Standard-green?style=flat-square)]()

## 📝 Giới thiệu Dự án
Hệ thống **Portfolio Kỹ thuật số (Digital Portfolio)** này là sản phẩm tổng hợp cá nhân thuộc môn học *Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo*. Dự án được thiết kế dưới dạng một website single-page tích hợp menu điều hướng thông minh, sử dụng phong cách giao diện **Dark Mode công nghệ phối màu Neon Gradients** để phản ánh định hướng nghiên cứu chuyên sâu của một kỹ sư Cơ điện tử.

Hệ thống đóng vai trò tích hợp trực quan toàn bộ chuỗi kết quả thực hành từ 6 bài tập thành phần, đồng thời chứng minh năng lực số, tư duy kỹ sư câu lệnh (Prompt Engineering) và tác phong sử dụng AI có trách nhiệm trên không gian số.

---

## 👨‍💻 Thông tin Sinh viên
* **Họ và tên:** Dương Minh Phương
* **Mã số sinh viên:** 25021433
* **Chuyên ngành:** Kỹ thuật Cơ điện tử (Mechatronics)
* **Trường:** Đại học Công nghệ - Đại học Quốc gia Hà Nội (VNU-UET)
* **Lớp học phần:** VNU1001_E252018
* **Dự án đang phát triển song song:** Backend AI VTuber ARIA (FastAPI + Supabase), n8n & Docker Automation workflows, Live2D & Inochi Creator animation.

---

## 🗂️ Cấu trúc Thư mục Dự án (Repository Architecture)
Dự án được thiết lập nghiêm ngặt theo mô hình cây thư mục phân tầng (Hierarchical Structure), tối ưu hóa đường dẫn tương đối để đảm bảo website vận hành mượt mà trên mọi môi trường máy chủ lưu trữ:

```text
📁 personal-portfolio/
│
├── 📄 index.html             # Trang chủ (Giới thiệu bản thân, Định hướng & Mục tiêu Portfolio)
├── 📄 reflection.html        # Báo cáo tổng kết chặng đường dự án, tâm đắc & thách thức
│
├── 📁 projects/              # Thư mục lưu trữ các trang dự án thành phần (Mô-đun 1-6)
│   ├── 📄 bai1.html          # Bài 1: Quản trị cấu trúc dữ liệu cục bộ
│   ├── 📄 bai2.html          # Bài 2: Nghiên cứu & Thẩm định nguồn tin học thuật
│   ├── 📄 bai3.html          # Bài 3: Nghệ thuật kỹ sư câu lệnh (Prompt Engineering)
│   ├── 📄 bai4.html          # Bài 4: Quản trị & Hợp tác trực tuyến nhóm
│   ├── 📄 bai5.html          # Bài 5: Ứng dụng AI tạo sinh trong sáng tạo nội dung số
│   └── 📄 bai6.html          # Bài 6: Kỷ luật số & Liêm chính học thuật
│
├── 📁 assets/                # Kho tài nguyên dùng chung cho hệ thống website
│   ├── 📁 css/
│   │   └── 📄 style.css      # Toàn bộ mã phong cách UI/UX, Neon effects, Dropdown & Responsive layout
│   ├── 📁 js/
│   │   └── 📄 script.js      # Script hệ thống: Scroll Animation Detector
│   ├── 📁 docs/              # Kho lưu trữ các báo cáo chi tiết (Hồ sơ chứng minh dạng PDF gốc)
│   │   ├── 📄 Bai_tap_1.1.pdf
│   │   ├── 📄 Bai_tap_2.2.pdf
│   │   ├── 📄 Bai_tap_3.2.pdf
│   │   ├── 📄 Bai_tap_4.3.pdf
│   │   ├── 📄 Bai_tap_5.2.pdf
│   │   └── 📄 Bai_tap_6.4.pdf
│   └── 📁 images/            # Kho lưu trữ hình ảnh minh chứng thực nghiệm
│       ├── 🖼️ avatar.jpg           # Ảnh chân dung đại diện trang chủ
│       ├── 🖼️ bai1-minhchung.png   # Ảnh chụp cấu trúc File Explorer cây thư mục phân tầng
│       ├── 🖼️ bai3-basic.png        # Ảnh chụp đối chứng chat: Prompt nguyên bản (Thất bại)
│       ├── 🖼️ bai3-advanced.png     # Ảnh chụp đối chứng chat: Prompt nâng cao (Thành công)
│       ├── 🖼️ bai4-trello.png       # Ảnh chụp bảng quản trị Kanban điều phối tiến độ nhóm
│       ├── 🖼️ bai4-docs.png         # Ảnh chụp lịch sử phiên cộng tác thời gian thực trên cloud
│       ├── 🖼️ bai5-dalle.png        # Ảnh nguyên liệu đồ họa sinh bởi DALL-E 3
│       ├── 🖼️ bai5-infographic.png  # Thành phẩm đồ họa truyền thông Đại số tuyến tính trong AI
│       └── 🖼️ bai6-infographic.png  # Cẩm nang Infographic "DOs & DON'Ts" sử dụng AI tại UET
└── 📄 README.md              # Tài liệu hướng dẫn hệ thống kỹ thuật (File này)