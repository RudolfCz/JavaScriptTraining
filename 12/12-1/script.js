console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log("Conversion");
console.log(Number("23"));
console.log(+"23");

console.log("Filter");
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));
console.log(Number.parseInt("  2.5rem  "));
console.log(Number.parseFloat("  2.5rem  "));

console.log("Is Not a Number");
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

console.log("Is Finite");
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

console.log("Is Integer");
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
