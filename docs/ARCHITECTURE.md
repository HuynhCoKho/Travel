# Kiến trúc

```text
Trình duyệt / PWA (GitHub Pages)
        │ GET hoặc POST text/plain
        ▼
Google Apps Script Web App
  xác thực → validate → service → database → log
        │ SpreadsheetApp + LockService
        ▼
Google Spreadsheet (12 tabs)
```

Luồng đọc lấy toàn bộ vùng dữ liệu theo mảng, ánh xạ header thành object, loại bản ghi `IsDeleted=TRUE`, rồi lọc theo `TripID`. Luồng ghi kiểm tra action/entity/token, validate, dùng script lock và ghi nguyên hàng. Lỗi được chuẩn hóa, không trả stack trace. URL/token do người dùng nhập được lưu trên thiết bị; dữ liệu API thành công gần nhất được cache chỉ để đọc offline.

Giới hạn: Apps Script có quota và độ trễ cold-start; Google Sheets không phải cơ sở dữ liệu giao dịch; token phía frontend không phải xác thực mạnh; không có đồng bộ ghi offline; Web App cần quyền truy cập phù hợp mới gọi được từ GitHub Pages.
