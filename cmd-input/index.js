var readlineSync = require('readline-sync');

const someInput=readlineSync.question("Enter your input: ");

const fun=(input,callback)=>{
   
    let arr1= input.split("")
    let result=[]
    for(let i=0;i<arr1.length;i++){
        for(let property in ascii){
            if(property===arr1[i]){
                result.push(ascii[property]);
            }
        }
    }
    let output=[];
    for(let m=0;m<result.length;m++){
       output.push(callback(result[m]))
    }
    // output.map(function(element){
    //     if(element.length===8)return element;
    //     else 0+element
    // })
    console.log(output);
    return output;
}
 let str1=""

const convAscToBin=(n)=>{
   str1=""
    if (n<=1){
      str1+=(n); 
    } else {  
        convAscToBin(Math.floor(n/2));
        str1+=(n%2);
     }
     if(str1.length===8){
     return str1;
     }else{
        return str1.padStart(8,"0");
    }
     
}
 let ascii = {    A   :   65 ,    B   :   66  ,    C   :   67 ,    D   :   68  ,    E   :   69  ,    F   :   70  ,    G   :   71  ,    H   :   72  ,    I   :   73  ,    J   :   74  ,    K   :   75  ,    L   :  76  ,    M   :   77  ,    N   :   78  ,    O   :   79  ,    P   :   80  ,    Q   :   81  ,    R   :   82  ,    S   :   83  ,    T   :   84  ,    U   :   85  ,    V   :   86  ,    W   :   87  ,    X   :   88  ,    Y   :   89  ,    Z   :   90  ,    a   :   97  ,    b   :   98  ,    c   :   99  ,    d   :   100 ,    e   :   101 ,    f   :   102 ,    g   :   103 ,    h   :   104 ,    i   :   105 ,
     j   :   106 ,    k   :   107 ,    l   :   108 ,    m   :   109 ,    n   :   110 ,    o   :   111 ,    p   :   112 ,    q   :   113 ,    r   :   114 ,    s   :   115 ,    t   :   116 ,    u   :   117 ,    v   :   118 ,    w   :   119 ,    x   :   120 ,    y   :   121,    z   :   122 ,' ' :   32  ,':' :   58  ,';' :   59  ,'<' :   60  ,'=' :   61  ,'>' :   62  ,'?' :   63  ,'@' :   64  ,'/' :   47  ,'0' :   48  ,'1' :   49  ,'2' :   50  ,'3' :   51  ,'4' :   52  ,'5' :   53  ,'6' :   54  ,'7' :  55  ,'8' :   56  ,'9' :   57}

fun(someInput,convAscToBin);