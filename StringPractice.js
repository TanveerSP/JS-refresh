// ======================================================== //
// 1 Basic String Manipulation


// Concatenate two strings // Concatenate yane do string ko milana
let firstName = 'John';
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);


// Find the length of string 
const parhagraph = 'John_Roman_Doe'
console.log(parhagraph.length);

// Convert a String to uppercase
let msg = "hi i'm string"
console.log(msg.toUpperCase());

// Extract a subString 
let sentence = "JavaScirpt is scripting language";
let words = sentence.substring(0, 10);
console.log(words);

// ============================================================= //
// 2 String Methods

// Repleace part of a string 
let text = "I Like This Girl";
let newText = text.replace("Girl", "Language");
console.log(newText);

//Split a String into an array
let fruits = "apple, banana, cherry";
let fruitsArray = fruits.split(", ");
console.log(fruitsArray);

// Check if a string contains a specific word;
let sentenceTwo = "The quick brown fox jumps over the lazy dog"
console.log(sentenceTwo.includes("dog"));

// Trim white space from a string 
let messyString = "     Hello!     ";
console.log(messyString.trim());

// ============================================================== //
// Advanced String Operations

// Reverse a string 
let str = "JavaScript";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr);

// Count occurrences of a character in a string // Ye check karta hai ke jo match me word hai wo string me hai ya nahi
let phrase = 'hello word';
let count = (phrase.match(/o/g) || []).length;
console.log(count);

// Check if a String with a specific word // check kar ta hai pehla user ke word match hai ya nahi
let statement = "Java and JavaScript are defrent language"
console.log(statement.startsWith("Java"))


console.log("=================================================================")
//  split string
let str1 = "Man with the Golden Heart"
let reverseStr1 = str1.split("").reverse().join("");
console.log(reverseStr1)

let str2 = str1;
console.log(str2.includes("Man"))

let str3 = str1;
console.log(str3.startsWith("Man"))

let str4 = str1;
console.log(str4.slice(4, 13))

let str5 = str1;
console.log(str5.charAt(4))

let str6 = str1;
console.log(str6.indexOf("Golden"))

console.log(str6.endsWith("Heart"));
console.log(str1.length);
console.log(str1.replace("Man with the Golden Heart","I'm the strong Man with strong goals"))
console.log(str1.slice(4,25))
console.log(str1.toUpperCase())