let arr = [10,12,15,18];
console.log(arr);

arr.push(9); // this push fxn to add new element at the last 
arr.push(25);
console.log(arr);


arr.pop(); // to remove an element from the last
arr.pop();
console.log(arr);


arr.shift();// to remove the element from the start
console.log(arr);
arr.unshift(11); // to add the element at the start
console.log(arr);



const a1= [1,2,3,4];
const a2 = [5,6,7,8];

const result = a1.concat(a2); // to retrun a new array with elements of a1 followed by elements of a2
console.log(result);


const x = [1,4,5,8,6,9,8,52];

const s = x.slice(3, 6); // to fetch data from start to end -1 (slice(start ,end))
console.log(s);


const str = x.join(" "); // to club all the elements together to form string seperated by given char
console.log(str);

const rev = x.reverse();
console.log(rev,x);



const a = [5,6,78,8,4,4,58,654,45,]
console.log(a.indexOf(6));

// arr.splice(start, deletecount, i1,i2.....)

const removed = a.splice(2,2,0,0);
console.log(a, removed)
console.log(a)