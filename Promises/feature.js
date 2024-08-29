/**
 * Tasks: 
 * 1. Write a function to downlad data from a url
 * 2. Write a function to save that downloaded data in a file and return the filename
 * 3. Write a function to upload the file written in previous step to a newurl
 */

function fetchData(url) {
    return new Promise(function (resolve,reject) {
        console.log('Started downloading from', url)
        setTimeout(function processDownloading() {
            let data = 'Dummy Data'
            console.log('Donwload completed')
            resolve(data);
        },4000 )
    })
} 

function writeFile(data) {
    return new Promise(function (resolve,reject) {
        console.log('starting writing', data, 'in a file');
        setTimeout(function processWriting() {
        let filename = 'result.txt';
        console.log('File written successfully');
        resolve(filename);
       })
    }, 3000)
}

function uploadData(file, url) {
    return new Promise(function (resolve,reject) {
        console.log('Upload started on url ', url, 'filename is ' , filename);
        setTimeout(function processUpload() {
            let result = 'Success'
            console.log("Uploading Done")
           resolve(result)
        })
    }, 3000)
}


let data = fetchData('www.google.com');
let filename = writeFile(data);
let response = uploadData(filename, 'www.google.com')
