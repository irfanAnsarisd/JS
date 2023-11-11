// const tinderUser = new Object()
const tinderUser = {}

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "irfan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstname: "irfan",
            lastname: "ansari"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname)

const obj1 =  {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj4 = Object.assign( {},obj1, obj2)
// console.log(obj4)

const obj5 = {...obj1,...obj2}
// console.log(obj5);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



 