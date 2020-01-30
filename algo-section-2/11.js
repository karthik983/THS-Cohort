var readlineSync = require('readline-sync');

do {
const largestAmongThree=(a,b,c)=>{
    if(a>b && b>c){
        return console.log(a) 
    }
    else if(b>c && b>a){
        return console.log(b);
    }
    else if(c>a && c>b){
        return console.log(c);
    }
    else if(b===c && b>a){
        return console.log(b);
    }
    else if(a===c && a>b){
        return console.log(a);
    }
    else{
        return console.log(a);
    }
}
a=Number(readlineSync.question('Enter the first number : '));
b=Number(readlineSync.question('Enter the second number : '));
c=Number(readlineSync.question('Enter the third number : '));
largestAmongThree(a,b,c);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);