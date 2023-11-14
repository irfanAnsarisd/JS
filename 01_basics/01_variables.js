const accountId = 147738
let accountEmail = "irfanansarisd648@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2  // Not allowed 
 console.log(accountId);

 /*
   prefer to not to use var
   because of issue of block scope and functional scope.
 */

 accountEmail = "irfan@gmail.com"
 accountPassword = "7383"
 accountCity = "Delhi"

 console.table([accountId,accountEmail,accountPassword, accountCity])


