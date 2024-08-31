// ======================================================================== //
// ================================= Numbers ================================ //
// ======================================================================== //
const score = 400;
// console.log(score)

const balance = new Number(100.5);
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNub = 123.8966
// console.log(otherNub.toPrecision(4))

const hunderds = 100000
// console.log(hunderds.toLocaleString('en-IN'))


// ======================================================================== //
// ================================= Maths ================================ //
// ======================================================================== //

console.log(Math);
// console.log(Math.abs(-4)); // convert in positive value (-4 to 4)
// console.log(Math.round(4.5)); // if less then 4.5 then give (5), if you give 4.4 then give 4 
// console.log(Math.ceil(4.2)); // give only big number after user give num
// console.log(Math.floor(4.9)); // give only 4 
// console.log(Math.sqrt(3));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // math.rondom give value in 0 and 1
console.log(Math.random() * 10 + 1); // this code give value in 1+ value
console.log((Math.random() * 10) + 1); // this code give duble value
console.log(Math.floor(Math.random() * 10) + 1); // this code give value in 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min ) // this code give double digits
