// mảng bills 
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]

// mảng tips và total

var tips =[];
var totals=[];
// Hàm tính tiền tip
var calcTip = (hoadon)=>{
    return hoadon >=50 && hoadon <=300 ? hoadon*0.15 : hoadon*0.2;
}

for (var i =0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}

console.log(tips);
console.log(totals);

