// Array

const myArr = [1,2,3,4,5,6]

const myHeros = ["saktiman", "nagraj"]

const myArr2 = new Array(1,4,5,6,8,9)


// console.log(myArr);
// console.log(myArr[3]);


// array methods

myArr.push(7)
// console.log(myArr);
myArr.push(8)
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(7))

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice , Splice

console.log("A ", myArr)

const myN1 = myArr.slice(1,3)

console.log(myN1)
console.log("B ", myArr);


const myN2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myN2);

