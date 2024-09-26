const numbers = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    const reversed = []; // Khởi tạo mảng mới để lưu kết quả

    // Duyệt qua mảng từ cuối đến đầu
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Thêm phần tử vào mảng reversed
    }

    return reversed; // Trả về mảng đã đảo ngược
}

// Gọi hàm và in kết quả
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); 