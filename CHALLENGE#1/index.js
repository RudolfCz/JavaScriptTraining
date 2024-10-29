/* Write your code below. Good luck! 🙂 */

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI;
if (BMIMark >> BMIJohn){
    markHigherBMI = true;
}
else {
    markHigherBMI = false;
}

console.log(BMIMark);
console.log(BMIJohn)
console.log(markHigherBMI);