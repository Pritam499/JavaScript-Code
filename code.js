/*-------------------TopicStart--------------------*/

//Let, const and var | chai aur #javascript


const accountId = 100079;
let accountEmail = "james@gmail.com"
var accountPassword = "James@Pass"
accountCity = "JaiPur";
let accountState;

// accountId = 2 // not allowed

accountEmail = 'mrjames@gmail.com'

accountPassword = 'mrPass@123'

//console.log(accountId);
//console.log(accountEmail);
//console.log(accountPassword);


/*
prefer not to use var
because of issue in block scope and functional scope
*/
//console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*------------------TopicEnd--------TopicStart--------------------*/
//Datatypes and ECMA standards | chai aur #javascript

"use strict"; //treat all JS code as newer version

// alert(3 +3) // we are using nodejs, not browser
// link for study => https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

//console.log(3+3) // code readibility should be high
//console.log('Pritam')

//datatypes in javascript
let name = "Pritam" //string datatype
let age = "24" // integer datatype
let isLoggedIn = false //boolean datatype
let state = null

// number => 2 to power 53 
//bigint => trading, stockmarket, big websie, reddit youtube views
//string => ""
//boolean => true/false
//null => standalone value
// undefined => decleared variable without value
// symbol => unique

//object

//console.log(typeof name);
//console.log(typeof undefined); //undefined is a type
//console.log(typeof null); // null is object type

/*------------------TopicEnd--------TopicStart--------------------*/
// datatype conversion 
// link for study https://tc39.es/ecma262/#sec-type-conversion

let score = "Pritam" //step by step value in score variable: 33, 33abc, null, undefined, true
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isloggedInit = "" //1=>true,2=>true, "" => false, "pritam" => true
let booleanIsLoggedIn = Boolean(isloggedInit);
//console.log(booleanIsLoggedIn);

let aNumber = 16

let stringNumber = String(aNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

/*------------------TopicEnd--------TopicStart--------------------*/
// Why string to number conversion is confusing

//************Operations**************** */

let newValue = 17
let negValue = -newValue
//console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%3)

let str1 = "hello"
let str2 = " Pritam"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" +2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

let gameCounter = 100
++gameCounter;
//console.log(gameCounter)

// link for study => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment


/*------------------TopicEnd--------TopicStart--------------------*/

// Comparison of datatypes in javascript

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


/* avoid this type of comperison
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log(undefined ==0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined <= 0) // false
console.log(undefined >= 0) // false
*/
// strictly check ===

//console.log("2" == 2) //true
//console.log("2" === 2) //false, because its strictly check is it really 2 including datatype also

/*------------------TopicEnd--------TopicStart--------------------*/

//Data types of javascript summary

// datatype - 1. primitive)(call by value), 2. Non-Primitive(call by referance)

// 1. Primitive datatype
// approximately 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// What is Dynamic or Static type?
// Answer: In statically typed languages, the compiler catches type-related errors before the program runs leading to more reliable code. On the other hand, dynamically typed languages detect type issues at runtime, which might lead to unexpected type errors or behavior during execution.

// JavaScript Dynamic or Static type?
// Answer : JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.


const realScore = 100
const realScoreValue = 100.4

const isLoggedIntoSite = false
const outsideTemp = null
let chackUserEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)


const bigNumber = 988277823894782n


// 2. Referance Type(Non-Primitive datatype)

// Arrays, Objects, Functions

const heros = ["Krish", ]
