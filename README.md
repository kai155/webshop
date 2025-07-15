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
      |-- images/
      |-- style.css
```

3. **Bật GitHub Pages**
   - Vào repo trên GitHub → Settings → Pages
   - Source: chọn branch `main`, folder `/ (root)`
   - Truy cập web tại: https://kai155.github.io/webshop/

4. **Web fetch dữ liệu**
   - Trong JS: `fetch('products.json')` và `fetch('static/images/ten_anh.png')`

## Ghi chú
- Mọi dữ liệu đều tĩnh, không cần backend.
- Có thể đồng bộ file từ máy nội bộ lên repo bằng GitHub Desktop hoặc lệnh git.
- Nếu cần thêm file HTML/JS mẫu, hãy yêu cầu!
