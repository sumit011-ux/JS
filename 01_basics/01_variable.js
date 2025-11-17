const accountId = 12345;
let accountemail = "user@example.com";
var accountStatus = "active";
let address;
// accountId = 5555;

console.table([accountId, accountemail, accountStatus, address]);
/*
Dont use var in the modern JavaScript
because of issue in block scope and function scope
*/


// accountId = 67890; // This will cause an error because accountId is a constant
