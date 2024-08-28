// Tasks:
// 1. write a function to download date from a url
//2. write a function to save that download data in a file and return the filename
//3. Write a function to upload the file written in previous step to newurl




function fetchCustom(url , fn) {
    // download content of the url 
    // this downloading can take sometime
    // We'll download the contet from utland then whatever is the result we nwill pass to the callback

    console.log("Starting downloading", url);
    setTimeout(function process() {
        console.log("Downlaod completed");
        let response  = "Dummy data";
        fn(response);
    },3000);
   
}

function writeFile(data, fn) {
    //this function writes data in a new file
    console.log("Started writing data");
    setTimeout(function process() {
        console.log("Writing completed");
        let filename = "output.text";
        fn(filename)
    }, 4000);
}

function uploadFile(filename, newurl, fn) {
    console.log("Upload started ");
    setTimeout(function process() {
        console.log("File", filename, "uploaded successfully on", newurl);
        let uploadResponse  = "Success";
        fn(uploadResponse);
    }, 2000)
}


fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Downloaded response is: ", response);
    writeFile(response, function writeCallback(filenameResponse) {
        console.log("new file written is", filenameResponse);
        uploadFile(filename, "www.drive.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse)
        })
    })
});
