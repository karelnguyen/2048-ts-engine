export var randomStartingNumber = function (startingNumbers) {
    if (startingNumbers === void 0) { startingNumbers = [2, 4]; }
    var randomNumber = startingNumbers[Math.floor(Math.random() * startingNumbers.length)];
    return randomNumber;
};
