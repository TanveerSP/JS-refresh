// first way to declear String
const name = 'tanveer'
const repoCount = 50

// console.log(name+repoCount+"Value");   // this is Old for use

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// second way to difind String 
const gameName = new String('grad derft-auto');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

// object how to see 
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newStr = gameName.substring(0, 4)
console.log(newStr);

const secondStr = gameName.slice(0, 7)
console.log(secondStr);

const nweStr1 = "  tanveer  "
console.log(nweStr1)
console.log(nweStr1.trim())

const url = 'https://github/TanveerSP'
console.log(url.replace('%20','-'));

const newName = "tanveer-pathan-khan";
console.log(newName.split('-'));


