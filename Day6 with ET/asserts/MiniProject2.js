let inventory = [
  { name: "Pen", quantity: 20 },
  { name: "Notebook", quantity: 15 },
  { name: "Eraser", quantity: 30 }
];

function addProduct(name, quantity) {
  inventory.push({ name, quantity })
  displayInventory();
}
function removeProduct() {
  const name = prompt("Enter product name to remove:");

  const index = inventory.findIndex(p => p.name.toLowerCase() === name.toLowerCase());

  if (index !== -1) {
    const removed = inventory.splice(index, 1);
  } else {
    console.log("Product not found.");
  }

  displayInventory();
}

function displayInventory() {
  console.log("The updated Inventory");
  inventory.forEach(val => {
    console.log(`${val.name}: ${val.quantity}`);
  });
}
let input = prompt("Enter 1 to add, 2 to remove, 3 to display")

if (input > 0 && input <= 3) {
  if (input == 1) {
    let name = prompt("Enter product to add")
    let quantity = prompt("Enter the quantity")
    addProduct(name, quantity)
  }
  if (input == 2) {
    removeProduct()
  }
  if (input == 3) {
    displayInventory();
  }
}
else{
  console.log("Invalid Input");
  
}