/* Write your code below. Good luck! 🙂 */

const calcAverage = (first, second, third) => (first + second + third)/3

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }
    
    if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    }
    
    return `No team wins...`;
}

console.log(scoreDolphins);
console.log(scoreKoalas);

console.log(scoreDolphins2);
console.log(scoreKoalas2);

console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(scoreDolphins2, scoreKoalas2));
