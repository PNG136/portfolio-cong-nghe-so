# 🌐 Personal Digital Portfolio - Nhập môn Công nghệ số & Ứng dụng AI

[![Author](https://img.shields.io/badge/Author-Duong%20Minh%20Phuong-blue?style=flat-square)](https://github.com/phuongdm-uet)
[![Major](https://img.shields.io/badge/Field-Mechatronics-orange?style=flat-square)](https://uet.vnu.edu.vn/)
[![Academic%20Year](https://img.shields.io/badge/Academic%20Year-2025--2029-purple?style=flat-square)]()
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

---

## 🗂️ Cấu trúc Thư mục Dự án (Repository Architecture)
Dự án được thiết lập nghiêm ngặt theo mô hình cây thư mục phân tầng (Hierarchical Structure), tối ưu hóa đường dẫn tương đối để đảm bảo website vận hành mượt mà trên mọi môi trường máy chủ lưu trữ:

```text
📁 portfolio-cong-nghe-so/
│
├── 📄 index.html             # Trang chủ (Giới thiệu bản thân, Định hướng & Mục tiêu Portfolio)
├── 📄 reflection.html        # Báo cáo tổng kết chặng đường dự án, tâm đắc & thách thức
│
├── 📁 projects/              # Thư mục lưu trữ các trang dự án thành phần (Mô-đun 1-6)
│   ├── 📄 bai1.html          # Bài 1: Thao tác cơ bản với tệp tin và thư mục 
│   ├── 📄 bai2.html          # Bài 2: Tìm kiếm và đánh giá thông tin học thuật 
│   ├── 📄 bai3.html          # Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập
│   ├── 📄 bai4.html          # Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm
│   ├── 📄 bai5.html          # Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung
│   └── 📄 bai6.html          # Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu
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
└── 📄 README.md              # Tài liệu hướng dẫn hệ thống kỹ thuật 

---

## ⚖️ Ma Trận Đóng Góp & Minh Bạch Công Cụ (Contribution Matrix)

Để đảm bảo tính liêm chính học thuật và làm rõ vai trò chủ đạo của con người trong kỷ nguyên số, dự án này được vận hành theo mô hình **Human-in-the-loop (Con người kiểm soát)**. Dưới đây là chi tiết tỷ lệ đóng góp và phạm vi ứng dụng của từng công cụ:

### 1. Phân Định Trách Nhiệm & Tỷ Lệ Đóng Góp Tổng Thể
* **Chất xám cá nhân (Dương Minh Phương): 65%** * *Vai trò:* Lên ý tưởng cấu trúc, tự thực hiện thực nghiệm, thiết kế khung prompt, trực tiếp kiểm duyệt, sửa lỗi logic/toán học của AI và tự tay tối ưu mã nguồn Front-end (HTML/CSS layout).
* **Hệ thống Công cụ & AI hỗ trợ: 35%**
  * *Vai trò:* Tối ưu hóa tốc độ tìm kiếm, gợi ý từ khóa học thuật, sinh nguyên liệu đồ họa thô và tăng tốc quy trình sửa lỗi cú pháp mã nguồn.

### 2. Ma Trận Ứng Dụng Công Cụ Chi Tiết Theo Tác Vụ

| Mô-đun / Bài tập | Công cụ sử dụng | Phạm vi đóng góp của Công cụ | Phạm vi can thiệp của Con người (Cá nhân) |
| :--- | :--- | :--- | :--- |
| **Bài 1: Thao tác tệp tin** | • Windows File Explorer | • Hệ điều hành thực thi các lệnh tạo, xóa, sửa, di chuyển dữ liệu cục bộ. | • Tự tư duy xây dựng cây thư mục phân tầng logic.<br>• Thiết lập quy tắc đặt tên file tiêu chuẩn không dấu. |
| **Bài 2: Tìm kiếm học thuật** | • Google Scholar<br>• IEEE Xplore<br>• ACS Photonics | • Thuật toán tìm kiếm trả về các bài báo theo toán tử Boolean đầu vào. | • Tự xây dựng chiến lược toán tử (`AND`, `OR`).<br>• Trực tiếp đọc, phân tích chéo và lập bảng thẩm định 10 nguồn tài liệu. |
| **Bài 3: Kỹ thuật Prompt** | • Google Gemini 1.5 Pro | • Mô hình Transformer sinh câu trả lời dựa trên các tầng cấu trúc prompt. | • Nghiên cứu thiết kế thực nghiệm 3 cấp độ prompt.<br>• Phân tích lỗi rập khuôn và đúc kết bộ nguyên tắc **C.L.E.A.R**. |
| **Bài 4: Hợp tác trực tuyến** | • Trello<br>• Discord<br>• Google Workspace | • Lưu trữ đám mây, đồng bộ dữ liệu thời gian thực, bắn bot alert tự động. | • Với vai trò **Trưởng nhóm**, điều phối và chia việc trên Kanban.<br>• Xử lý khủng hoảng ghi đè ngân sách qua *Version History*. |
| **Bài 5: AI sáng tạo nội dung** | • Google Gemini<br>• DALL-E 3<br>• Canva AI | • Gemini sinh dàn ý văn bản thô.<br>• DALL-E 3 sinh hình nền Isometric.<br>• Canva sinh bố cục layout. | • **Đóng vai trò Art Director**: Viết lại toàn bộ câu tiêu đề (Hook).<br>• Sử dụng Canva tự vẽ lại các trục toán học bị lỗi đồ họa do AI sinh ra. |
| **Bài 6: AI có trách nhiệm** | • Google Gemini | • Hỗ trợ tìm kiếm nhanh văn bản quy chế của nhà trường. | • Độc lập đối chiếu chính sách liêm chính của UET.<br>• Phân tích case study lỗi đạo hàm và đúc kết **Khung P.R.I.M.E.S**. |

---

## ⚖️ Tuyên Bố Cam Kết & Quyền Sở Hữu (Disclaimers & Intellectual Property)

### 1. Tuyên bố về Liêm chính Học thuật (Academic Integrity Assertion)
* **Tính nguyên bản:** Sinh viên cam kết toàn bộ dữ liệu thực nghiệm, bảng biểu phân tích học thuật, hệ thống câu lệnh prompt đối chứng, và mã nguồn Front-end của hệ thống Portfolio này đều được thực hiện dựa trên chất xám tự thân và kết quả thực hành nghiêm túc trong suốt học phần. 
* **Giới hạn hỗ trợ của AI:** Sự tham gia của các công cụ AI tạo sinh (Google Gemini, DALL-E 3) đã được khai báo minh bạch 100% tại mục *Ma trận Đóng góp*. Sinh viên tuyệt đối không thực hiện hành vi sao chép nguyên mẫu (raw copy-paste) hoặc ngụy tạo kết quả của máy móc để biến thành sản phẩm cá nhân.

### 2. Tuyên bố Bảo mật & An toàn Thông tin (Data Privacy Policy)
* Hệ thống mã nguồn và các file đính kèm tuân thủ nghiêm ngặt nguyên tắc **(M) Mindful Privacy** trong khung đạo đức P.R.I.M.E.S. 
* Toàn bộ tài nguyên được lưu trữ công khai trên Repository này tuyệt đối không chứa dữ liệu nhạy cảm cá nhân, thông tin nội bộ chưa công bố của Trường Đại học Công nghệ (UET) hoặc mã nguồn thuật toán lõi thuộc các phòng nghiên cứu chuyên sâu (Lab).

### 3. Bản quyền Thiết kế & Giấy phép Sử dụng (Copyright & Licensing)
* **Bản quyền Nội dung:** Bản quyền thuộc về sinh viên **Dương Minh Phương** (Chuyên ngành Kỹ thuật Cơ điện tử, Trường Đại học Công nghệ, ĐHQGHN, 2026).
* **Giấy phép Mã nguồn:** Các tệp tin cấu trúc giao diện (`index.html`, `style.css`, `script.js`) được phát hành dưới cấu trúc mã nguồn mở nhằm mục đích chia sẻ tri thức học thuật. Mọi hành vi sao chép, tái sử dụng giao diện hoặc nội dung báo cáo phân tích từ Portfolio này cho các kỳ đánh giá học phần tiếp theo mà không được sự chấp thuận của tác giả hoặc không trích dẫn nguồn rõ ràng đều bị coi là vi phạm nghiêm trọng quy chế Liêm chính học thuật.

***

Copyright © 2026 Dương Minh Phương
⚡ Powered by Google Gemini Pro
