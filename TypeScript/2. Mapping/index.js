import { Size } from "../types";
const someArray = [
    { id: 1, name: "Kurczak", price: 2500, size: Size.S },
    { id: 2, name: "Kurczak po chińsku", price: 3000, size: Size.S },
    { id: 3, name: "Wołowina", price: 4000, size: Size.M }
];
/*
  Add price (in grosz) to Product type (and to someArray values).
  Please use map method to return array of names and array of prices.
  Change type "any" to proper one.
*/
const arrayOfNames = someArray.map((product) => product.name);
const arrayOfPrices = someArray.map((product) => product.price);
console.log("Array of names:");
console.log(arrayOfNames);
console.log("Array of prices:");
console.log(arrayOfPrices);
/*
  Please use map to return array of strings like "Kurczak: 5.00zł"
  Check toFixed function to get 2 digits after comma.
*/
const resultArray = someArray.map((product) => `${product.name}: ${(product.price / 100).toFixed(2)}zł`);
console.log("Result:");
console.log(resultArray);
