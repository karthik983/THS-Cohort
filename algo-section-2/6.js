var readlineSync = require('readline-sync');


do {
    function giveInput(input){
        var arr1=[]
        for(var l=2;l<input;l++){
        arr1.push(l)
        }
        return arr1
    }
    
    function outPrime(arr1,giveInputCallback,callback){
        var arr2=giveInputCallback(arr1)
        var result=[]
    for(var k=0;k<arr2.length;k++){
        if(callback(arr2[k])){
            result.push(arr2[k])
        }
    }
    return result;
    }
    function primeOrNot(num){
        var newArr=[];
        if(num===2){
            newArr.push(num)
        }
        else{
        for(var i=2;i<num;i++){
            if(num%i!==0){
                newArr.push(num)
            }
            else{
                return 0;
            }
        }
        }
        return newArr;
    }
    
    let arr1=readlineSync.question('Enter the number: ');
    console.log(`The prime numbers less than N are : ${outPrime(arr1,giveInput,primeOrNot)}`);
    var testcases = Number(readlineSync.question('Press 1 to continue, press q to quit :'));
    }while(testcases===1)