// Dates

// In javaScritp Date is a Object

/*
let myDate = new Date()
console.log("To String :-",myDate.toString());
// To String :- Thu Aug 29 2024 18:29:56 GMT+0530 (India Standard Time)

console.log("To Date String :-",myDate.toDateString());
// To Date String :- Thu Aug 29 2024

console.log("To Locale String :-",myDate.toLocaleString());
// To Locale String :- 29/8/2024, 6:29:56 pm

console.log("To Date String :-",myDate.toDateString());
// To Date String :- Thu Aug 29 2024

console.log("To ISO String :-",myDate.toISOString());
// To ISO String :- 2024-08-29T12:59:56.475Z

console.log("To JSON :-",myDate.toJSON());
// To JSON :- 2024-08-29T12:59:56.475Z

console.log(typeof myDate);
*/

console.log("===============================================================")

// let myCreatedDate = new Date(2024, 0, 26);
// let myCreatedDate = new Date(2024, 0, 26, 5, 3);
let myCreatedDate = new Date("28-7-2024");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000)); // Interview Question

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate)

