var readlineSync = require('readline-sync');

do {

    const modulo=(a,b)=>{
        var a = Number(readlineSync.question('Enter the first Number  : '));
        var b = Number(readlineSync.question('Enter the second Number  : '));
    return console.log(`The remainder is : ${a-(Math.floor(a/b)*b)}`);
    }
modulo();
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)