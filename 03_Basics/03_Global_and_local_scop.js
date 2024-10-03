// let a = 20;
// const b = 20
// var c = 30;
// console.log(a, b, c)


// {} <-- THIS IS SCOP

if (true) {  // this is is block Scop
    let a = 50;
    const b = 40
    var c = 30;
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const username = "tanveer"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)

    // two()
}
// one()

if (true) {
    const username = "tanveer"
    if (username === "tanveer") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++ //

console.log(addone(5))
function addone(num) {
    return num + 1
}

// console.log()
addTwo(5) // <-- This code give error Cannot access 'addTwo' before initialization
// Becose this is Hoisting you cannot access this function before initialization 
// if you call function after initializ function then code run 
const addTwo = function (num) {  // Expretion
    return num + 2
}
