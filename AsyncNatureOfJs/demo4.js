function fun() {
    console.log("Start")

    setTimeout (function exec () {
        console.log("executed some task")
    }, 7000);
    setTimeout(function process() {
        console.log("Inside the 3s task")
    },3000)
}
fun();
for(let i = 0; i < 10000000000; i++) {
    //code
}

 setTimeout(function last() {
    console.log("last")
 },0)