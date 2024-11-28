/**
 * DOM nâng cao
 *  + tag name
 *  + class name
 *  + selector
 * 
 */

let btnELESV = document.getElementById("btnSVCaoDiemNhat");
console.log(btnELESV)

let thELE = document.getElementsByTagName("th");
console.log(thELE)

let btnSuccess = document.getElementsByClassName("btn-success");
console.log(btnSuccess)

// .classCha .classCon
// .nav  li
let liELE = document.querySelector(".nav li");
let btnID = document.querySelector("#btnSVCaoDiemNhat");
console.log(liELE)
console.log(btnID)
let liELE2 = document.querySelectorAll("#side-menu>li");
console.log(liELE2)


// Đổi màu chữ
btnID.style.color = "red";
btnID.style.backgroundColor = "red";

// liELE2.style.backgroundColor = "red"; => không cho chỉnh cùng lúc 1 danh sách 
//Lấy từng thẻ ra => chỉnh từng thẻ

//Lấy thẻ đầu tiên 
console.log(liELE2[0])
console.log(liELE2[1])
// index: vị trí (0 -> 8)
                        // 9 (số lượng thẻ)
for (let index = 0; index < liELE2.length; index++) {
    // Duyệt danh sách thẻ => for
    // console.log(liELE2[vị trí])
    console.log(liELE2[index])
    liELE2[index].style.backgroundColor = "red";
    
}


