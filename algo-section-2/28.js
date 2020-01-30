var readlineSync = require('readline-sync');

do {
function binLog(n){
    var count=0;
    for(var i=1;;i++){
        if(n<=1) break;
        n=Math.floor(n/2);
        count++
    }
    return count
    }
    n=readlineSync.question('Enter your number : ');
    console.log("The binary logarithm is : ",binLog(n));
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);