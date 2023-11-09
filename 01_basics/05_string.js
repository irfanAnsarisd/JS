const name = "irfan"
const repocount = 50

// console.log(name + repocount + " value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('irfan-An')
// console.log(gameName[0])

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));


const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-7,4);
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://irfan.com/irfan%20ansari"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'))