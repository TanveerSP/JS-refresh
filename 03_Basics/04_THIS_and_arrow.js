// This keyword refers to the current context
const user = {
    username: "hitesh",  // Initial username
    price: 999,          // Initial price

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to the website`);
        // "this" refers to the current object (user), so this.username will give "hitesh"
    }
}

// user.welcomeMessage(); // This will log: "hitesh, Welcome to the website"
// user.username = 'sam'; // Now we change the username to 'sam'
// user.welcomeMessage(); // This will log: "sam, Welcome to the website"

// console.log(this); // In the global context, this refers to the global object (in browsers, it's the window object)

function chai() {
    let username = "tanveer";
    console.log(this.username);
    // In a regular function, `this` refers to the global object in non-strict mode, so `this.username` would be undefined here
}
chai(); // Calling chai() logs undefined because this is not bound to the function

// Function expression with `this`
const chaior = function () {
    let username = "tanveer";
    console.log(this.username);
    // Since this is a function expression, `this` still refers to the global object here
}
chaior(); // This will log undefined because this is not bound in function expressions in this context

// Arrow function with `this`
const chai = () => {
    let username = "tanveer";
    console.log(this);
    // In an arrow function, `this` is lexically bound, meaning it refers to the surrounding context (in this case, the global scope)
}
chai(); // This will log the global object (or an empty object in strict mode)

// Arrow functions can have implicit returns
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
}

const addTwoImplicit = (num1, num2) => num1 + num2;  // Implicit return
const addThree = (num1, num2) => (num1 + num2);       // Implicit return in parentheses

console.log(addTwo(3, 4));  // This will log 7
console.log(addThree(4, 4)); // This will log 8

// How to return an object using arrow functions
const addFour = (num1, num2) => ({ username: "tanveer" });
// Parentheses are necessary when returning an object implicitly with an arrow function

console.log(addFour(5, 3)); // This will log { username: "tanveer" }
