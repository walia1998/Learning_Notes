var teacher = "Ashish Walia"

function fun() {
    var teacher = "Sania";
    teachingAssistant = "Kiran Walia"  // Auto Global variable which is global scope
    console.log(teacher);
    console.log(teachingAssistant);
}
console.log(teacher);//Ashish Walia
fun();  //Sania
console.log(teachingAssistant);

// Phase 1 :  ----> Parsing we will just do scope resolution

/***
 * whenever we declare a variable using Var/Let/Const it is a formal declaration  or initializing an func is also a formal declaration
 * 
 * In the Parsing phase js looks for formal declaration Only.
 * 
 * in this parsing phase we only we allocate scope not value of the variable.
 * 
 * 
 * The moment we go in a fxn, we maintain a new scope as welll that is fxn scope
 * 
 * One inside a scope, we don't know about scope of a variable we check the outer scopes one by one
 * 
 * AutoGlobal -----> in js if we keep seaching scope aof a variable in outer scopes & no where find it , we automatically it in global scope 
 * 
 * 
 * auto global only works with target reference and not source 
 */



var teacher = "Ashish Walia"

function fun() {
    var teacher = "Sania";
    teachingAssistant = "Kiran Walia"  // Auto Global variable which is global scope
    console.log(teacher);
    console.log(teachingAssistant);
}
console.log(teachingAssistant); // now it getting an Refernce error because auto global only works with target reference and not source our fun fxn execute yet so that's why
console.log(teacher);//Ashish Walia
fun();  //Sania


var teacher = "Ashish Walia"

function fun() {
    console.log(subject); // undefined because of var if we use let then it gets an error 
    var teacher = "Sania";
    var subject = 'JavaScript';
    teachingAssistant = "Kiran Walia"  // Auto Global variable which is global scope
    console.log(teacher);
    console.log(teachingAssistant);
}
console.log(teacher);//Ashish Walia
fun();  //Sania
console.log(teachingAssistant);