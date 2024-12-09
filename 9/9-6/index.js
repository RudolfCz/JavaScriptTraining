const rest = new Map();
rest.set("name", "Restauracja pod strumykiem");
rest.set(1, "Cichosze, Poland");
console.log(rest.set(2, "Lidzbark, Poland"));

rest
  .set("categories", ["Italian", "Pizzeria", "Organic"])
  .set("open", 8)
  .set("close", 22)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 13;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
