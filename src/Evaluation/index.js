import { Direction } from "../types";
export var evaluateMove = function (board, direction) {
    var isNegative = [Direction.UP, Direction.RIGHT].includes(direction);
    var score = 0;
    for (var r = 0; r < board.length; r++) {
        for (var c = board[r].length - 1; c >= 0; c--) {
            var tileC = isNegative ? c - 1 : c + 1;
            if (board[r][c] > 0 && board[r][c] === board[r][tileC]) {
                board[r][c] = board[r][c] * 2;
                board[r][tileC] = 0;
                score += board[r][c];
            }
            else if (board[r][c] === 0 && board[r][tileC] > 0) {
                board[r][c] = board[r][tileC];
                board[r][tileC] = 0;
            }
        }
    }
    return {
        score: score,
        board: board,
    };
};
