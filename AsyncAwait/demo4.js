async function fun() {
    console.log("entered");
    let x = await 20;  // await Promise.resolve(20)
    console.log("existing");
    return x;
}

console.log("Start");
let val = fun();
val.then(function f(value) {
    console.log("value is", value)
})
console.log("end")