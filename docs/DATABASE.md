# Cơ sở dữ liệu

`Setup.gs` là nguồn chuẩn của schema và tạo các tab: Settings, Trips, Itinerary, Places, Transport, Accommodation, Expenses, Tasks, Packing, Travelers, Journal, ActivityLog. Hàng 1 là header; tên và thứ tự cột đúng theo đặc tả dự án.

Mọi bảng nghiệp vụ dùng ID UUID có tiền tố và liên hệ tới Trips qua `TripID`. Ngày/giờ trao đổi dạng ISO-8601; tiền là Number, tiền quy đổi dùng `ConvertedAmount`. `IsDeleted=TRUE` là xóa mềm và mặc định không được trả về. Trường bắt buộc tối thiểu được khai báo trong `REQUIRED`; chuỗi tối đa 5.000 ký tự và chuỗi có dấu formula đầu dòng được thêm dấu nháy an toàn.
