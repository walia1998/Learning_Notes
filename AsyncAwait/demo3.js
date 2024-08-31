function fun() {
    return new Promise(function f(resolve,reject) {
        setTimeout(function process() {
           console.log("Resolved");
           resolve(123)
        }, 5000)
    })
}

let x = fun();
x.then(function exe(value) {
    console.log("Value is", value);
    for(let i = 0; i < 10000000000; i++) {
      
    }
    return 100;
})
.then(function exe1(value) {
console.log("Value here is", value);
return 200;
})