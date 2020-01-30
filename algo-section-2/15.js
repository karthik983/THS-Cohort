var readlineSync = require('readline-sync');


do{
const pow=(num,power)=>{
    if(power===0)return 1;
    var result=num* pow(num,power-1);
     return result;
    }
let num=Number(readlineSync.question('Enter the number or base : '));
let power=Number(readlineSync.question('Enter the power or exponent  : '));
console.log(pow(num,power));
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);