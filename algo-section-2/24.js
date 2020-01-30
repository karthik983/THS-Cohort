var readlineSync = require('readline-sync');

do {
    // using temp
    const swapTemp=(a,b)=>{
            let temp;
            temp=a;
            a=b;
            b=temp;
            console.log(a,b);
        }
        // using arith
        const swapArith1=(a,b)=>{
            a=a+b;
            b=a-b;
            a=a-b;
            console.log(a,b);
        }
        const swapArith2=(a,b)=>{
            a=a*b;
            b=a/b;
            a=a/b;
            console.log(a,b);
        }
        const swapLogXor=(a,b)=>{
            a=a^b;
            b=a^b;
            a=a^b;
            console.log(a,b);
        }
        const swapLogXnor=(a,b)=>{
            a=~(a^b);
            b=~(a^b);
            a=~(a^b);
            console.log(a,b);
        }
       let choice=Number(readlineSync.question('to swap using temporary variables press1,\npress2 for swapping with addition and subtraction,\npress3 for mult and div,press4 for xor,\npress5 for xnor: '));
        
       let a=Number(readlineSync.question('Enter the first number : '));
        let b=Number(readlineSync.question('Enter the second number : '));
        if(choice===1){
            console.log(swapTemp(a,b));
        }
        if(choice===2){
            console.log(swapArith1(a,b));
        }
        if(choice===3){
            console.log(swapArith2(a,b));
        }
        if(choice===4){
            console.log(swapLogXor(a,b));

        }
        if(choice===5){
            console.log(swapLogXnor(a,b));
        }
        var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
}
while(testcases===1);