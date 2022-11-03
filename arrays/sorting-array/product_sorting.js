let products = [
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89}
    
];

products.sort(function(a,b){
    if (a.product < b.product) return -1;
    else if (a.product == b.product) return 0;
    else return 1

});
// console.log(products);
let productsLength = products.length;
console.log(productsLength);
for (let i = 0; i < productsLength; i++) {
    console.log(`accending product title ${i + 1} is ${products[i].product}`);

}
