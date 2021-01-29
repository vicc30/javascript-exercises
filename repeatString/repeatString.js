const repeatString = function (str, num) {
    var newStr = '';
    if (num >= 0) {
        for (var i = 0; i < num; i++) {
            newStr += str;
        }
        return newStr;
    }
    else {
        return "ERROR";
    }

};

module.exports = repeatString;
