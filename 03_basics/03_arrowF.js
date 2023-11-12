const user = {
    Username: "irfan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.Username}, welcome to website`)
        console.log(this)
    }

}

// this is refer to current context {}

// user.welcomeMessage()
// user.Username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let Username = "irfan"
//     console.log(this.Username);
// }

// chai()

// const chai = function(){
//     let Username = "irfan"
//     console.log(this.Username);
// }

// chai()


// +++++++++ Arrow function +++++++++++++++++

const chai = () => {
    let Username = "irfan"
    console.log(this);
}

// chai()

// const addTwo = (n1,n2) => {
//     return n1 + n2
// }

// const addTwo = (n1,n2) => n1 + n2

// const addTwo = (n1, n2) => (n1 + n2)

const addTwo = (n1, n2) => ({Username: "irfan"})

console.log(addTwo(3,4))


const myArray = [2,5,3,7,8]

// myArray.forEach()


