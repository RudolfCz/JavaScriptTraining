console.log("Importing module");

import { addToCart, totalPrice as  price, tq } from "../shoppingCart.js";

addToCart('bread', 5);
console.log(price, tq)