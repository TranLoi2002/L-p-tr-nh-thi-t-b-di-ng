//Hàm tính trung bình
var calcAverage = (a,b,c)=>{return (a+b+c)/3};

//Hàm check win
var checkWinner =(avgDolhins,avgKoalas)=>{
    if (avgDolhins >= avgKoalas*2)
    {
        console.log("Dolhins win (",avgDolhins,"vs.",avgKoalas,")");
        
    }
    else if(avgDolhins *2 <= avgKoalas)
        {
            console.log("Koalas win (",avgKoalas,"vs.",avgDolhins,")");
            
        }
        else console.log("No team win");
        
}

//Dữ liệu thử nghiệm data1
var calcAverageDolhins1 = calcAverage(44,23,71);
var calcAverageKoalas1 = calcAverage(65,54,49);

// check win data1 
checkWinner(calcAverageDolhins1,calcAverageKoalas1);

//Dữ liệu thử nghiệm data2
var calcAverageDolhins2 = calcAverage(85,54,41);
var calcAverageKoalas2 = calcAverage(23,34,27);

// check win data2
checkWinner(calcAverageDolhins2,calcAverageKoalas2);