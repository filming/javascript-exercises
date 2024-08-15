const sumAll = function(num1, num2) {
    if (!(typeof num1 === "number") || !(typeof num2 === "number")){
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if ((num1 % 1 != 0) || (num2 % 1 != 0)){
        return "ERROR";
    }

    let sum = 0;
    let smallerNum = 0, biggerNum = 0;

    if (num1 > num2){
        smallerNum = num2;
        biggerNum = num1;
    } 
    else {
        smallerNum = num1;
        biggerNum = num2;
    }

    for (let i = smallerNum; i <= biggerNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
