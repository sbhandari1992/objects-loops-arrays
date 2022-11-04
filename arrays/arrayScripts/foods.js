let lunch = [
    {item: "Steak Fajitas", price: 10},
    {item: "Chips and Guacamole", price: 20},
    {item: "Sweet Tea", price: 30}
];
let lunchLength = lunch.length;
let sum = 0;
let taxRate = 0.08;
let tipsRate = 0.18;
let totWithTax;
let tipsAmt;
let subTotal;
let taxAmt;

for (let i = 0; i < lunchLength; i++) {
    sum += (lunch[i].price);
    taxAmt = sum * taxRate;
    totWithTax = sum + taxAmt;
    tipsAmt = totWithTax * tipsRate;
    subTotal = totWithTax + tipsAmt;

}
console.log(`Total without tax and tips is $${sum}`);
console.log(`Tax amount is $${taxAmt}`);
console.log(`Tips amount is $${tipsAmt}`);

console.log(`Your subtotal is $${subTotal}`);



