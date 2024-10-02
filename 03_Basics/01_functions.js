function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(number1, number2)/* paramiter */ {
    console.log(number1 + number2)
}
// const result = addTwoNumbers(5,6) /* argivement */
// console.log("Result: ", result); // this clg show output undefind


function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}
// const result = addNumbers(3,7);
// console.log("Result: ", result);


function addAnNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
// const result = addAnNumbers(2,8);
// console.log("Result: ", result);

// ====================================================================== //

function loginUserMsg (username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("Tanveer"));
console.log(loginUserMsg());