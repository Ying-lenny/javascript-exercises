const leapYears = function(year) {
    let leapYear = year

    isLeap = leapYear%4 === 0 && (leapYear%100 !== 0 || year%400 === 0)

    if (isLeap) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
