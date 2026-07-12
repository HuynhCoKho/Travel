# Triển khai

1. Mở Google Spreadsheet được chỉ định.
2. Chọn **Extensions → Apps Script**.
3. Tạo từng file `.gs` giống thư mục `apps-script/` và sao chép mã nguồn.
4. Xác nhận `SPREADSHEET_ID` trong `Config.gs`.
5. Chạy `setupSpreadsheet()` và cấp quyền.
6. Chạy `setAccessToken('token-ngẫu-nhiên-dài')`.
7. Tùy chọn chạy `seedDemoData()` đúng một lần.
8. Chọn **Deploy → New deployment → Web app**.
9. Chọn **Execute as: Me**.
10. Chọn quyền truy cập cho phép trình duyệt của bạn gọi Web App.
11. Deploy và sao chép URL kết thúc bằng `/exec`.
12. Mở URL với `?action=health`, kiểm tra JSON `success:true`.
13. Vào ứng dụng → Cài đặt, nhập URL và token.
14. Trên GitHub: Settings → Pages → Deploy from branch → `main` / root.
15. Kiểm tra tạo, sửa, xóa chuyến; sau đó lịch trình/chi phí/công việc/hành lý.

Khi sửa Apps Script, tạo **New version** trong Manage deployments. Khi sửa frontend, push vào nhánh Pages. Sao lưu bằng Google Sheets **File → Make a copy** hoặc tải `.xlsx`.
