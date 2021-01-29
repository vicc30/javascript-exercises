const sumAll = function (num1, num2) {
    var sum = 0;
    var major;
    var lower;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 > num2) {
        major = num1;
        lower = num2;
    } else {
        major = num2;
        lower = num1;
    }

    for (var i = lower; i <= major; i++) {
        sum = sum + i;
    }
    return sum;
}

module.exports = sumAll
