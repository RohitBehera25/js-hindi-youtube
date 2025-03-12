const name = "Rohit"
const repoCount = 55

console.log(name + repoCount + "Value"); // O/p Rohit55 Value
// Note:- But Don't prefer this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// O/p : Hello my name is Rohit and my repo count is 55

const gameName = new String("ROhitB")

console.log(gameName[0]); //O/p: R
console.log(gameName.__proto__);
console.log(gameName.length); //O/p: 6
console.log(gameName.toUpperCase()); //O/p: ROHITB
console.log(gameName.charAt(5)); //O/p:B
console.log(gameName.indexOf('t')); //O/p:4


