let arr = [1,2,3,4,5];

arr.map(function process(v, i) { // [1,2,3,4,5].map(fn)
    /** 
     * v ->value
     * i -> index
     * 
     */
    console.log(v , i)
} );  // this arr.map()  except a fn all the elements of given array it passes the elements as an argument to the callback.


let arr_1 = [1,2,3,4,5];

let x = arr.map(function process(v, i) {
    console.log(v, i);
    return v * v;
})
console.log(x);
console.log(arr)