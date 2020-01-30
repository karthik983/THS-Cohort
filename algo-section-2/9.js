var readlineSync = require('readline-sync');
do {
const swapArray=(arr1,arr2)=>{
    let temp=0;
    temp=arr1;
    arr1=arr2;
    arr2=temp;
    console.log("The first array is :",arr1);
    console.log("The second array is :",arr2);
}
array1Length=readlineSync.question('Enter the length of the array1: ');
var arr1=[];
for(let q=0;q<array1Length;q++){
    
    arr1.push(Number(readlineSync.question('Enter your number: ')));
}
array2Length=readlineSync.question('Enter the length of the array2: ');
var arr2=[];
for(let q=0;q<array2Length;q++){
    
    arr2.push(Number(readlineSync.question('Enter your number: ')));
}
swapArray(arr1,arr2);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)