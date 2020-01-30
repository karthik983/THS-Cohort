var readlineSync = require('readline-sync');

do {

const num=(inp)=>{
    if(inp>0){
     return console.log("positive");
     }
   else if(inp===0){
     return console.log("neither positive nor negative");
     }
   else{
       return console.log("negative");
       }
     }
inp=Number(readlineSync.question('Enter the number: '));
num(inp);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);