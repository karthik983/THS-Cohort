var readlineSync = require('readline-sync');

do {
const quadEquation=(eqtn)=>{
    let arr2=eqtn.split(" ")
    let a=Number(arr2[0]);
    let b=Number(arr2[1]);
    let c=Number(arr2[arr2.length-1]);
    let D=Math.floor(((b**2)-4*a*c)**0.5);
    let ans1=Math.floor((-b+D)/2)
    let ans2=Math.floor((-b-D)/2);
    console.log(`The roots are : `,ans1,ans2);    
    return ans1,ans2;
}
    let eqtn= readlineSync.question('Enter the quadratic equation in the form a b c : ');
    if(isNaN(quadEquation(eqtn))){
        console.log("The roots are imaginatory.");
    }
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);