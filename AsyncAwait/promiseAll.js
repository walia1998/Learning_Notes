/**
 * Tasks:
 * 1. Write a function to downlad data from a url
 * 2. Write a function to save that downloaded data in a file and return the filename
 * 3. Write a function to upload the file written in previous step to a newurl
 */

function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("Started downloading from", url);
      setTimeout(function processDownloading() {
        let data = "Dummy Data";
        console.log("Donwload completed");
        resolve(data);
      }, 7000);
    });
  }
  
  function writeFile(data) {
    return new Promise(function (resolve, reject) {
      console.log("starting writing", data, "in a file");
      setTimeout(function processWriting() {
        let filename = "result.txt";
        console.log("File written successfully");
        resolve(filename);
      });
    }, 3000);
  }
  
  function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
      console.log("Upload started on url ", url, "filename is ", file);
      setTimeout(function processUpload() {
        let result = "Success";
        console.log("Uploading Done");
        resolve(result);
      });
    }, 5000);
  }

let downladPromise = fetchData("www.google.com");
let writePromise = writeFile("dummy data");
let uploadPromise = uploadData("test.txt", "www.google.com")
console.log("Start");

Promise.all([downladPromise, writePromise, uploadPromise]).then(function process(value) {
    console.log(value);
})