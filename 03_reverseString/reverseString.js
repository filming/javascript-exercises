const reverseString = function(str) {
    const reversedStrChars = [];

    for (let i = str.length-1; i >= 0; i--){
        reversedStrChars.push(str[i]);
    }

    return reversedStrChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
