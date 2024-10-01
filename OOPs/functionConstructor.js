function Product(n,p) {
    this.name = n;
    this.price = p;
}

const p = new Product("Samsung s24 Ultra", 125000);
console.log(p);


/**
 * 1. --> this is js is diff than other languages. - > this is not applicable on arrow function
 * 2. --> this keyword refers to the constext from where we call the fuunctions
 */

/**
 * if you dont return anything, js return the newly created obj.
 * if you return primitive, then also we get newly created object.
 * if you return custom obj,  then js will return this custm obj not the newly created obj
 */