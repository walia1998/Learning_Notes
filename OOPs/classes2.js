class Product {
  // class is kind of like a template
  discount;
  #rating = 99;
  #name;
  description = "custom";
  constructor(n, p) {
    console.log("Calling the constructor");
    this.#name = n; // this keyword actually referss to the same empty object we created
    this.price = p; // data members
    // return "Ashish Walia" it will ignoring it
  }

  static customMethod() {
    console.log("Calling the custom static method");
  }

  getName() {
    console.log(this.#name);
  }
  setName(newName) {
    this.#name = newName;
  }

  display() {
    //class methods are nothing but fxn, they represent behaviours
    console.log("Displaying a product", this.#name, this.price, this.#rating);
  }
}

const p = new Product("Samsung s24 Ultra", 125000); // new --> creates an empty plain object

// this new Keyword helps us to create new empty object Product(); it looks like fxn call but its class.

console.log(p);
p.display()
p.getName();
p.setName("Iphone");
p.getName();
