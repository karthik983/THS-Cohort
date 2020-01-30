var readlineSync = require('readline-sync');


do {
    const num=()=>{
    for(let i=1;i<=100;i++){
      if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
       }
       else if(i%3===0){
        console.log( "Fizz");
       }
       else if(i%5===0){
        console.log( "Buzz");
        }
        else{
        console.log(i)
          }
         }
         }
        num();
        var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)