
const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.
function inRaTungPhanTu(phanTu) {
    console.log(phanTu);
}
numbers.forEach(inRaTungPhanTu);

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let sum = 0;
numbers.forEach(
    (element) => { sum += element }
);
console.log(`Tổng: ${sum}`);

// Giá trị nhỏ nhất, lớn nhất
let max = numbers[0];
let min = numbers[0];

function timGiaTri(soCanTim) {
    if (soCanTim >= max) { max = soCanTim; }
    if (soCanTim <= min) { min = soCanTim; }
}

numbers.forEach(timGiaTri)
console.log(`Giá trị lớn nhất là: ${max}`, `Giá trị nhỏ nhất là: ${min}`)



// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
function moiPhanTuNhan2(num) { return num * 2 }
const mangMoi = numbers.map(moiPhanTuNhan2)
console.log(mangMoi)

