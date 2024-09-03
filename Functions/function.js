function firstFunction(a,b) {
    console.log("This this my first function");
     
     let c = a + b
 console.log(c)
}


firstFunction(25, 56);


function isOddOrEven(x) {
    if(x % 2 == 0) {
        console.log("Even Number")
    }else {
        console.log("Odd Number")
    }
}
isOddOrEven(5)

function addFourArguments(a,b,c,d,e) {
    return a+b+c+d+e;
}
let x1 = addFourArguments(1,2,3,4,5);
let y1 = addFourArguments(1,2,9,4,5);
console.log(x1, y1);

function multiply(x,y) {
    return x * y;
    // console.log(x * y)
}
let z = multiply(x1,y1);
console.log(z)