const sumAll = function(start, end) {
    let number = 0;

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }

    if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (end < start) {
        const temp = start
        start = end
        end = temp
    }

    for (let i = start; i < end + 1; i++) {
        number += i;
    }
    return number;
};

// Do not edit below this line
module.exports = sumAll;
