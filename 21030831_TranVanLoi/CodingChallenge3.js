let Dolphins= [96,108,89];
let Koalas = [88,91,110];
//Hàm tính điểm trung bình 
function diemTB(a){
    return (a[0]+a[1]+a[2])/3;
}
//data1
if (diemTB(Dolphins) > diemTB(Koalas)) 
    console.log("Đội Dolphins chiến thắng ") 
else 
    if (diemTB(Dolphins) < diemTB(Koalas) )
        console.log("Đội Koalas chiến thắng ")
    else 
        console.log("2 đội hoà nhau");
//bonus
if ((diemTB(Dolphins) > diemTB(Koalas))&&(diemTB(Dolphins)>=100)) 
    console.log("Đội Dolphins chiến thắng ") 
else 
    if ((diemTB(Dolphins) < diemTB(Koalas))&&(diemTB(Koalas)>=100) )
        console.log("Đội Koalas chiến thắng ")
    else 
        console.log("2 đội hoà nhau");       
        

    
