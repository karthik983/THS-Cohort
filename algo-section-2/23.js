var readlineSync = require('readline-sync');

do{
    function transpMatrix(a){
        if(a.length===a[0].length){
        var b=[]
        for(var i=0;i<a.length;i++){
        b[i]=[];
            for(var j=0;j<a[0].length;j++){
                b[i][j]=a[j][i]
            }
        }
        console.log(`The transpose is : `,b);
        }
        if(a.length!==a[0].length){
           var c=[]
        for(var k=0;k<a[0].length;k++){
        c[k]=[];
            for(var l=0;l<a.length;l++){
                c[k][l]=a[l][k]
            }
        }
        console.log(`The transpose is : ` ,c);
        }
    }
    let matrixTypeA=Number(readlineSync.question('Enter the n*n of matrixA : '));
    let matrixTypeB=Number(readlineSync.question('Enter the n*n of matrixA : '));
    if(matrixTypeA===matrixTypeB){
    var a=[];
    for(let q=0;q<matrixTypeA;q++){
        a[q]=[]
    for(let m=0;m<matrixTypeB;m++){
    
    a[q][m]=Number(readlineSync.question(`Enter your matrixA [${[q]}][${[m]}] : `));}}
    console.log(transpMatrix(a));
    }
    if(matrixTypeA!==matrixTypeB){
    var a=[];
    for(let c=0;c<matrixTypeB;c++){
        a[c]=[];
    for(let d=0;d<matrixTypeA;d++){
    
    a[c][d]=Number(readlineSync.question(`Enter your matrixA [${[c]}][${[d]}] : `));}}
    console.log(transpMatrix(a));
    }
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1)