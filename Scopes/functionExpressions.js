function fun() { // fcn definition 

}

let gun = function () {

}  // these are the fcn expression 

(function () {}) // fxn expression 


// Passsing Fucntion 

function sun() {
    console.log("sun Called")
}

function pun(fn) {
    console.log("pun Called");
    fn();
    console.log("leaving pun");
    console.trace();
}

pun(function logger() {
    console.log("new fxn passed");
})

pun(sun);