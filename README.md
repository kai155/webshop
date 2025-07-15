# Webshop Online với GitHub Pages

## Cách sử dụng

1. **Cập nhật sản phẩm**
   - Sửa file `products.json` và thêm ảnh vào `static/images/`.
   - Chạy lệnh:
     ```
     git add .
     git commit -m "Cập nhật sản phẩm"
     git push
     ```
   - Web sẽ tự động cập nhật sau vài phút.

2. **Cấu trúc thư mục**
```
/webshop
  |-- index.html
  |-- main.js
  |-- products.json
  |-- static/
      |-- images/ (ảnh sản phẩm)
      |-- style.css
```

3. **Bật GitHub Pages**
   - Vào repo trên GitHub → Settings → Pages
   - Source: chọn branch `main`, folder `/ (root)`
   - Truy cập web tại: https://kai155.github.io/webshop/

4. **Chức năng web**
   - Hiển thị danh sách sản phẩm, ảnh, thông số.
   - Click vào sản phẩm để nhập/chỉnh sửa kích thước (editable_params) ngay trên web (chỉ thay đổi trên giao diện, không lưu file).

5. **Ghi chú**
- Mọi dữ liệu đều tĩnh, không cần backend.
- Có thể đồng bộ file từ máy nội bộ lên repo bằng GitHub Desktop hoặc lệnh git.
- Nếu muốn lưu lại chỉnh sửa kích thước lên server, cần thêm backend hoặc API.
- Nếu cần thêm tính năng, giao diện, hãy yêu cầu!
