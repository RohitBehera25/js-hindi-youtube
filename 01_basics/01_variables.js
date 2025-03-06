const accountId = 122334
let accountEmail = "dcd@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2   //not allowed

accountEmail = "ssd@gmail.com"
accountPassword = "2221122"
accountCity = "Nagpur"

console.log(accountId);

/*
Prefer not to Var 
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
