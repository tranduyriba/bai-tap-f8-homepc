const products = [
    { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
    { id: "1OT22W009", name: "Boys T-shirt" },
    { id: "1OT22W032", name: "Boys Shirt" },
    { id: "1OT22W011", name: "Men's Super Warm Jacket" },
    { id: "1OT22W000", name: "Women's Party Dress" },
];

function slugify(products) {
    const slugs = []; // Mảng mới để chứa sản phẩm đã được xử lý

    // Duyệt qua từng sản phẩm
    for (let i = 0; i < products.length; i++) {
        const product = products[i]; // Lấy sản phẩm hiện tại
        const id = product.id.toLowerCase(); // Chuyển id về chữ thường
        const name = product.name.toLowerCase() // Chuyển tên về chữ thường
            .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
            .replace(/'/g, ''); // Xóa dấu nháy đơn (nếu có)

        const slug = `${name}-${id}`; // Tạo slug

        // Thêm sản phẩm mới với slug vào mảng slugs
        slugs.push({ ...product, slug }); 
    }

    return slugs; // Trả về mảng sản phẩm đã được xử lý
}

// Gọi hàm và in kết quả
const slugifiedProducts = slugify(products);
console.log(slugifiedProducts);