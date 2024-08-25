function todo(task) {
    console.log("start of todo")
    setTimeout(function fun() {
       console.log("complete", task) // task remeber the variable not the value
    },2000);

    task = "Karma"
    console.log("ending of todo")
}

console.log("Starting");
todo("your coding")  // calling todo
console.log("End");