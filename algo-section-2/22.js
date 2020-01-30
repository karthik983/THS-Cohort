var readlineSync = require('readline-sync');

do {
    function invMatrix(a){
            var b=[];
            for(var i=0;i<a.length;i++){
                b[i]=[];
            for(var j=0;j<a[0].length;j++){
                var det=1/((a[0][0]*a[1][1])-(a[0][1]*a[1][0]))
                b[i][j]=0;
               if(i===j){
                b[i][j]=det*a[Number(!i)][Number(!j)];
            }
            if(i!==j){
                b[i][j]=det*(a[i][j])*-1;
                }
    
            }
            }
        return b;
    }
    let matrixType=Number(readlineSync.question('Enter the n*n of matrix: '));
    if(matrixType===2){
    var a=[];
        for(let q=0;q<matrixType;q++){
            a[q]=[]
        for(let m=0;m<matrixType;m++){
        
        a[q][m]=Number(readlineSync.question('Enter your matrix: '));}}
        console.log(`The inverse is : ` ,invMatrix(a));
    }else{
        console.log("It's complicated");
    }
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));

}while(testcases===1);