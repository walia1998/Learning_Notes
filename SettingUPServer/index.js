//using http module (inbuilt give by node) we can setup a basis server.

const http = require('http');
const PORT  = 3000;

/**
 * 
 * Http module contains a function called as createServer
 * this createServer function take callback as the input 
 * 
 * Now inside the callback, we get two arguments 
 * --> request -->  this argument conatins all the details about the incming req 
 * 
 * --> response  ==>  this argument contains funciton using which we can prepare the res[pnse]
 * the createServer function  return us the server object
 * 
 * 
 */

const server = http.createServer(function exec(req,res) {

    console.log(req.method);
   if(req.url == '/home') {
    res.end("Welcome to home")
   }else if(req.url == '/faq') {
    res.end("List of Faqs")
   }else {
    res.end('Hello World')
   }
 
});

server.listen(PORT, function process() {
    // once the server has started then this callback will be executed
    console.log('Server strarted on port', PORT)
})