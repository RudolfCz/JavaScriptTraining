const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = temps[i];
    if (currentTemp < min) min = temps[i];
  }

  console.log(max);
  console.log(min);

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
