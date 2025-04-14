import { Size } from "../types";
const search = "Kurcz";
const someArray = [
    { id: 1, name: "Kurczak", price: 2500, size: Size.S },
    { id: 2, name: "Kurczak po chińsku", price: 3000, size: Size.M },
    { id: 3, name: "Wołowina", price: 4000, size: Size.M }
];
/*
 Please use filter method to get new array of
 products with "Kurcz" in the name.
*/
const chickenArray = someArray.filter((product) => product.name.includes(search));
console.log("Chicken array:");
console.log(chickenArray);
/*
 Please use filter method to get new array of
 products with name length longer than 7
*/
const longArray = someArray.filter((product) => product.name.length > 7);
console.log("Long names array:");
console.log(longArray);
