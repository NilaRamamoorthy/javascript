const inventory=[
    {name:"apple", quantity:3},
    {name:"orange",quantity:4},
    {name:"banana",quantity:8}
    
];
function addProduct(name,quantity) {
    inventory.push({name,quantity})
}
// console.log(inventory);

const name=prompt("Enter a name to delete")
// const quantity=prompt("Enter a quantity for the person")
// addProduct()
// console.log(inventory);
//Remove product by name

(function removeProduct(name) {
    const index = inventory.findIndex(product => product.name.toLowerCase() === name.toLowerCase());
  
    if (index !== -1) {
      inventory.splice(index, 1);
      console.log(`🗑️ Product "${name}" removed from inventory.`);
    } else {
      console.log(`❌ Product "${name}" not found.`);
    }
)