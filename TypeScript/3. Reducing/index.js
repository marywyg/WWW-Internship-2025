import { Size } from "../types";
const someArray = [
    { id: 1, name: "Kurczak", price: 2500, size: Size.S },
    { id: 2, name: "Kurczak po chińsku", price: 3000, size: Size.M },
    { id: 3, name: "Wołowina", price: 4000, size: Size.M }
];
/*
  Add size enum ("S", "M", "L") to Product type.
  Calculate sum of prices of all "M" size products.
  Format like "25.00zł";
*/
const sumOfMediumProducts = someArray.reduce((sum, product) => {
    if (product.size == "M") {
        return (sum + product.price) / 100;
    }
    return sum / 100;
}, 0).toFixed(2) + "zł";
console.log("Sum of medium products:");
console.log(sumOfMediumProducts);
/*
  Calculate number of products with "S" size.
  Once use reduce method, once use filter + length.
*/
const numberOfProductsWithReduce = someArray.reduce((sum, product) => {
    if (product.size == "S") {
        return sum + 1;
    }
    else {
        return sum;
    }
}, 0);
const numberOfProductsWithFilter = someArray.filter((product) => product.size == "S").length;
console.log("Number of products with reduce:");
console.log(numberOfProductsWithReduce);
console.log("Number of products with filter:");
console.log(numberOfProductsWithFilter);
