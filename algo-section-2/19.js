var readlineSync = require('readline-sync');

do {
    const addMat=(a,b)=>{
        let c=[];
        for(let i=0;i<a.length;i++){
        c[i]=[];
        for(let j=0;j<a[0].length;j++){
        c[i][j]=(a[i][j]+b[i][j]);
        }
        }
        return c;}
        const subtractMat=(a,b)=>{
            let c=[];
            for(let i=0;i<a.length;i++){
            c[i]=[];
            for(let j=0;j<a[0].length;j++){
            c[i][j]=(a[i][j]-b[i][j]);
            }
            }
            return c;
        }
    
    let matrixTypeA=Number(readlineSync.question('Enter the n*n of matrix 1: '));
    let matrixTypeB=Number(readlineSync.question('Enter the n*n of matrix 2: '));
    if(matrixTypeA!==matrixTypeB){
        console.log("You can't add or subtract them.");
        }
    if(matrixTypeA===matrixTypeB){
    var a=[];
    var b=[];
    for(let q=0;q<matrixTypeA;q++){
        a[q]=[]
        b[q]=[]
    for(let m=0;m<matrixTypeB;m++){
    a[q][m]=Number(readlineSync.question('Enter your number for matrixA: '));

}
}

    var b=[];
    for(let r=0;r<matrixTypeA;r++){
        b[r]=[]
    for(let t=0;t<matrixTypeB;t++){
    b[r][t]=Number(readlineSync.question('Enter your number for matrixB: '));

    }}
    chooseAny=Number(readlineSync.question('If you want to add press1,and press 2 for subtract :'));
    if(chooseAny===1){
        console.log(addMat(a,b));
        }
    if(chooseAny===2){
            console.log(subtractMat(a,b));
        }
        }
        var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
    }while(testcases===1);

