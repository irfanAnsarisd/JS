// const usereEmail = "h@hitesh.ai"
// const usereEmail = ""
// const usereEmail = " "
const usereEmail = []

// if(usereEmail) {
//     console.log("got user email");
// }
// else {
//     console.log("don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values

// "0", 'false', " ", [], {}, function(){}


// if(usereEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("object is empty")
// }


// Nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1)


// ternary operator

// condition ? true : false
const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80"): console.log("not less than 80")