/* Write your code below. Good luck! 🙂 */

const calcAverage = (first, second, third) => (first + second + third)/3

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    let result;
    
    if(avgDolphins >= 2 * avgKoalas){
        result = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if(avgKoalas >= 2 * avgDolphins){
        result = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else{
        result = `No team wins...`;
    }
    
    console.log(result);
}

console.log(scoreDolphins);
console.log(scoreKoalas);

console.log(scoreDolphins2);
console.log(scoreKoalas2);

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);