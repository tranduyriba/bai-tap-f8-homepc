const orders = [
    { id: "1", name: "A", quantity: 2, price: 100 },
    { id: "2", name: "B", quantity: 1, price: 200 },
    { id: "3", name: "C", quantity: 3, price: 300 },
];

function calculateOrderTotal(orders) {
    let total = 0; // Khởi tạo biến total

    // Duyệt qua từng đơn hàng
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i]; // Lấy từng đơn hàng
        total += order.quantity * order.price; // Cộng dồn giá trị vào total
    }

    return total; // Trả về tổng giá trị
}

// Gọi hàm và in kết quả
const totalValue = calculateOrderTotal(orders);
console.log("Tổng giá trị đơn hàng:", totalValue);