const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const calcWeeksPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24 * 7);

const date1 = new Date(2037, 3, 4);
const date2 = new Date(2037, 3, 14);

const days1 = calcDaysPassed(date1, date2);
const days2 = `${Math.floor(calcWeeksPassed(date1, date2))} weeks, ${
  calcDaysPassed(date1, date2) % 7
} days`;

console.log(days1);
console.log(days2);

const num = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
