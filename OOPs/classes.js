class Product {


     constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.discount = d;
     }

    display() {
        console.log("Name of the product is ", this.name, "and price is ", this.price);
    }

    discountedPrice() {
        let newPrice = this.price*(Math.floor(100-this.discount)/100);
        return newPrice;
    }
}

const i1 = new Product("Iphone", 100000, 10); //constructor method of the class creates new object.
console.log(i1.discountedPrice());
const i2 = new Product("Moto edge 40neo", 50000, 10); 
console.log(i2.discountedPrice());
console.log(i1, i2)