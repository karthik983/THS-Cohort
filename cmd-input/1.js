var readlineSync = require('readline-sync');
const repitivity=()=>{
const someInput=readlineSync.question("Enter your input: ");
const num=(inp)=>{
    
    if(inp%2===0){
      console.log('even');
      }else{
      console.log('odd');
      }}
   
num(someInput)
    }
    repitivity();
const redo=readlineSync.question("Do you want to continue? If yes press Y or press 1 to exit ");
while(redo==="Y" || redo==="y"){
   repitivity()
   redo=readlineSync.question("Do you want to continue? If yes press Y or press 1 to exit ");
   ;}
// else{
//     console.log("Program terminated");
// }