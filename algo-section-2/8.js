var readlineSync = require('readline-sync');
do {
const sumOfArray=(arr1)=>{

    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
    }
    return console.log(`The sum is : ${sum}`);
}
arrayLength=readlineSync.question('Enter the length of the array: ');
var arr1=[];
for(let q=0;q<arrayLength;q++){
    
    arr1.push(Number(readlineSync.question('Enter your number: ')));
}

sumOfArray(arr1);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)