const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(movements);
console.log(lastWithdrawal);

// "Your last large (more than 2000) movement was X movements ago"

const lastLargeMovement = movements.findLastIndex((mov) => mov > 2000);
const lastTime = movements.length - lastLargeMovement;

console.log(`Your last large movement was ${lastTime} movements ago`);
