# Travel Manager

Ứng dụng web quản lý du lịch cá nhân bằng tiếng Việt, chạy trên GitHub Pages và lưu dữ liệu lâu dài trong Google Sheets qua Google Apps Script.

## Tính năng MVP

- Dashboard, quản lý chuyến đi, lịch trình, chi phí, công việc và hành lý.
- CRUD thật, xóa mềm, tìm kiếm, tổng hợp chi phí, xuất CSV và giao diện in.
- Responsive từ 360 px, dark mode, PWA cache tài nguyên và cache dữ liệu chỉ đọc khi offline.
- Cấu hình URL API/token ngay trên thiết bị; không có secret trong repository.
- Tác giả: **Huỳnh Cỏ Khô**. Đơn vị báo cáo mặc định VND; chi phí ngoại tệ hỗ trợ tỷ giá tham khảo trực tuyến hoặc nhập tay và tự quy đổi sang VND.
- Backend tạo đủ 12 sheet và hỗ trợ toàn bộ entity để dễ mở rộng các màn hình tiếp theo.

## Kiến trúc

`GitHub Pages SPA → Google Apps Script Web App → Google Spreadsheet`

Frontend gửi GET hoặc POST `text/plain`; Apps Script xác thực token, kiểm tra input, khóa thao tác ghi, xử lý CRUD và trả JSON thống nhất. Google Sheets là nguồn dữ liệu chính; localStorage chỉ giữ cấu hình/cache.

## Cài đặt nhanh

1. Mở [Google Spreadsheet](https://docs.google.com/spreadsheets/d/10hzOrBCSU-2G4ybfps-FTwapQ2esMESh_tRDMNyKZ-4/edit).
2. Chọn **Extensions → Apps Script**, tạo các file tương ứng và sao chép nội dung trong `apps-script/`.
3. Chạy `setupSpreadsheet()` và cấp quyền. Bản cá nhân không yêu cầu token.
4. **Deploy → New deployment → Web app**, Execute as **Me**, chọn quyền truy cập phù hợp và sao chép URL `/exec`.
5. Bật GitHub Pages từ nhánh `main`, thư mục root.
6. Mở ứng dụng → **Cài đặt**, nhập URL `/exec` và token, chọn **Lưu & kiểm tra**.

Không đặt token thật vào `config.js`. Token lưu trong trình duyệt vẫn có thể được người dùng thiết bị xem thấy, nên chỉ là lớp bảo vệ cơ bản cho ứng dụng cá nhân.

## Cấu trúc

- `assets/`: CSS, JavaScript module và hình ảnh.
- `apps-script/`: backend API và thiết lập Spreadsheet.
- `docs/`: kiến trúc, dữ liệu, API, triển khai, bảo mật và hướng dẫn.
- `TESTING.md`: checklist kiểm thử thủ công.

## Cập nhật

Pull phiên bản mới, triển khai lại Apps Script nếu file backend thay đổi, rồi cập nhật GitHub Pages. Khi cache giao diện cũ, đóng/mở lại ứng dụng hoặc xóa dữ liệu site.

## Lỗi thường gặp

- **Chưa cấu hình URL**: nhập URL deployment kết thúc bằng `/exec`.
- **Token sai**: chạy lại `setAccessToken()` và nhập cùng token trên thiết bị.
- **Failed to fetch**: kiểm tra deployment được cấp quyền truy cập và chưa bị thay URL.
- **Sheet không tồn tại**: chạy `setupSpreadsheet()` bằng tài khoản chủ Sheet.

## Ảnh chụp

Thêm ảnh giao diện triển khai vào `docs/screenshots/` khi site đã được cấu hình với dữ liệu thật.

Xem [hướng dẫn triển khai](docs/DEPLOYMENT.md), [API](docs/API.md) và [kiến trúc](docs/ARCHITECTURE.md).
