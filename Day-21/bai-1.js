function createCustomers(customers) {
    // Tạo một bản sao của mảng để không làm thay đổi mảng gốc
    const sortedCustomers = [...customers];

    // Sử dụng thuật toán bubble sort để sắp xếp theo tuổi
    for (let i = 0; i < sortedCustomers.length - 1; i++) {
        for (let j = 0; j < sortedCustomers.length - i - 1; j++) {
            // So sánh tuổi của phần tử hiện tại với phần tử tiếp theo
            if (sortedCustomers[j].age > sortedCustomers[j + 1].age) {
                // Hoán đổi vị trí nếu tuổi của phần tử trước lớn hơn phần tử sau
                const temp = sortedCustomers[j]; // Lưu phần tử hiện tại
                sortedCustomers[j] = sortedCustomers[j + 1]; // Đặt phần tử sau vào vị trí hiện tại
                sortedCustomers[j + 1] = temp; // Đặt phần tử hiện tại vào vị trí sau
            }
        }
    }

    return sortedCustomers; // Trả về mảng đã sắp xếp
}

// Dữ liệu đầu vào
const customers = [
    { name: "Nguyễn Văn A", age: 30, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 4, address: "Quang Ninh" },
    { name: "Nguyễn Văn D", age: 12, address: "TP.HCM" },
    { name: "Nguyễn Văn E", age: 6, address: "Bac Giang" },
];

// Gọi hàm và in kết quả
const result = createCustomers(customers);
console.log(result);