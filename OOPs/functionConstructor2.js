// Arrow function does not work as a constructor


// const Product = (n, p) => {
//     this.name = n;
//     this.price = p;

// }


// const p = new Product("Ashish Walia");
// console.log(p);


const Product = function(n, p)  {
    this.name = n;
    this.salary  = p;

}


const p = new Product("Ashish Walia", 3000000);
console.log(p);