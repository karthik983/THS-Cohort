// Problem-1
const num=(inp)=>{
    if(inp%2===0){
    return 'even'
    }
    return 'odd'
    }
   
 // Problem-2
  const num=()=>{
        for(let i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
         console.log("FizzBuzz");
         }
         else if(i%3===0){
         console.log( "Fizz");
         }
        else if(i%5===0){
         console.log( "Buzz");
         }
        else{
        console.log(i)
        }
        }
        }
       

     // problem-3
       const arr1=(arr)=>{
            let a=0;
            for(let i=0;i<arr.length;i++){
            a+=arr[i]
            
            }
            return a
            }
           

       // problem-4
         const num=(inp)=>{
             if(inp>0){
             return"positive"
               }else{
             return "negative"
               }
               }
                   
         //  problem-5
          const arr=(arr1,arr2)=>{
               let c=0
               c=arr1
               arr1=arr2
               arr2=c
              console.log( arr1,arr2)
                }
                   

         // problem-6 find maximum number in an array using a using function.
        const greatestNumber=(arr)=>{
              let b=0;
              for(let i=0;i<arr.length;i++){
               b= Math.max(arr[i],b)
                 }
                return b
                 }

       // problem-7 mean of the given array elements
        const arrayElement=(arr)=>{
         let b=0;
         let mean=0;
        for(let i=0;i<arr.length;i++){
             b+=arr[i]
             mean=b/(arr.length)
            }
            return mean
            }
         //problem-8 given char is vowel or consonant
     const vowelOrNot=(word)=>{
         if(word==='a'|| word==='e' || word==='i' || word==='o' || word==='u'){
         return 'vowel'
         }
         else{
         return 'consonant';
          }
          }

         //problem-9 largest number among 3 numbers.
      const largestNumber=(num1,num2,num3)=>{
           return Math.max(num1,num2,num3)
        }

         //problem-10 given year is leap year or not.
       const leapYear=(year)=>{
       if(year%4===0){
          return"Leap year"
                 }
          return 'Not a leap year'
              }
                   
                 
