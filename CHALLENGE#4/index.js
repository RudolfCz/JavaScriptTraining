const bill = 275;

/* Write your code below. Good luck! 🙂 */
let tip;

if(bill >= 50 && bill <= 300){
    tip = bill*0.15;

} else {
    tip = bill*0.2;
}

let total = bill + tip;
console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + total)