var readlineSync = require('readline-sync');

do {
const checkAlphabetOrNot=(char)=>{
let containsLetter=/[a-z]/.test(char)
if(containsLetter===true){
    return `It's an alphabet`;
}else{
    return `It's not an alphabet`;
}
}
char=readlineSync.question('Enter the character: ');
console.log(checkAlphabetOrNot(char));
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)