{
    let x = 10;  // let gives us a block scope, if we declare, let outside any block, then it does not get complete global scope
    console.log(x);
}

console.log(x); // this is not accessible.

function fun() {
    let y = 8;
    console.log(y);
}

fun();
