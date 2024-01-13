const accountId = 518
let accountEmail = "sameer@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

// accountid = 2 // not allowed

accountEmail = "sam@gmail.com"
accountPassword = "23456"
accountCity = "Jaipur"
let accountState;

/*
prefer not too use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);