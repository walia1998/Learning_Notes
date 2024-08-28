// how can we write a function  to download some data from a url, anbd not ue callbacks.
// instead use promise ? 

function fetch(url) { // this promise actually take 1 parameter as a fxn and fxn take 2 parameter resolve and reject 
    return new Promise(function (resolve, reject) {
    console.log("Starting fetching from ", url);
    
     setTimeout(function process() {
        let data  = "Dummy Data"
        console.log("Completed fetching the data");
        // somehow we need to return the data ? = TODO
        resolve(data); //return some data on success
     }, 4000)

    });
}

function fetch1(url) {
    return new Promise(function (resolve, reject) {
        for(let i = 0; i < 10000000000; i++) {
            //some task
        }
        console.log("Completed")
        resolve("Sanket");
    })
}