
// rest Opretor '...' in function
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400));

// ============ pass 'Object' in function ===============
const user = {
    username: "tanveer",
    price: 190
}
function handleObject(userObject) {
    console.log(`Username is "${userObject.username}" and price is "${userObject.price}"`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 390
})

// ==================== pass 'Array' in function ================== //

const myNewArray = [200,300,700,400]

function returnSecondValue(getArray){
    return getArray[3];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,700,400]))