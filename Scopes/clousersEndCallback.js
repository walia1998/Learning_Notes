function fun(x, fn) {
   /**
    * 
    * x -> number
    * fn -> callback function
    * 
    */

   for(let i= 0; i < x; i++) {
    console.log(i)
   }

   fn() //calling the callback function passed
   //some more logic
}

fun(10, function log() {
    //this is the callback function 
    console.log("custom logger");
});

fun(20, function () {
    console.log("Anonymus logger");
});

let g = function () {
    console.log("inside g");
}

function gun() {
    console.log("inside gun ")
}

fun(3, g);
fun(5, gun)