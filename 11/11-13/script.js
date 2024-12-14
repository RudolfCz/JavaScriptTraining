console.log("Bad way: ") // wpływa na bazową tablicę
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const reversedMovements = movements.reverse();
console.log(reversedMovements);
console.log(movements);

console.log("Good way: ")
let movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements2);
const goodReversedMovements = movements2.toReversed();
console.log(goodReversedMovements);
console.log(movements2);