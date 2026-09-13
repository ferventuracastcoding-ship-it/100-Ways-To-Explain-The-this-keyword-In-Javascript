// ============================================================
// 5 WAYS TO UNDERSTAND "this" IN JAVASCRIPT
// E-COMMERCE EXAMPLES
// ============================================================


// ============================================================
// 1. "this" INSIDE AN OBJECT METHOD
// ============================================================
// When a function is called as an object method,
// "this" refers to the object that called the method.
// const product
const product = {
  // name: "Gaming Laptop",
  // price: 1299
  // quantity: 3
    name: "Gaming Laptop",
    price: 1299,
    quantity: 3,
  // getTotal() {
  // return this.price * this.quantity
  // }
    getTotal() {
        // "this" = product
        return this.price * this.quantity;
    }
};

console.log("1. Object Method");
// console.log(product.name);
console.log(product.name);
// console.log("Total", product.getTotal());
console.log("Total:", product.getTotal());


// ============================================================
// 2. "this" INSIDE A CLASS
// ============================================================
// In a class, "this" refers to the current object instance.
//
// Each customer gets their own "this".

class ShoppingCart {

    constructor(customerName) {
        // "this" refers to the new ShoppingCart object
        this.customerName = customerName;
        this.items = [];
    }

    addProduct(name, price) {

        // "this.items" belongs to this specific cart
        this.items.push({
            name: name,
            price: price
        });
    }

    getTotal() {

        let total = 0;

        for (const item of this.items) {
            total += item.price;
        }

        return total;
    }
}

const fernandoCart = new ShoppingCart("Fernando");

fernandoCart.addProduct("Keyboard", 80);
fernandoCart.addProduct("Mouse", 40);

console.log("\n2. Class");
console.log("Customer:", fernandoCart.customerName);
console.log("Cart Total:", fernandoCart.getTotal());


// ============================================================
// 3. "this" WITH A BUTTON/EVENT
// ============================================================
// In a normal event-handler function,
// "this" can refer to the element that triggered the event.
//
// Node.js does not have browser buttons,
// so we simulate an e-commerce button object.

const addToCartButton = {

    productName: "Wireless Headphones",
    price: 150,

    click: function () {

        // Here "this" refers to addToCartButton
        console.log("\n3. Event-style Method");
        console.log("Adding:", this.productName);
        console.log("Price:", this.price);
    }
};

addToCartButton.click();


// ============================================================
// 4. "this" WITH bind()
// ============================================================
// bind() allows us to permanently choose what "this" means.
//
// This is useful when passing an object's method around.

const store = {

    storeName: "Tech World",
    discount: 20,

    calculateDiscount(price) {

        // "this" refers to store
        return price - (price * this.discount / 100);
    }
};


// Take the method out of the object.
const discountCalculator = store.calculateDiscount;


// Without bind(), "this" may no longer refer to store.
//
// We fix that by binding it.
const boundDiscountCalculator =
    store.calculateDiscount.bind(store);

console.log("\n4. bind()");

console.log(
    "Original Price: $100"
);

console.log(
    "Discounted Price:",
    boundDiscountCalculator(100)
);


// ============================================================
// 5. "this" WITH AN ARROW FUNCTION
// ============================================================
// Arrow functions DO NOT create their own "this".
//
// They inherit "this" from their surrounding scope.
//
// A common e-commerce example is using an arrow function
// inside a class method.

class ProductCatalog {

    constructor() {

        this.products = [
            {
                name: "Laptop",
                price: 1200
            },
            {
                name: "Phone",
                price: 800
            },
            {
                name: "Tablet",
                price: 500
            }
        ];

        this.discount = 10;
    }

    getDiscountedProducts() {

        // The arrow function inherits "this"
        // from getDiscountedProducts().

        return this.products.map(product => {

            return {
                name: product.name,

                price:
                    product.price -
                    (product.price * this.discount / 100)
            };
        });
    }
}

const catalog = new ProductCatalog();

console.log("\n5. Arrow Function");

console.log(
    catalog.getDiscountedProducts()
);


// ============================================================
// BONUS: THE MOST IMPORTANT IDEA
// ============================================================
//
// Ask this question:
//
// "Who is calling the function?"
//
// Example:
//
// product.getTotal()
//
// product is calling getTotal()
// therefore:
//
// this === product
//
//
//
// Another example:
//
// fernandoCart.getTotal()
//
// fernandoCart is calling getTotal()
// therefore:
//
// this === fernandoCart
//
//
//
// With bind():
//
// store.calculateDiscount.bind(store)
//
// We explicitly tell JavaScript:
//
// "Use store as this."


// ============================================================
// QUICK SUMMARY
// ============================================================

console.log("\n==============================");
console.log("THIS KEYWORD CHEAT SHEET");
console.log("==============================");

console.log(`
1. Object Method
   product.getTotal()
   -> this = product

2. Class
   cart.getTotal()
   -> this = cart

3. Event/Method
   button.click()
   -> this = button/object calling it

4. bind()
   function.bind(store)
   -> this = store

5. Arrow Function
   product => ...
   -> inherits this from surrounding scope
`);
