# Bảo mật và riêng tư

Không lưu mật khẩu, khóa service account, số thẻ/CVV, ảnh giấy tờ hoặc token thật trong repository/Sheet. Chỉ lưu số giấy tờ đã che. Frontend escape dữ liệu hiển thị; backend whitelist, validate, giới hạn độ dài và chống formula injection.

Token nằm trong localStorage có thể được người có quyền dùng thiết bị xem thấy. Mô hình này phù hợp lớp hạn chế truy cập cơ bản cho ứng dụng cá nhân, không thay thế OAuth hoặc hệ thống xác thực doanh nghiệp. Thay token định kỳ và thu hồi deployment khi không dùng.
