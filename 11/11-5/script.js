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

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  

const accounts = [account1, account2, account3, account4];

const movements = {
    movements1: account1.movements,
    movements2: account2.movements,
    movements3: account3.movements,
    movements4: account4.movements,
  };

// accumulator -> SNOWBALL
const balances = {};
for (const [key, movement] of Object.entries(movements)) {
  balances[key] = movement.reduce((acc, cur) => acc + cur, 0);
}

console.log(balances);
