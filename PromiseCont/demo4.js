function dummyPromise() {
    return new Promise(function f(resolve,reject) {
        setTimeout(function() {
            resolve("Timer's Promise")
        },0);
    })
}

console.log("Start of the file");

setTimeout(function timer1() {
    console.log("Timer 1 done");
    let y =dummyPromise()
    y.then(function promiseY(value) {
        console.log("Whose promise ? ", value)
    })
}, 0);


let x = Promise.resolve("Ashsih Walia");
x.then(function processPromise(value) {
    console.log("Whose promise ? " , value)
});

setTimeout(function timer2() {
    console.log("Timer 2 done")
}, 0);

console.log("End of the File");