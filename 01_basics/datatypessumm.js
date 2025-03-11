//  Primitive (Call-By-Value) which means Jaab hi ham usko kahi na kahi se copy karta hai jo uska orginal data ka refernce 
// nhi diya jaat uska copy kar ka diya jaat hai or usma jo bhi changes karta ho uska copy mai karta ho 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* ***************************Memorys***************************** */

// Two Type of memory are Stack Memory and Second One is Heap Memory

// Stack (Primitive)
// Heap (Non-Primitive)

let myYouTube = "RohitChannel"

let myAnotherChannel = myYouTube

myAnotherChannel = "RohitAurChai"

console.log(myYouTube); //O/p : RohitChannel
console.log(myAnotherChannel); //O/p :RohitAurChai


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohit@gmail.com"
// Note: To access any value in object u can use by "."

console.log(userOne.email); //O/p : rohit@gmail.com
console.log(userTwo.email); //O/p : rohit@gmail.com



