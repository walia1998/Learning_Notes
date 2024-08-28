function fun(task1, task2) {
    task1 = "hii",
    setTimeout(function gun() {
       console.log("sania", task1)
    },2000)
    task1 = task2;
    task2 = "hello";
}
fun("what are you doing", "how are you") // output ---> sania how are you hello

/**
 * 
 * if we remove task 2 from console.log then our out put is "sania how are you

"
 * 
 */