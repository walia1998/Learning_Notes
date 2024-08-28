function a(name) {
    return function b() {
        console.log(name);
    }
}

let x =  a("ashsih");
for(let i = 0; i < 100000000; i++) {
    //something 
}

console.log(x);
x();