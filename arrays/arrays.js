let arr = [1, 2, 3, 4, 5];

/**
 * ->  An array in JavaScript is a data structure   that stores an ordered list of elements. It   can hold elements of any
  data type, including numbers, strings, objects, and even other arrays. Arrays are a type of object in JavaScript
  and have a number of built-in methods for adding, removing, and manipulating elements.
   Array length property - it is used to get the length of the array, ie array.length 
 */

console.log(arr);

let x = ["Ashish Walia", 1, 2, 3, "Khundian", false, 2.3];

console.log(x);

let a = new Array(10); // this is one more way we can create Array wby giving the length
console.log(a);


let colors = Array("Black", "blue", "red");
console.log(colors);

// elements -->      [22, 19, 30, 1, 6]
// index/postion -->  0,  1,  2, 3, 4


// Using positions we can extract out the original elements 

let y = [22,19,30,1,6]; // Index of the last element is  (array_length - 1)

console.log(y[3]);
console.log(y[4]);
console.log(y[50]);



// Update Arrays are mutable
y[1] = 99;
y[0] = "Ashish Walia";
console.log(y)