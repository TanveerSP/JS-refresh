// Immediately Invoked function ecpressions (IIFE)

// IIFE ka matlab hai "Immediately Invoked Function Expression".
// Yeh ek aisi JavaScript function hoti hai jo turant declare
// karne ke baad execute ho jati hai, bina us function ko \
// explicitly call karne ki zarurat.IIFE ko istara likha jata hai:

// 1) Global Scope Polluting ko Avoid karna IIFE local scope create
// karta hai jisme variables aur functions ko isolate kiya jata hai.
// Isse global scope mein unnecessary variables ko introduce karne
// se bach sakte hain.

// 2) Encapsulation: Agar tum chahte ho ke tumhare function ke variables 
// dusre code se interfere na ho sakein, to IIFE ka use karke tum unhe encapsulate kar sakte ho.

// 3) Asynchronous Code ke liye: Asynchronous tasks jaha tum chahte 
// ho ke koi code turant execute ho, IIFE helpful hota hai.

(function chai() { // => named IIFE
    console.log(`DB CONNECTED`);
})();  // --> semicolon is important

// () --> Exicution
// () --> funciton call

( (name) => { // => normal IIFE
 console.log(`DB CONNECTED TWO ${name}`);
} ) ('tanveer');

