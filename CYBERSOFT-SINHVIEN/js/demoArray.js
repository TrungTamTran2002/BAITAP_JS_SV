/**
 * Các số tự nhiên từ 1-10
 */

// biến chứa giá trị đơn
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;

// kiểu biến mới => chứa được nhiều giá trị trong 1 biến
//Array, Object
//! từ khóa  tenBien = [value1,value2,value3]
let numArr = [1, 2, 3, 4, 5, 6, 7]; // mảng số
console.log(numArr)

let nameArr = ["Nguyễn Thị Khách Hàng", "Nguyễn Văn A", "Khách hàng 3"]; //mảng string
console.log(nameArr)
//               0     1    2
let foodArr = ['🍱', '🍔', '🥙']
console.log(foodArr)

//*Độ dài mảng => số lượng giá trị (phần tử) được chứa trong mảng
console.log(foodArr.length)

//*index => vị trí phần tử trong mảng => mang[index] lấy từng giá trị của phần tử trong mảng

console.log(foodArr[0]); // phần tử đầu tiên
console.log(foodArr[foodArr.length - 1]);//phần từ cuối mảng (index cuối = length - 1 )

//* dùng for duyệt lấy từng phần tử của mảng
//                     2    <     3         tăng 3 => dừng duyệt
for (let index = 0; index < foodArr.length; index++) {
    // duyệt mảng => lấy từng giá trị của mảng để sử dụng
    console.log(foodArr[index])
}


