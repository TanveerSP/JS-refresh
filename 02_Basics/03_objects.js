// singleton -> if make object using constructor method then object is singleton
// Object.create


// object literals -> if you make object using object literals method

// how to use symbol in object 
const mySym = Symbol("key1");

const JsUser = {
    name: "Tanveer",
    "full name": "Tanveer Pathan",
    // mySym: "mykey1", // <- this is a wrang way to decleare symbol
    [mySym]: "key1", // <- this is correct way to decleare symbol
    age: 21,
    location: "Ahmadnagar",
    email: "tanveerMicrosoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "tanveerOpenAi.com";
// Object.freeze(JsUser)
JsUser.email = "tanveerNetflix.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello I'am JS user")
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello I'am JS user, ${this.name}`)
}
console.log(JsUser.greeting2());