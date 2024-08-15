const leapYears = function(year) {
    let validLeapYear = false;

    if (year % 100 === 0){
        if (year % 400 === 0){
            validLeapYear = true;
        }
    }
    else if (year % 4 === 0){
        validLeapYear = true;
    }

    return validLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
