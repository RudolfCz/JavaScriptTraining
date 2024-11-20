const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  console.log(`Weather for next days :`);
  
  for (let i = 0; i < arr.length; i++) {
    currentTemp = arr[i];
    console.log(`${currentTemp} deg in ${i + 1} days...`);
  }
};

printForecast(data1);
printForecast(data2);
