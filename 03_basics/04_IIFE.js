// Imediately Invoked function Expresion (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`)
// }

// chai()


// function chai() {
//     console.log(`DB CONNECTED`)
// }()       // got error in this function bcz parenthesis

(function chai() {
    console.log(`DB CONNECTED`)
})();         // IIFE

// if you want execute two or more IIFE function than you must use (semicolon-> ;)


(function chaiorCode(){
    // named IIFE
    console.log(`another db connected`);
})();


( () => {
    // Unnamed IIFE
    console.log(`DB conneted two`);
})();

( (name) => {
    console.log(`Hello Mr. ${name}`);
})("Irfan")