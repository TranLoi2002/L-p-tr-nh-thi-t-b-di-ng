// hàm tính tiền boa
var calcTip = (hoadon)=>{
    return hoadon >=50 && hoadon <=300 ? hoadon*0.15 : hoadon*0.2;
}

// mảng bills chứa dữ liệu hoá đơn
var bills = [125,555,44];

// Mảng tips chứa tiền tip được tính từ arr bills
var tips = bills.map(bill => calcTip(bill));

// Mảng totals chứa tổng tiền hoá đơn và tiền tip 
var totals = bills.map((bill,i)=>(bill+tips[i]));

console.log("Bills : ",bills);
console.log("Tips : ",tips);
console.log("Totals : ",totals);
