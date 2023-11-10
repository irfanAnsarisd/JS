// Dates

let date = new Date();

// console.log(date.toISOString());
// console.log(date.toString());
// console.log(date.toLocaleDateString());

// console.log(typeof date);


// console.log(date.toLocaleTimeString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toTimeString());
// console.log(date.getTimezoneOffset());
// console.log(date.toUTCString());
// console.log(date.getTime());


let myCreatedDate = new Date(2023,10,10, 15 , 25)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toTimeString());
// console.log(myCreatedDate.toLocaleTimeString());

let myCreateD = new Date("10-19-2023")
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateD.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})