var readlineSync = require('readline-sync');
do {
const countOddEven=(num)=>{
  let evenArr=[];
  let oddArr=[];
  for(let i=0;i<num;i++){
  if(i%2===0){
  evenArr.push(i);
  }
  else{
  oddArr.push(i);
  }
  }
  console.log(`The even numbers within ${num} are ${evenArr}`); 
  console.log(`The odd numbers within ${num} are ${oddArr}`); 
  }

const  nOddEven=(n)=>{
    let valOdd = [];
    let valEven=[];
    for (i = 0 ; i<n*2; i++){
     if(i%2 != 0){
        valOdd.push(i)
    }else{
        valEven.push(i)
}
}
console.log(`The first ${input} odd numbers are  ${valOdd}`);
console.log(`The first ${input} even numbers are  ${valEven}`);
}

let input=readlineSync.question('Enter the number : ');
countOddEven(input);
nOddEven(input);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}
while(testcases===1);
