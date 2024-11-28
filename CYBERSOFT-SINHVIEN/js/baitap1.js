/**
 * Add số (phần tử) vào mảng
 */

let numArr = []; //mảng rỗng

function addNumber() {
    //lấy số
    let num = Number(document.querySelector("#inputNumber").value);
    console.log(num);

    //Add số vào mảng
    numArr.push(num); //thêm phần tử vào mảng

    console.log(numArr);

    //gọi hàm
    tongChan();
    demSoAm();
    tinhTongAm();
}

document.querySelector("#btnNumber").onclick = addNumber;

//tổng số chẵn
function tongChan() {
    let total =0;

    //duyệt mảng số  => lấy từng phần tử số để kiểm tra
    for (let index = 0; index < numArr.length; index++) {
        console.log("duyệt mảng: ", numArr[index])
        if (numArr[index] % 2 == 0){
            //chẵn
            total += numArr[index]
        }
        
    }

    console.log("tổng chẵn: " , total);

}

//đếm số âm

function demSoAm() {
    let count = 0;

    //duyệt mảng số  => lấy từng phần tử số để kiểm tra
    for (let index = 0; index < numArr.length; index++) {
       
        if(numArr[index] < 0 ){
            //số âm
            // count = count + 1 
            // count +=1
            count++;
        }
    }

    console.log("Đếm số âm: ", count)


}

function tinhTongAm() {
    let total = 0;

    //duyệt mảng số  => lấy từng phần tử số để kiểm tra
    for (let index = 0; index < numArr.length; index++) {
        console.log("duyệt mảng: ", numArr[index])
        if (numArr[index] < 0) {
            //chẵn
            total += numArr[index]
        }

    }

    console.log("tổng số âm: ", total);
}