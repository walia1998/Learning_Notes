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
    }, 4000);
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
  }, 3000);
}

/**
 * let data = fetchData('www.google.com');
   let filename = writeFile(data);
   let response = uploadData(filename, 'www.google.com')
 *  the above will not work in read fashion
 */

// let downloadPromise = fetchData("www.google.com");
// downloadPromise.then(function processDownload(value) {
//   console.log("Download promise fulflled");
//   let writePromise = writeFile(value);
//   writePromise.then(function processWrite(value) {
//     console.log("Writing of fileCompleted");
//     console.log(value);
//   });
// });

// let downloadPromise = fetchData('www.google.com');
// let x = downloadPromise.then(function processDownload(value) {
//     console.log('Downloading is done with the following value', value);
//     // return 'Ashish Walia';
// })

/**
 * let downloadPromise = fetchData('www.google.com');
downloadPromise.then(function processDownload(value) {
    console.log('Downloading is done with the following value', value);
    return 'Ashish Walia';
 * 
 * the .then function itself returns a new promise
 */

// x.then(function process(value) {
//     console.log("the valye is" , value )
// })

let downloadPromise = fetchData("www.google.com");
downloadPromise
  .then(function processDownload(value) {
    console.log("Downloading is done with the following value", value);
    return value;
  })
  .then(function processWrite(value) {
    return writeFile(value);
  })
  .then(function processUpload(value) {
    return uploadData(value, "www.google.com");
  });
