const myObject = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by microsoft"
}

// here only key access
for (const key in myObject) {
    // console.log(key);
}

// here value access
for (const key in myObject) {
    // console.log(myObject[key]);
}

// value and key both are accesiable here
for (const key in myObject) {
    // console.log(`${key} for value is : ${myObject[key]}`);
}

// for array in for in loop
const programmming = ["c", "cpp", "java", "py", "js"]

for (const key in programmming) {
    // console.log(`index:- ${key} and  there value:-  ${programmming[key]} and array is:- ${programmming}`);
}

// in map is used
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// for (const key in map) {
//    console.log(key);
// }          // => not iterable here map 
