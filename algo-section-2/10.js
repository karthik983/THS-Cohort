var readlineSync = require('readline-sync');

do {
const vowelOrNot=(word)=>{
    if(word==='a'|| word==='e' || word==='i' || word==='o' || word==='u'){
     return console.log('vowel')
     }
     else{
       return console.log('consonant');
      }                      
      }
word=readlineSync.question('Enter your character  : ');
vowelOrNot(word);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)