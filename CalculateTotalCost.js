function CalculateTotalCost(products){
    let sum =0;
    for (let i = 0 ; i < products.length;i++){
        sum = sum + products[i].price;
       
    }
    return sum;
}

let totalCost = ([{ name: "Dano Milk", price: 500 }, 
{ name: "Taaza Tea", price: 200}, 
{ name: 'Fresh Sugar', price:300} ]);

console.log(CalculateTotalCost(totalCost));