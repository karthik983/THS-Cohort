var readlineSync = require('readline-sync');

do {

    const findAreaCircumf=(radius)=>{
            console.log("Area :",(Math.PI*(radius**2)).toFixed(2));
            console.log("Circumference: ",(2*Math.PI*radius).toFixed(2));
        }
radius=readlineSync.question('Enter the radius : ');
findAreaCircumf(radius);
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);