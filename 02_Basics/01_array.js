// Array

// when we make array-cope-opreation create 'shallow copies' 
// Shallow copies? => 'A Shallow copy of an object is a copy whose properties
//share the same reference, (point to the same underiying values) as those of the source
// object from which the copy. // Changes on Oregnal referance Point

// Deep Copy => A deep copy of an object is a copy whose propertes do not
// share the same refernces.

const myArr = [0, 1, 2, 3, 5, 4];
const myHeros = ["ironman", "superman", "spaiderman"];

// console.log(myArr[1]);

//  Array Methods
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop() // removing the last element of an array
// console.log(myArr)

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

// const newArr  = myArr.join()

// console.log(myArr)

// console.log(newArr)

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1)

console.log("B", myArr) 
const myn2 = myArr.splice(1,3); // splice manepulating array
console.log(myn2)

console.log("C", myArr);




