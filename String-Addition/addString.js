function addStr(a,b){
    if(a.length>=b.length){
        b=b.padStart(a.length,0);
    }else{
        a=a.padStart(b.length,0);
    }
    var ar1=a.split("")
    var ar2=b.split("")
    var carry=0;
    var arr3=[];
        for(var i=ar1.length-1;i>=0;i--){
            if((Number(ar1[i])+Number(ar2[i])).toString().length==2){
               
                arr3.push(carry+Number((Number(ar1[i])+Number(ar2[i])).toString()[1]))
                carry=Number((Number(ar1[i])+Number(ar2[i])).toString()[0])
            }else{
                if((carry+Number(ar1[i])+Number(ar2[i])).toString().length==2){
                arr3.push(Number((carry+Number(ar1[i])+Number(ar2[i])).toString()[1]))
                carry=Number((carry+Number(ar1[i])+Number(ar2[i])).toString()[0]);
                }else{
                  arr3.push(carry+Number(ar1[i])+Number(ar2[i]))
                  carry=0;  
                }
            }
            
        }
        return arr3.reverse().join("")
}
console.log(addStr("5987342879234789234897", "23489072349807239487"));
console.log(addStr("893427328497983427893248932498034289324","234859234879342897893427893274"))