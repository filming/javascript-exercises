const fibonacci = function(num) {
    // handling edge cases
    if (num < 0){
        return "OOPS";
    }
    else if (num < 2){
        return +num; // '+' makes sure that strings get converted into numbers on return
    }

    // create fibonacci sequence array
    const fibonacciArr = [0, 1];

    while (fibonacciArr.length <= num){
        const sumOfPreviousTwo = fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2];
        fibonacciArr.push(sumOfPreviousTwo);
    }

    return fibonacciArr[fibonacciArr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
