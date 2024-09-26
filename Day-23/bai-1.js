const products = [
    { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
    { id: "1OT22W009", name: "Boys T-shirt" },
    { id: "1OT22W032", name: "Boys Shirt" },
    { id: "1OT22W011", name: "Men's Super Warm Jacket" },
    { id: "1OT22W000", name: "Women's Party Dress" },
];

// Nhập chuỗi từ prompt
const input = prompt("Nhập từ khóa muốn tìm kiếm:");

// Chuyển đổi chuỗi nhập vào thành chữ thường
const searchTerm = input.toLowerCase();

// Lọc và in ra các sản phẩm có tên chứa chuỗi tìm kiếm
const matchedProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm)
);

// In ra các sản phẩm phù hợp
matchedProducts.forEach(product => {
    console.log(product);
});