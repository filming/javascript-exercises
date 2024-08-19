const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currNum) => total += currNum, 0);
};

const multiply = function(arr) {
  if (arr.length === 0){
    return 0;
  }

  return arr.reduce((product, currNum) => product *= currNum, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let factorialVal = 1;

  for (let i = num; i > 0; i--){
    factorialVal *= i;
  }

  return factorialVal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
