function todo(task) {
    console.log("start of todo")
    setTimeout(function fun() {
       console.log("complete", task)
    },2000);
    console.log("ending of todo")
}

console.log("Starting");
todo("your coding")  // calling todo
console.log("End");


//At the time instance wehn the fxn will be called the todo fxn is already over  if fun is called after the completion of todo & todo has ended, how fun is able to access task variable.

/**
 * this happen due to clousers.
 * Clouser is when a fxn "remebers" its lexical scope even when the fxn is executed outside that lexical scope.
 * 
 */