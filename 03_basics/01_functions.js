function sayMyName() {
    console.log("I");
    console.log("R");
    console.log("F");
    console.log("A");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ 
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)    // arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// addTwoNumbers(3,5)


// const result = addTwoNumbers(3,5)

// // console.log(result);

// function addTwoNumbers(number1, number2){ 
//     return (number1 + number2)
// }

// const result1 = addTwoNumbers(4,5)
// // console.log(result1);

function addNumber(num1, num2){
    console.log(num1 + num2)
} 

// addNumber(2,9)
// addNumber(2, "a")
// addNumber(2, "8")
// addNumber(2, null)

// function addTnumber(n1, n2) {
//     let result = n1 + n2
//     return result
// }

function addTnumber(n1, n2) {
    
    return n1 + n2
}


const sum = addTnumber(19, 1)
// console.log( typeof sum);
// console.log(sum);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Irfan"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...numb1) {
    return numb1
}   

console.log(calculateCartPrice(200, 400, 600))
console.log(calculateCartPrice(200, 400, 600, 3000))

const user = {
    username: "irfan",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 300, 400, 100]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,600]))
