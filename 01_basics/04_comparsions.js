console.log("2" > 1);  //O/p: True
console.log("02" > 1); //O/p: True

console.log(null > 0);  //O/p: False
console.log(null == 0); //O/p: False
console.log(null >= 0); //O/p: True

/* 
Note: The reason is that equality check == and comparisons > < >= <= work differently
Comparsions convert the null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0); //O/p: False
console.log(undefined > 0);  //O/p: False
console.log(undefined < 0);  //O/p: False

// ===  it check strickly check weather the number are of same datatype.

console.log("2" === 2);    //O/p: False
console.log("2" === "2"); //O/p: True








