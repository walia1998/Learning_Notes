function calculateSquare(x) { // here x is a Parameter
 return x*x;
}


function multiply(x,y) {
    return x * y;
}
function multiplyPara(x,y=6) {
    return x * y;
}


function array([num1, num2, num3, num4]) {
    return num1 + num2 + num3 + num4 
    ;
}

function addAllthearguments() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(addAllthearguments(1,2,3,4,5,6,7))

// console.log(multiplyPara(6  ))
// let arr = [2,9,8,6]
// console.log(array(arr));
// console.log(multiply(15,19))

// console.log(calculateSquare(10123));