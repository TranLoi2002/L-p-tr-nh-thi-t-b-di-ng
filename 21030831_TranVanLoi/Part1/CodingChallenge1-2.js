
// function tính BMI 
function BMI (mass,height){
    return mass/(height*height);
}

// hàm so sanh BMI mark có cao hơn BMI Jonh hay không 
function soSanh(BMIMark,BMIJonh){
    let markHigherBMI = BMIMark>BMIJonh
    if (markHigherBMI==true)
        console.log("Mark có BMI cao hơn John")
    else 
        console.log("Mark có BMI không cao hơn John");
        
        
}

let massMark1= 78;
let heightMark1 = 1.69;
let massJonh1 = 92;
let heightJonh1 = 1.95;

console.log("BMI mark : ",BMI(massMark1,heightMark1));
console.log("BMI mark : ",BMI(massJonh1,heightJonh1));
soSanh(BMI(massMark1,heightMark1),BMI(massJonh1,heightJonh1));

let massMark2= 95;
let heightMark2 = 1.88;
let massJonh2 = 85;
let heightJonh2 = 1.76;

console.log("BMI mark : ",BMI(massMark2,heightMark2));
console.log("BMI mark : ",BMI(massJonh2,heightJonh2));
soSanh(BMI(massMark2,heightMark2),BMI(massJonh2,heightJonh2));

