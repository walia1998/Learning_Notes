//  const searching = require(__dirname + "/searching.js")

 // const searching = require('./searching.js')

 import searching   from "./searching";

console.log("Start");
let arr = [5,2,3,6,8,5,8,4,6]
let x = 6;

console.log(searching.linear(arr, x))