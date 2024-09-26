const employees = [
    { id: 1, name: "Hoang", homeTown: "Hanoi" },
    { id: 2, name: "An", homeTown: "Thaibinh" },
    { id: 3, name: "Huy", homeTown: "Langson" },
    { id: 4, name: "Dinh", homeTown: "Saigon" },
    { id: 5, name: "Dong", homeTown: "Saigon" },
    { id: 6, name: "Nhinh", homeTown: "Langson" },
];

function groupByHomeTown(employees) {
    const result = {}; // Khởi tạo object để lưu kết quả

    // Duyệt qua từng nhân viên
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i]; // Lấy từng nhân viên
        const homeTown = employee.homeTown; // Lấy quê quán của nhân viên

        // Nếu quê quán chưa tồn tại trong kết quả, khởi tạo mảng mới
        if (!result[homeTown]) {
            result[homeTown] = [];
        }

        // Thêm nhân viên vào mảng theo quê quán
        result[homeTown].push(employee);
    }

    return result; // Trả về object kết quả
}

// Gọi hàm và in kết quả
const groupedEmployees = groupByHomeTown(employees);
console.log(groupedEmployees);