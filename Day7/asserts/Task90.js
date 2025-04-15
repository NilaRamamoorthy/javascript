
function ShoppingCart() {
    this.products = []; 
    this.addProduct = function(product) {
      this.products.push(product);
    };
    this.removeProduct = function(productName) {
        const index = this.products.findIndex(p => p.name === productName);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
      };
    this.getTotalPrice = function() {
      return this.products.reduce((total, p) => total + p.price, 0);
    };
  }
  const product =[ new  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 3000 },
   { name: "Charger", price: 1000 }]
  
  const cart = new ShoppingCart();
  cart.addProduct(product1);
  cart.addProduct(product2);
  cart.addProduct(product3);

  cart.removeProduct("Headphones");
 
  console.log("Total Price: ₹" + cart.getTotalPrice());

  console.log("Cart Contents:", cart.products);
  