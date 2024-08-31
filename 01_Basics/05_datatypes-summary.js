// JavaScript is a Dynamic language
//  => JavaScript is a dynamic language, meaning variable types are 
//  determined at runtime and can change during execution.

// Primitive

// 7 types: String, Number, Boolean, null,Undefined, Symbol,BigInt


const score = false

const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 3430385394032049094n

// Reference Type (Non Primitive)
// Array, Objects, Function()

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "tanveer",
    age: 20,
}

const myFunction = function () {
    console.log("hello");
}
// myFunction();


// How to see datatype 
// console.log(typeof heros)


// ++++++++++++++++++++++++++++++++++++++++++++++ Stack and Heap +++++++++++++++++++++++++++++++++++ //

// Stack (Primitive), => Primitve data store in Stack Memory
// Heap (Referencd/Non-Primitive) => Non-primitive data store in Heap Memory

let myYoutubeName = "tanveer"
let anothername = myYoutubeName

anothername = "pathan"
console.log(myYoutubeName);
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



