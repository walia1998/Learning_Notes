function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return NaN;
}

function binarySearch (arr,x ) {
    // some code
}

console.log("ending searching");
export default linearSearch;
