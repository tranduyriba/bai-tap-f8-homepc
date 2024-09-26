const datas = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 0 },
    { name: "Carol", age: -1 },
    { name: "David", age: null },
    { name: "Eve", age: NaN },
    { name: "Frank", age: undefined },
    { name: "", age: 20 },
];

// Tạo 2 mảng để chứa dữ liệu hợp lệ và không hợp lệ
const validData = [];
const invalidData = [];

// Duyệt qua mảng dữ liệu
datas.forEach(user => {
    const { name, age } = user;

    // Kiểm tra điều kiện hợp lệ
    const isNameValid = Boolean(name); // Tên không được falsy
    const isAgeValid = typeof age === 'number' && !isNaN(age) && age >= 0; // Tuổi phải là số, không NaN, không âm

    if (isNameValid && isAgeValid) {
        validData.push(user); // Nếu hợp lệ, thêm vào validData
    } else {
        invalidData.push(user); // Nếu không hợp lệ, thêm vào invalidData
    }
});

// In ra kết quả
console.log("Valid Data:", validData);
console.log("Invalid Data:", invalidData);
