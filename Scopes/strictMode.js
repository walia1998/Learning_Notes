
function gun() {
    tea = "tata"
    console.log(tea)
}
function fun() {

    "use strict";  // prohibited auto global scope
    coffee = "tata Bru"
    console.log(coffee)
}
gun(); // tata
fun(); // reference error teacher is not defined 