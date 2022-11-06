let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.79},
    {product: "SwedishFish", price: 3.79},
    {product: "Milk Bite", price: 5.79},
    {product: "shara m&ms", price: 2.89},
    {product: "candy Worms", price: 2.79},
    {product: "jelly Fish", price: 3.79},
];
let mmCandies = []; 
let cheapCandies = [];
let isSwedishFish = "NO";
for (let i = 0; i < products.length; i++) {
    if ((products[i].product.toLowerCase().includes('m&ms'))) {
        mmCandies.push(products[i].product);
    }
    if (products[i].price < 4.0 ) {
        cheapCandies.push(products[i].product);
    }
    if (products[i].product.toLowerCase().includes('swedish fish')) {
        isSwedishFish = products[i].product;
    }
    (products[i].product.toLowerCase().includes('swedish fish')) ? isSwedishFish = 'YES': isSwedishFish;

}

// Which candies costs less than $4.00?
console.log(`Candies name which cost less then 4.0  are: ${cheapCandies}`);
// Which candies has "M&M" its name?
console.log(`Candies name with M&M are: ${mmCandies}`);
// Do we carry "Swedish Fish"?
console.log(`Do we carry "Swedish Fish: ${isSwedishFish}`);


    