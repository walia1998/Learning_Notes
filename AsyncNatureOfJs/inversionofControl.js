function fun(inputString, fn) {
    // executes some algorithm on the string

    let output = inputString.split(',')//output is an array
    for(let i = 0; i <output.length; i++) {
        fn(output[i]);
    }
}





//using it

fun("name : Ashish, subject: cse", function process(inp) {
    let arr = inp.split(":")
    console.log("{", arr[0], " => ", arr[1], "}")
});