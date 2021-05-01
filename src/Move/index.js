import { Direction, GameStatus } from "../types";
import { moveUp } from "./moveUp";
import { moveRight } from "./moveRight";
import { moveDown } from "./moveDown";
import { moveLeft } from "./moveLeft";
import { placeRandomNumber, hasBoardChanged } from "../Board";
var nextResultByDirection = function (board, direction) {
    var resultMapper = new Map([
        [Direction.UP, moveUp(board, direction)],
        [Direction.DOWN, moveDown(board, direction)],
        [Direction.LEFT, moveLeft(board, direction)],
        [Direction.RIGHT, moveRight(board, direction)],
    ]);
    return resultMapper.get(direction);
};
export var hasOtherMoves = function (board) {
    var moves = [
        hasBoardChanged(board, moveUp(board, Direction.UP).board),
        hasBoardChanged(board, moveDown(board, Direction.DOWN).board),
        hasBoardChanged(board, moveLeft(board, Direction.LEFT).board),
        hasBoardChanged(board, moveRight(board, Direction.RIGHT).board),
    ];
    return moves.includes(true);
};
export var move = function (direction, game) {
    var isGameRunning = game.gameStatus === GameStatus.STARTED;
    var _a = nextResultByDirection(game.board, direction), board = _a.board, score = _a.score;
    var hasChanged = hasBoardChanged(game.board, board);
    if (!hasChanged || !isGameRunning)
        return game;
    var nextBoard = placeRandomNumber(board);
    var canContinue = hasOtherMoves(nextBoard);
    if (!canContinue) {
        return {
            score: game.score,
            board: board,
            gameStatus: GameStatus.FINISHED,
        };
    }
    return {
        score: game.score + score,
        board: nextBoard,
        gameStatus: GameStatus.STARTED,
    };
};
