var readlineSync = require('readline-sync');

do {
    const multiplyMat=(a,b)=>{
        let c=[];
        for(let i=0;i<a.length;i++){
        c[i]=[];
        for(let j=0;j<a[0].length;j++){
        c[i][j]=0;
        for(let k=0;k<b[0].length;k++){
        c[i][j]+=(a[i][k]*b[k][j]);
        }
        }
        }
        return c
        }
        let matrixTypeA=Number(readlineSync.question('Enter the n*n of matrixA: '));
        let matrixTypeB=Number(readlineSync.question('Enter the n*n of matrixB: '));
if(matrixTypeA===matrixTypeB){
    var a=[];
    for(let q=0;q<matrixTypeA;q++){
        a[q]=[]
    for(let m=0;m<matrixTypeB;m++){
    
    a[q][m]=Number(readlineSync.question('Enter your number for matrixA: '));
}}
var b=[];
for(let r=0;r<matrixTypeA;r++){
    b[r]=[]
for(let t=0;t<matrixTypeB;t++){
b[r][t]=Number(readlineSync.question('Enter your number for matrixB: '));
}}
console.log(multiplyMat(a,b));
}
if(matrixTypeA!==matrixTypeB){
    console.log("You can't multiply them!")
}
var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);