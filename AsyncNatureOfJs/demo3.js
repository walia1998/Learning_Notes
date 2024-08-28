function fun() {
    console.log("Start")

    setTimeout (function exec () {
        console.log("executed some task")
    }, 5000);
    setTimeout(function process() {
        console.log("Inside the 3s task")
    },3000)
}

   
 fun();
 setTimeout(function last() {
    console.log("last")
 },7000)