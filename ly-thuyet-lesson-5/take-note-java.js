/*
- Hàm ẩn danh (hàm không có tên)
- Sử dụng một lần duy nhất, k dc gọi lại
- cú pháp: function (para){}
*/
function sum(a, b) { return a + b }



/*
- Hàm Lambda (Arrow function)
- Sử dụng một lần duy nhất, k dc gọi lại
- cú pháp: (para) => {}
*/
let sum = (a, b) => { return a + b }
const total = sum(5, 6);
console.log(total)

//Hàm có 1 tham số
let dup = x => { return x * 2; }

// Hàm chỉ có 1 biểu thức
let dup2 = x => x * 2;

// Hàm không có tham số
() => { console.log("") }

//--------------------------

