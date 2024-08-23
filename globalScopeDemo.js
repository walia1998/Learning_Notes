var name = "Ashish Walia";//Global Scope 

function greet() {
   console.log('greetings', name);
   var x = 10; // Function Scope x is only accessible inside fxn greet()
   function test() {
    console.log('test', x)
   }
   test();
   console.log(x)
}
function fun() {
   console.log("have fun!", name);
}

greet();
fun();
