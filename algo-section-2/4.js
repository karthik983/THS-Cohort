var readlineSync = require('readline-sync');

do {
const subtrInteger=(num1,num2)=>{
    var num1 = Number(readlineSync.question('Enter the larger Number  : '));
    var num2 = Number(readlineSync.question('Enter the smaller Number  : '));
return console.log(`The difference is : ${num1+~(num2)+1}`);
}
subtrInteger()
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)