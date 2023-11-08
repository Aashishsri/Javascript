const accountId = 14412
let accountEmail ="aashishg@gmail.com"
var accountPassword="123"
accountCity = "Delhi"
let accountState;

// accountId=12 not allowed
accountEmail ="aashu.com"
accountPassword="1439"
accountCity="Gurgaon"
console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
console.table([accountId,accountEmail,,accountCity,accountPassword,accountState])
/*
prefer not to use var
Because of issues in block scope and functional scope 
*/