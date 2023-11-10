const marvel_heros = ["thor", "Ironman", "Spiderman"]

const dc_heros = ["flash", "Aquaman", "Batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)


const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


const another_array = [1,2,3,[88,2,234], 78, 9,[112,[45,23,55],34],89]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("Irfan"));
console.log(Array.from("Irfan"));
console.log(Array.from({name: "irfan"})); // intresting


let score1  = 100
let score2  = 200
let score3  = 300

console.log(Array.of(score1,score2, score3 ))