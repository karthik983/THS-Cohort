var readlineSync = require('readline-sync');


do {
const rightShiftIterate=(a,b,callback)=>{
    return callback(Math.floor(a/(2**b)));
}
const rightShiftOperate=(a,b,callback)=>{
    let aBin=callback(a);
    var newABin=[];
    for(let l=0;l<b;l++){
        newABin.push(aBin.slice(0,aBin.length-(l+1)));
    }
    return newABin[newABin.length-1];

}

const comparator=()=>{
    return console.log(rightShiftIterate(a,b,convToBin))===console.log(rightShiftOperate(a,b,convToBin));
}
const convToBin=(value)=>{
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
a=Number(readlineSync.question('Enter the first number  : '));
b=Number(readlineSync.question('Enter the second number  : '));
console.log(comparator());
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);