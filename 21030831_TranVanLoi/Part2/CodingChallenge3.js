//Tạo các đối tượng 
const Mark ={
    fullname : 'Mark Miller',
    mass : 78,
    height :1.69 ,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
      }

}

const John ={
    fullname : 'John Smith',
    mass : 92,
    height :1.95,
    calcBMI : Mark.calcBMI

}
//dùng hảm tính bmi
Mark.calcBMI();
John.calcBMI();

//kiểm tra xem ai có BMI cao hơn 

if(Mark.bmi>John.bmi) {
    console.log(Mark.fullname,"BMI (",Mark.bmi.toFixed(2),") is higher than ", John.fullname,"BMI (",John.bmi.toFixed(2) ,")!");
}
    else 
        return console.log(John.fullname,"BMI (",John.bmi.toFixed(2),") is higher than ", Mark.fullname,"BMI (",Mark.bmi.toFixed(2) ,")!");


//