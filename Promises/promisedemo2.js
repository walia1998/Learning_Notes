function demo1() {
    return new Promise(function(resolve,reject) {
        console.log("hi");
        setTimeout(function() {
         console.log("Wohoo, Task Done");
         resolve("Student are the best")
        },3000)
        console.log("Bye")
    })
}

function demo2(val) {
    return new Promise(function (resolve,reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("completed timer");
            if(val % 2 == 0) {
                //even number
                resolve("even");
            }else {
                //odd number
                reject("odd");
            }

        }, 10000);
        console.log("Somewhere")
    })

}