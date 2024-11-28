const listScore  = [];
const tblBody = document.getElementById('tblBody');



/**
 * Tạo hàm để lấy danh sách dtb từ UI
 * dom class: td-scores
 * duyệt mảng và push vào listScore
 * ép dữ liệu string sang number
 */

const getScore = () => {
    const tdscore = document.getElementsByClassName('td-scores');
    console.log(tdscore);
    for (let i = 0; i < tdscore.length; i++) {
        listScore.push(tdscore[i].innerHTML*1);
    }
    // // CACH 2
    // for (let i = 0; i < tdscore.length; i++) {
    //     const score = tdscore[i].innerHTML*1;
    //     listScore.push(score);
    // }
    console.log(listScore);
}

getScore();

/**
 * SV Có điểm cao nhất
 *  khai báo biến index = 0 : index = 0 là phần tử đầu tiên : Tên mảng[]
 * khai báo biến max = listScore[0]
 * duyệt mảng listScore từ i = 1 vì max đã lấy phần tử đầu tiên rồi
 * nếu listScore[i] > max thì gán max = listScore[i] và index = i
 * 
 */

document.getElementById('btnSVCaoDiemNhat').onclick = () => {
    let index = 0; // index = 0 là phần tử đầu tiên : Tên mảng[]
    let max = listScore[0];
    for (let i = 1; i < listScore.length; i++) {
        if (listScore[i] > max) {
            max = listScore[i];
            index = i;
        }
    }
    // row là tr còn cells là td
    const nameStudent = tblBody.rows[index].cells[2].innerHTML;
    document.getElementById('svGioiNhat').innerHTML = `Sinh viên có điểm cao nhất là: ${nameStudent} với số điểm ${max}`;
}

document.getElementById('btnSVThapDiemNhat').onclick = () => {
    let index = 0;
    let min = listScore[0];
    for (let i = 1; i < listScore.length; i++) {
        if (listScore[i] < min) {
            min = listScore[i];
            index = i;
        }
    }
    const nameStudent = tblBody.rows[index].cells[2].innerHTML;
    document.getElementById('svYeuNhat').innerHTML = `Sinh viên có điểm thấp nhất là: ${nameStudent} với số điểm ${min}`;
}

document.getElementById('btnSoSVGioi').onclick = () => {
    let count = 0;
    let content = '';
    for (let i = 0; i < listScore.length; i++) {
        const score = listScore[i];
        if (listScore[i] >= 8) {
            count++;
            const nameStudent = tblBody.rows[i].cells[2].innerHTML;
            content += `${nameStudent} - ${score} <br>`;
        }
    }
    document.getElementById('soSVGioi').innerHTML = `<br> ${content}Tổng là: ${count}`;
}

// in ra danh sách sinh viên điểm tb lớn hơn 5
document.getElementById('btnSVDiemHon5').onclick = () => {
    let content = '';
    for (let i = 0; i < listScore.length; i++) {
        const score = listScore[i];
        if (listScore[i] > 5) {
            const nameStudent = tblBody.rows[i].cells[2].innerHTML;
            content += `${nameStudent} - ${score} <br>`;
        }
    }
    document.getElementById('dsDiemHon5').innerHTML = content;
};

/** 
    * Sắp xếp tăng dần
    * 
*/

document.getElementById('btnSapXepTang').onclick = () => {
    for (let i = 0; i < listScore.length -1; i++) {
        for (let j = i + 1; j < listScore.length; j++) {
            if (listScore[i] > listScore[j]) {
                const temp = listScore[i];
                listScore[i] = listScore[j];
                listScore[j] = temp;
            }
        }
    }
    console.log(listScore);
    document.getElementById('dtbTang').innerHTML = listScore;
}