// // 0.js
const addTwo=(num)=>num+2;

// // 1.js
const addS=(str1)=>str1+'s'

// // 2.js
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

 // 3.js


let calls = "";

function jerry(str) {
str+="Jerry"
return kramer(str)
}

function george(str) {
str+="George"
return elaine(str)
}

function elaine(str) {
str+="Elaine"
return str;
}

function kramer(str) {
str+="Kramer"
return george(str)
}
calls = jerry(calls);

// // 4.js
const getRemainder=(x,y)=>Math.max(x,y)%Math.min(x,y)

// // 5.js
const lastLetter=(word)=>word[word.length-1]

// // 6.js
const gradeCalculator=(grade)=>{
        if(grade>=90)
        {
            return "A";
        } 
        else if(89>=grade && grade>=80){
            return ("B");
        }
        
        else if(79>=grade && grade>=70){
            return("C");
        }
        else if(69>=grade && grade>=60){
            return("D");
        }
        
        else if (grade<=59){
            return("F");
        }
           
        else{
            return("Sorry.. Wrong grades!")
        }
}

// // 7.js
const wereAwesome=(n1,n2)=>{
    return `${n2} and ${n1} are awesome!`;
}

// 8.js
const disemvowel=(str1)=>{

    let vowel=[]
    for(let i=0;i<str1.length;i++){
        vowel.push(str1[i])
    }
    return vowel.filter((vow)=> vow!=="a" && vow!=="A" && vow!=="e" && vow!=="E" && vow!=="i" && vow!=="I" && vow!=="o" && vow!=="O" && vow!=="u" && vow!=="U").join("")
}

// 9.js
function arrayBuilder(obj) {
    var arr = [];
    for (var key in obj){
       for (i=0;i<obj[key]; i++){
       arr.push(key);}
    }
  return arr;
  }


// function expression




function getStudentFormId(studentId){
    var data=studentRecords.find(function(record){
       return record.id == studentId
    })
    return data
}
function printRecords(recordIds) {
    // TODO
     var records =recordIds.map(getStudentFormId)
    //  console.log(records)
    var sortedRecords=records.sort(function(record1,record2){
        var note1=record1.name.toUpperCase();
        var note2=record2.name.toUpperCase();
        if(note1<note2){
            return -1;
        }
        if(note1>note2){
            return 1;
        }

        return 0;
    })
     sortedRecords.forEach(function(record){
         console.log(`${record.name} - ${record.id} - ${record.paid? "Paid": "Not Paid"}`)
     })
}




var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);


