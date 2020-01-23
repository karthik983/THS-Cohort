// 0.js
var firstName = "Jenny";
 console.log("Hi, " + firstName)
var lastName="Smith";
 console.log("Hi, " + firstName + " " + lastName);

// 1.js
var favFood="tacos";
console.log("My favorite food is " + favFood);
console.log("No, but really, my favorite food is " + favFood);



// 10.js


const fiveSquared=5**2;
const eightCubed=8**3;
const sevenToTheSixth=7**6;
const eightyThreeModSix=83%6;
const sixtyModNine=60%9
console.log(fiveSquared)
console.log(eightCubed)
console.log(sevenToTheSixth)
console.log(eightyThreeModSix)
console.log(sixtyModNine)




// 11.js


let num1 = 32;
let num2 = 44;

num1++
num2--



// 12.js

let num1 = 32;
let num2 = 25;
let num3 = 92;
let num4 = 64;

num1+=17
num2-=14
num3*=11
num4/=8


// 13.js

let iHaveChanged = false;
iHaveChanged=true;
var iLoveCoding=true;
codingIsTooHard=false;



// 14.js

let first = 7;
let second = 8;

let isFirstBigger = first > second;
console.log(isFirstBigger); // should log: false

first = 16;
console.log(isFirstBigger); // should log: true


const small = 2;
const large = 5342;

let isSmaller=small<large;


const num = 45;
const string = "45";

let isLooselyEqual= num == string;
let isStrictlyEqual= num === string


const isTrue = true;
const isFalse = false;
let isTrueNotFalse= isTrue !== isFalse ;

// console.log('Is 2 < 5342?');
// console.log(isSmaller);
// console.log('Is 45 loosely equal to "45"?'); 
// console.log(isLooselyEqual);
// console.log('Is 45 strictly equal to "45"?');
// console.log(isStrictlyEqual);
// console.log('Is true not equal to false?');
// console.log(isTrueNotFalse);



// 15.js

console.log(10 + 5);
console.log("10" + 5);
console.log(5 + "10");

// 16.js


const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

const favMovieType=typeof(favMovie)
const timesSeenType=typeof(timesSeen)
const goingToWatchItAgainType=typeof(goingToWatchItAgain)

//  2.js

const myCodingConfidence="unwavering"
console.log("My confidence in my coding ability is " + myCodingConfidence);


// 3.js
const name="karthik"
var age=21
const loveJavaScript=true
listOfComplaints=null;
console.log('My name is ' + name);
console.log('I am ' + age + ' years old');
console.log('It\'s ' + loveJavaScript + ', I love JavaScript');
console.log('The list of things I hate about JavaScript is ' + listOfComplaints);


// 4.js

var mySingleString='i am karthik'
var myDoubleString="i am karthik"
var myBackString=`i am the karthik`
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);



// 5.js
const first = "Welcome";
const second = "to the";
const third = "jungle!";
let welcomeStatement=first+" "+second+" "+third;


// 6.js
let hometown = "New York City";
let favAlbum = "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"
let count=hometown.length
let upper=favAlbum.toUpperCase()
let lower=favAlbum.toLowerCase()
console.log(count);
console.log(upper);
console.log(lower);


// 7.js
const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"
let firstLetter=songTitle[0];
let seventhLetter=songTitle[6];
let lastLetter=lyrics[lyrics.length-1]
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);

// 8.js
let birthYear=1998;
let age=21
let in10Yrs=age+10
console.log(birthYear);
console.log(age);
console.log(in10Yrs);


// 9.js

let twentyTimesFour=20*4;
let nineOverThree=9/3
let twoHundredTimesThree=200.3*3;
console.log(twentyTimesFour);
console.log(nineOverThree);
console.log(twoHundredTimesThree);


if (!Object.is || true) {
	Object.is = function ObjectIs(x,y) { 
        if(x===0 && y===0){
            if((1/x)===-Infinity && (1/y)===Infinity || (1/y)===-Infinity && (1/x)===Infinity  ){
                return false;
            }
          else{
                return true;
            }
        }
        else if(Number.isNaN(x)=== true && Number.isNaN(y)===true){
            return true;
        }
        else if(x!==y){
            return false;
        }
        else{
            return true;
        }
     }
	
}

// console.log(Object.is(42, 42));
// console.log(Object.is('foo', 'foo'));
// console.log(Object.is(false, false));
// console.log(Object.is(null, null));
// console.log(Object.is(undefined, undefined));
// console.log(Object.is(NaN, NaN));
// console.log('*******', Object.is(-0, -0));
// console.log(Object.is(0, 0));

// console.log(Object.is(-0, 0) );
// console.log(Object.is(0, -0) );
// console.log(Object.is(0, NaN) );
// console.log(Object.is(NaN, 0) );
// console.log(Object.is(42, '42'));
// console.log(Object.is('42', 42));
// console.log(Object.is('foo', 'bar'));
// console.log(Object.is(false, true));
// console.log(Object.is(null, undefined));
// console.log(Object.is(undefined, null));

// NaN testing without usage of utility
// function isNaN(f){
//     return f!==f;
// }
