{
    var x= 10;
    console.log(x);
}
console.log(x);    


function fun() {
    console.log(x) // we get undefined ? --> lexical scoping 
    var x=10;
    console.log(x);  
}
console.log(x);   // this not accessible if makke fxn 


if(true) {
    var z = 13;
}
if(false) {
    var e = 23;
}

console.log(e);
console.log(z);
