const fs = require('fs-extra')

let fileStream = fs.createReadStream(__dirname + "/streamDemo/input.txt");
let outputStream = process.stdout; //iritable stream


//readable.pipe(writeStream)
fileStream.pipe(outputStream);