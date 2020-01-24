// factorial iterative

const factIterative=(num)=>{
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}
factIterative(someResult);

// fibonacci iterative

const fibonacciIterative=(num)=>{
let arr1=[0,1]
let result=[]
for(let i=2;i<num+1;i++){
    arr1.push(arr1[i-2]+arr[i-1]);
}
return arr1[num]
}

// fibonacci recursion

const fibonRecursive=(num)=>{
    if(num<=1)return num;
    return fibonRecursive(num-2)+fibonRecursive(num-1);
}

// factorial recursion

const factRecursive=(num)=>{
    if(num<=1)return 1;
    return num*factRecursive(num-1);
}