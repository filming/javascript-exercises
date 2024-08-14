const repeatString = function(str, numberOfRepeats) {
    if (numberOfRepeats < 0){
        return "ERROR";
    }

    let repeatedString = "";

    for (let i = 0; i < numberOfRepeats; i++){
        for (let j = 0; j < str.length; j++){
            repeatedString += str[j];
        }
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
