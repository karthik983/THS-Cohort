// Direct recursion

let counter=0;
function inception(){
    console.log(counter)
    if(counter>3){
    return "done!";
    }
    counter++;
    return inception();
    }
// ----------------------------------------
// factorial
    const countDown=(num)=>{
        if(num===0)return;
        console.log(num);
        return countDown(num-1)
        }
// -------------------------------------------------------
// fibonacci
const fibonacci=(num)=>{
    if(num<2)return num;
    return fibonacci(num-2)+fibonacci(num-1);
}
// -------------------------------------------------------
// Indirect recursion
let n=0;
const foo1=()=>{
    if(n<=20){
        console.log(n)
        n++
        foo2()
    }
    else
    return;
}
const foo2=()=>{
    if(n<=20)
    {
        console.log(n)
        n++
        foo1()

    }
    else
    return;

}
// ----------------------------------------------------------

const isOdd=(num)=>{
    return num===0?false:isEven(Math.abs(num)-1);
}
const isEven=(num)=>{
    return num===0?true:isOdd(Math.abs(num)-1);
}
// ---------------------------------------------------------------

const f1=(n)=>{
    if(n<3)return;
    console.log(n);
    return f2(n-1);
    }
const f2=(n)=>{
    if(n<3)return;
    console.log(n);
    return f1(n-1);
    }
