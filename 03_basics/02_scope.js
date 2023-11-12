// let , var , const

var a = 400
// var c = 400

if(true) {
    let a = 10
    const b = 20
    var c = 30 // var is used outside of scope,bcz its not used
    // console.log("inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);


// ++++++++++++++++++++++++++++++++++++++++++

function one() {
    const username = "irfan"

    function two() {
        const  website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "irfan"

    if(username === "irfan") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)

// +++++++++++++++++++ Interesting ++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}

addTwo(5)

const addTwo = function(num){
    return num + 2
}

// addTwo(5)