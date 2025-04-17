function ShoppingCart() {
  this.products = [];
  this.addProduct = function(product) {
    this.products.push(product);
  };
  this.removeProduct = function(productName) {
    this.products = this.products.filter(p => p.name !== productName);
  };
  this.getTotal = function() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  };

  this.displayProducts = function() {
   
      console.log("Products in Cart:");
      this.products.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name} - $${product.price}`);
      });
    
  };
}
const cart = new ShoppingCart();

cart.addProduct({ name: "Shoes", price: 49 });
cart.addProduct({ name: "Shirt", price: 19 });
cart.addProduct({ name: "Hat", price: 12});

console.log("Total:", cart.getTotal()); 
cart.displayProducts();
cart.removeProduct("Shirt");
console.log("After removal:");
cart.displayProducts();
console.log("Total after removing Shirt:", cart.getTotal()); 
