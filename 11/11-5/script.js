const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

const balance2 = movements.reduce((acc, cur) => acc + cur, 0);

let balance3 = 0;
for (const mov of movements) balance3 += mov;

console.log(balance);
console.log(balance2);
console.log(balance3);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
