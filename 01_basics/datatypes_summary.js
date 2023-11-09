// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol(unique)
 // BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 
 console.log(id === anotherId);

 const bigNumber = 3492857990703240347032403n



 // Reference (Non primitive)

 // Array, Object, Functions

 const heros = ["shaktiman", "naagraj", "doga"]

 let myObje = {
    name: "irfan",
    age: 22,
    address: "Bihar",
 }


 const myFunctions = function() {
    console.log("hello world");
 }

 console.log(typeof bigNumber)