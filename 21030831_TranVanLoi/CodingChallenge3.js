//Hàm tính điểm trung bình 
function diemTB(a){
    return (a[0]+a[1]+a[2])/3;
}
function soSanh(Dolphins,Koalas){
    if ((diemTB(Dolphins) > diemTB(Koalas))&&(diemTB(Dolphins)>=100)) 
        console.log("Đội Dolphins chiến thắng ") 
    else 
        if ((diemTB(Dolphins) < diemTB(Koalas))&&(diemTB(Koalas)>=100) )
            console.log("Đội Koalas chiến thắng ")
        else 
            if ((diemTB(Dolphins) == diemTB(Koalas))&&(diemTB(Koalas)>=100)&&(diemTB(Dolphins)>=100))
                console.log("2 đội hoà nhau")
             else 
                console.log("Không có đội nào chiến thắng ");
}
let Dolphins= [96,108,89];
let Koalas = [88,91,110];

soSanh(Dolphins,Koalas);
                
let Dolphins1= [97,112,101];
let Koalas1 = [109,95,123];
soSanh(Dolphins1,Koalas1);

let Dolphins2= [97,112,101];
let Koalas2 = [109,95,106];
soSanh(Dolphins2,Koalas2);
        
    
