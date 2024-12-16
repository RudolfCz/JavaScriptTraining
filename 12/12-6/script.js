console.log("Create a date");
const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.log("Working with dates");
const future = new Date(2040, 4, 15, 23, 45, 53);
console.log(future);
console.log(`Year ${future.getFullYear()}`);
console.log(`Month ${future.getMonth()}`);
console.log(`Date ${future.getDate()}`);
console.log(`Day ${future.getDay()}`);
console.log(`Hour ${future.getHours()}`);
console.log(`Minute ${future.getMinutes()}`);
console.log(`Second ${future.getSeconds()}`);
console.log(`ISOString ${future.toISOString()}`);
console.log(`Time ${future.getTime()}`);

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
