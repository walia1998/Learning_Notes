
console.log("Start")

let id_1 = setTimeout (function execute1() {
    console.log("task completed");
}, 3000);

console.log("End");


let id_2 = setTimeout (function execute2() {
    console.log("task completed");
    clearTimeout(id_1); // now id1 will not executed
}, 2000);

let id = setInterval (function () {
    console.log("Task done again ")
}, 2000);

setTimeout(function () {
    clearInterval(id); // remove the intervals
},10000)

