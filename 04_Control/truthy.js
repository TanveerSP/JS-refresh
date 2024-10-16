// const userEmail = "t@nveer.ai"
// const userEmail = ""
const userEmail = []
// const userEmail = 1

// if(userEmail) {
//     console.log("Got user email")
// } else{
//     console.log("Don't have user email")
// }

// Truthy and Falsy value

// // Truthy values
// true, 1, [], {}, "0", 'false', " ", function(){},  etc..

// // falsy values
// false, 0, -0, BigInt 0n, "", '', null, undefind, NaN etc...

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefind

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more than 80");