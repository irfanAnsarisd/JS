const coding = ["js", "ruby", "cpp", "python","java"]

coding.forEach(function(val) {
    // console.log(val);
});

coding.forEach( (item) => {
    // console.log(item);
})


function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach(  (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName : "javascript",
        languagefileName: "js"
    },
    {
        languageName : "javascript",
        languagefileName: "js"
    },
    {
        languageName : "javascript",
        languagefileName: "js"
    },
]

myCoding.forEach( (item) =>{
    // console.log(item.languageName);
    // console.log(item.languagefileName);
})