//  Singleton
// object.create

// Objects literals


// sys declare
const mySym = Symbol("key1")

const JsUser = {
    Name: "Irfan",
    "Full name": "Irfan Ansari",
    [mySym]: "Mykey1",
    age: 18,
    location: "Delhi",
    email: "irfan@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "irfan@chatgpt.com"

// Object.freeze(JsUser)  // for lock object no changeing
JsUser.email = "irfan@micro.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this["Full name"]}`);
}

console.log(JsUser.greetingTwo());

