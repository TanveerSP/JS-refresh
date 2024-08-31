const accountId = 14414;
let accountEmail = "user@gmail.com";
var accountPassword = " 12345";
accountCity = "Ahmadnagar";
let accountState;

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

// accountId = 2;
accountEmail = "test@gmail.com";
accountPassword = "321321";
accountCity = "UK";
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);