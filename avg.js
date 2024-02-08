// ต้องการคำนวณหาราคาเฉลี่ยของสินค้าทั้งหมด
// เขียน program วิธีการคำนวณหาค่าเฉลี่ยสินค้า (ภาษาอะไรก็ได้ หรือเขียนเป็น  Pseudo Code) พร้อมอธิบายวิธีการคิด และคำตอบค่าเฉลี่ยของแต่ล่ะสินค้า
// ถ้าตอบใน google form ไม่พอสามารถตอบเพิ่มเติมใน email มาได้ค่ะ

// โจทย์____________________________________________________________________
var aStockValue = [
    { product: 'item 1', quantity: 11, amount: 50.25 },
    { product: 'item 2', quantity: 21, amount: 135.57 },
    { product: 'item 3', quantity: 17, amount: 251.35 },
    { product: 'item 4', quantity: 19, amount: 150.95 },
    { product: 'item 1', quantity: 9, amount: 80.21 },
    { product: 'item 2', quantity: 8, amount: 35.25 }
];

var aAvgPrice = [];

// คำตอบ____________________________________________________________________
// Calculate average price for each product
aStockValue.forEach(function(item) {
    var existingProduct = aAvgPrice.find(function(product) {
      return product.product === item.product;
    });
  
    if (existingProduct) {
      existingProduct.totalAmount += item.amount;
      existingProduct.totalQuantity += item.quantity;
    } else {
      aAvgPrice.push({
        product: item.product,
        totalAmount: item.amount,
        totalQuantity: item.quantity
      });
    }
  });
  
  // Calculate average price and update the array
  aAvgPrice.forEach(function(product) {
    product.avgPrice = product.totalAmount / product.totalQuantity;
  });
  
  console.log(aAvgPrice);