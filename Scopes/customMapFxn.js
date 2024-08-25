function mapper(arr ,fn) {

    /**
     * 
     * arr --> is going to be an array of elemetnt
     * fn  -->  callback fxn which expects two arguments (value and index)
     * 
     */

    let result = [];
    for(let i = 0;  i < arr.length; i++) {
        // i ==>  index and arr[i] ==>  value
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr = [2,4,5,6,8];
 let x = mapper(arr, function  cuber(v,i) {
    console.log( v, v*v*v, i);
    return v*v*v;
});
console.log(x ,arr)


