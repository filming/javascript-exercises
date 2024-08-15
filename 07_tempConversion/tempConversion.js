const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5/9);

  if (tempInCelsius % 1 != 0){
    tempInCelsius = Number(tempInCelsius.toFixed(1));
  }

  return tempInCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = (tempInCelsius * (9/5) + 32);

  if (tempInFahrenheit % 1 != 0){
    tempInFahrenheit = Number(tempInFahrenheit.toFixed(1));
  }

  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
