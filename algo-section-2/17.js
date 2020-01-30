var readlineSync = require('readline-sync');

do {
const classifyTriangles=(a,b,c)=>{
if(a===b && b===c){
    return "Equilateral triangle";
}
else if(a===b || b===c || a===c){
    return "Isoceles triangle";
}
else if(a!==b && b!==c && c!=a){
    return "Scalene Triangle";
}
}
a=readlineSync.question('Enter the side of triangle  : ');
b=readlineSync.question('Enter the side of triangle  : ');
c=readlineSync.question('Enter the side of triangle  : ');
console.log(classifyTriangles(a,b,c));
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);