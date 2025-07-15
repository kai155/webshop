// main.js - Hiển thị danh sách sản phẩm từ products.json
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    if (!Array.isArray(products)) {
      list.innerHTML = '<p>Lỗi dữ liệu sản phẩm!</p>';
      return;
    }
    list.innerHTML = products.filter(p => !p.hidden).map(p => `
      <div class="product">
        <h2>${p.name}</h2>
        <img src="${p.image}" alt="${p.name}" style="max-width:200px;max-height:200px;object-fit:contain;">
        <pre>${JSON.stringify(p.fixed_params, null, 2)}</pre>
      </div>
    `).join('');
  })
  .catch(err => {
    document.getElementById('product-list').innerHTML = '<p>Lỗi tải sản phẩm!</p>';
  });
