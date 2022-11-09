let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 5 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];
/////a
let cartItems = cart.map(getItems);
function getItems(arrayValue) {
  return arrayValue.item;
}
console.log(cartItems);

//to display each item as string we need forEach because map returns us array
cartItems.forEach(function getItems(item) {
  return console.log(item);
});

////b
let totalCost = cart.reduce(getTotPrice,0);
console.log(`Total price is $${totalCost.toFixed(2)}`);

function getTotPrice(accumulator, arrayValue) {
  return (arrayValue.quantity * arrayValue.price) + accumulator;

}
/////with arror function
// let totalCost = cart.reduce((accumulator, currentValue) => {
//   return (currentValue.quantity * currentValue.price) + accumulator;
// },0);
// console.log(`Total price is $${totalCost.toFixed(2)}`);

cart.sort(function(a,b) {
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1

});
console.log(cart);