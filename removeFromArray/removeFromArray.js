const removeFromArray = function (arr, ...remove) {
    var newArr = arr;
    var removeElement = [...remove]
    for (var j = 0; j < removeElement.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === removeElement[j]) {
                newArr.splice(i, 1);
            }
        }
    }
    return newArr;
}

module.exports = removeFromArray
