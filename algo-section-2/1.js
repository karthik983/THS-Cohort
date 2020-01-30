// // 1
var readlineSync = require('readline-sync');
do {
  const oddOrEven=(inp)=>{
  if (inp % 2 == 0) {
    console.log('It is an even number');
  } else {
    console.log('It is an odd number');
  }
}
  var inp = readlineSync.question('Enter the Number  : ');
  oddOrEven(inp);
  var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}
while(testcases===1);