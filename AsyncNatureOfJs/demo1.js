function process() {
    console.log("Start")
    setTimeout (function exec () {
        console.log("executed some task")
    }, 2000);
 for (let i = 0; i < 10000000000; i++) {
    //some task
 }
 console.log("end");
}

process();
console.log("Halloo")


/**
 * We have few qs to anwer
 * Q1 : we can easily do tasks that take a lot of time to complete without blockings the code flow. How?
 * 
 * 
 */






