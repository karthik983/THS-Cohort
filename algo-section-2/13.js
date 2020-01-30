var readlineSync = require('readline-sync');

do {
const leapYear=(year)=>{
    if(year%4===0){
     return console.log("Leap year");
      }
     return console.log('Not a leap year');
      }
      year=readlineSync.question('Enter the year : ');
      leapYear(year);
      var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
    }while(testcases===1);