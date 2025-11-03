// getLowStock: 取得庫存低於 10 的商品名稱陣列<br>
function getLowStock(products) {
  // 用 filter 篩選，僅保留庫存量小於 10 的商品
  // 再用 map 取出每個商品的 name 屬性
  return products
    .filter(item => item.stock < 10) // 過濾庫存小於 10 的商品
    .map(item => item.name);         // 只取商品名稱構成新陣列
}

// 測試資料 products
const products = [
  { name: "keyboard", stock: 25 },
  { name: "mouse", stock: 5 },
  { name: "monitor", stock: 8 },
  { name: "usb cable", stock: 40 }
];

// 執行 getLowStock 並顯示結果
console.log("庫存少於 10 的項目：", getLowStock(products));
// Output: 庫存少於 10 的項目： ['mouse','monitor']


// updateStock: 根據 updates 物件，更新 products 中對應商品的庫存
function updateStock(products, updates) {
  // 用 forEach 逐一走訪 products 內的商品
  products.forEach(item => {
    // 檢查 updates 物件中是否有該商品名稱
    if (updates.hasOwnProperty(item.name)) {
      // 若有，就把該商品的庫存更新為新值
      item.stock = updates[item.name];
    }
  });
}

// 新的庫存值 updates
const updates = { mouse: 15, monitor: 20 };
// 執行更新函式
updateStock(products, updates);

// 顯示更新後所有商品的庫存
products.forEach(item =>
  // 用模板字串顯示 商品名稱 及 庫存
  console.log(`${item.name} 的庫存：${item.stock}`)
);
// Output:
// keyboard 的庫存：25
// mouse 的庫存：15
// monitor 的庫存：20
// usb cable 的庫存：40
