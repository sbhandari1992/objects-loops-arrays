let lunch = [
    {item: "Steak Fajitas", price: 1},
    {item: "Chips and Guacamole", price: 2},
    {item: "Sweet Tea", price: 3}
];
let lunchLength = lunch.length;
let sum = 0;
let taxRate = 0.08;
let tipsRate = 0.18;

for (let i = 0; i < lunchLength; i++) {
    sum += (lunch[i].price);
    console.log(`total without tax and tips is ${sum}`);
    let totWithTax = (sum + (sum * taxRate));
    console.log(`total amount with tax is ${totWithTax}`);
    let tipsAmt = totWithTax * tipsRate;
    console.log(`tips amount is ${tipsAmt}`);
    let subTotal = sum + totWithTax + tipsAmt;
    console.log(`Your subtotal is ${subTotal}`);

}
