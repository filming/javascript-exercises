const palindromes = function (str) {
    // remove unnecessary characters
    const strSanitizedCharArr = [];

    for (let i = 0; i < str.length; i++){
        // making sure current char is [0-9][A-Z][a-z]
        const currCharDecimal = str.charCodeAt(i);

        if ((currCharDecimal >= 48 && currCharDecimal <= 57) || (currCharDecimal >= 97 && currCharDecimal <= 122)){
            // it's a digit or lowercase letter
            strSanitizedCharArr.push(str[i]);
        } 
        else if (currCharDecimal >= 65 && currCharDecimal <= 90){
            // it's an uppercase letter
            strSanitizedCharArr.push(str[i].toLowerCase());
        }
    }

    const strSanitized = strSanitizedCharArr.join("");

    // modify the char arr in-place to avoid creating a new array
    let left = 0, right = strSanitizedCharArr.length - 1;

    while (left < right){
        const temp = strSanitizedCharArr[right]
        strSanitizedCharArr[right] = strSanitizedCharArr[left];
        strSanitizedCharArr[left] = temp;

        left += 1;
        right -= 1;
    }

    const strSanitizedReversed = strSanitizedCharArr.join("");
    
    return strSanitized === strSanitizedReversed;
};

// Do not edit below this line
module.exports = palindromes;
