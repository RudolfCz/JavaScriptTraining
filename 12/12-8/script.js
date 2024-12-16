const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const now = new Date(2037, 3, 4);

console.log("US:      ", new Intl.DateTimeFormat("en-US", options).format(now));
console.log("Germany: ", new Intl.DateTimeFormat("de-DE", options).format(now));
console.log("Syria:   ", new Intl.DateTimeFormat("ar-SY", options).format(now));
console.log(
  "Bulgaria:   ",
  new Intl.DateTimeFormat("bg-BG", options).format(now)
);
console.log(
  "Poland:   ",
  new Intl.DateTimeFormat("pl-PL", options).format(now)
);
