const product = {
    label : "Red notebook",
    price : 1,
    stock : 201,
    saleprice : undefined,
    rating : 4.2

}

const {label:productlabel,price,stock,rating = 5} = product

console.log(productlabel)
console.log(price)
console.log(stock)
console.log(rating)