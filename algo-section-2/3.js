var readlineSync = require('readline-sync');
do {
    var num = readlineSync.question('Enter the Number  : ');
    
    const primeOrNot=(num)=>{
    if(num!==1){
        for(let i=2;i<num;i++){
            if(num%i===0){
                return console.log("It's not a prime number");
            }
        }
    return console.log("It's a prime number");
    }
    else{
    return console.log("It's not a prime number");}
}
primeOrNot(num);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)

