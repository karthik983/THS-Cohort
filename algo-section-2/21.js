var readlineSync = require('readline-sync');

do {
    const findTrace=(a)=>{
        if(a.length===a[0].length){
        let c=0;
        for(let i=0;i<a.length;i++){
        for(let j=0;j<a[0].length;j++){
        if(i===j){
        c+=a[i][j];
        }
        }
        }
        return c
        }else{
            console.log("trace is undefined");
        }
        }
        let matrixType=Number(readlineSync.question('Enter the n*n of matrix: '));
        var a=[];
        for(let q=0;q<matrixType;q++){
            a[q]=[]
        for(let m=0;m<matrixType;m++){
        
        a[q][m]=Number(readlineSync.question('Enter your matrix: '));}}
        console.log(findTrace(a));
        var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}while(testcases===1);