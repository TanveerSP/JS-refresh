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