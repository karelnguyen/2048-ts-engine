import { randomStartingNumber } from './utils';
export var rotateRight = function (board) {
    var result = [];
    for (var c = 0; c < board.length; c++) {
        var row = [];
        for (var r = board.length - 1; r >= 0; r--) {
            row.push(board[r][c]);
        }
        result.push(row);
    }
    return result;
};
export var rotateLeft = function (board) {
    var result = [];
    for (var c = board.length - 1; c >= 0; c--) {
        var row = [];
        for (var r = board.length - 1; r >= 0; r--) {
            row.unshift(board[r][c]);
        }
        result.push(row);
    }
    return result;
};
export var shiftToRight = function (board) {
    var newBoard = [];
    for (var r = 0; r < board.length; r++) {
        var row = [];
        for (var c = 0; c < board[r].length; c++) {
            var current = board[r][c];
            current === 0 ? row.unshift(current) : row.push(current);
        }
        newBoard.push(row);
    }
    return newBoard;
};
export var shiftToLeft = function (board) {
    var newBoard = [];
    for (var r = 0; r < board.length; r++) {
        var row = [];
        for (var c = board[r].length - 1; c >= 0; c--) {
            var current = board[r][c];
            current === 0 ? row.push(current) : row.unshift(current);
        }
        newBoard.push(row);
    }
    return newBoard;
};
export var getBlankCoordinates = function (board) {
    var blankCoordinates = [];
    for (var r = 0; r < board.length; r++) {
        for (var c = 0; c < board[r].length; c++) {
            if (board[r][c] === 0) {
                blankCoordinates.push([r, c]);
            }
        }
    }
    return blankCoordinates;
};
export var placeRandomNumber = function (board) {
    var blankCoordinates = getBlankCoordinates(board);
    if (!blankCoordinates.length)
        return board;
    var randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];
    var randomNumber = randomStartingNumber();
    board[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
    return board;
};
export var getDefaultBoard = function (board) { return placeRandomNumber(placeRandomNumber(board)); };
export var hasBoardChanged = function (original, updated) {
    return JSON.stringify(updated) !== JSON.stringify(original) ? true : false;
};
