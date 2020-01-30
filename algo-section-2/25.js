var readlineSync = require('readline-sync');

do{
const number=(value)=>{
    let arr1=[]
    for(let i=value;i>=0;i--){
    if(value/2!==0){
    arr1.push(value%2)
    value-=value%2
    value=value/2
    }
    }
    let output= arr1.reverse().join('');
    return output.padStart(8,"0");
    }

    var value = Number(readlineSync.question('Enter the decimal value : '));
    console.log(`The binary value is: `,number(value));
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);