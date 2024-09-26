const users = []; // Mảng để lưu thông tin người dùng

function handleRegister(name, password, email) {
    // Bước 1: Kiểm tra thông tin
    if (!name || !password || !email) {
        console.error("Thông tin không đầy đủ. Vui lòng kiểm tra lại.");
        return; // Dừng chương trình nếu thông tin không đầy đủ
    }

    // Kiểm tra nếu email đã tồn tại trong danh sách người dùng
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        console.error("Email đã tồn tại. Vui lòng sử dụng email khác.");
        return; // Dừng chương trình nếu email đã tồn tại
    }

    // Bước 2: Thêm người dùng vào mảng
    users.push({ name, password, email, role: "user" });
    return users; // Trả về mảng người dùng
}

function handleLogin(email, password) {
    // Duyệt qua mảng người dùng để kiểm tra thông tin đăng nhập
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return users[i]; // Trả về thông tin người dùng nếu đăng nhập thành công
        }
    }

    // Nếu không tìm thấy người dùng hợp lệ
    return "Thông tin đăng nhập không hợp lệ.";
}

// Kiểm tra các hàm
console.log(handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com"));
console.log(handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com"));

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);