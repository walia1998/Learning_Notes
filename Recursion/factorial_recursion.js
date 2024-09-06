function f(n) {
    //Base Case 
    if(n == 1 ) {
        return 1;
    } 
    return n * f(n-1);
}

console.log(f(6));


// LOOPS

function factorialWithLoops(n) {
    let ans = 1;
    for(let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

console.log(factorialWithLoops(8))