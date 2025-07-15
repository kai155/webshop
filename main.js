// main.js - Hiển thị danh sách sản phẩm từ products.json
let productsData = [];
let selectedIndex = -1;

function renderList() {
  const list = document.getElementById('product-list');
  if (!Array.isArray(productsData)) {
    list.innerHTML = '<p>Lỗi dữ liệu sản phẩm!</p>';
    return;
  }
  list.innerHTML = productsData.filter(p => !p.hidden).map((p, idx) => `
    <div class="product" onclick="selectProduct(${idx})" style="cursor:pointer;${selectedIndex===idx?'border:2px solid #0078d7;':''}">
      <h2>${p.name}</h2>
      <img src="${p.image}" alt="${p.name}" style="max-width:200px;max-height:200px;object-fit:contain;">
      <pre>${JSON.stringify(p.fixed_params, null, 2)}</pre>
    </div>
  `).join('');
}

function renderEditor(idx) {
  const editor = document.getElementById('editor');
  if (idx < 0 || !productsData[idx]) {
    editor.innerHTML = '';
    return;
  }
  const p = productsData[idx];
  const params = p.editable_params || {};
  editor.innerHTML = `<h3>Chỉnh kích thước: ${p.name}</h3>
    <form id="editForm">
      ${Object.keys(params).map(key => `
        <label>${key}: <input name="${key}" value="${params[key]}" /></label><br>
      `).join('')}
      <button type="submit">Lưu</button>
    </form>`;
  document.getElementById('editForm').onsubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    Object.keys(params).forEach(key => {
      params[key] = form[key].value;
    });
    renderEditor(idx);
    alert('Đã cập nhật kích thước (chỉ trên giao diện, không lưu file)');
  };
}

window.selectProduct = function(idx) {
  selectedIndex = idx;
  renderList();
  renderEditor(idx);
};

fetch('products.json')
  .then(res => res.json())
  .then(products => {
    productsData = products;
    renderList();
  })
  .catch(err => {
    document.getElementById('product-list').innerHTML = '<p>Lỗi tải sản phẩm!</p>';
  });
