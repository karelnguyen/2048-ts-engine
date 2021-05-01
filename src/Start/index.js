import { getDefaultBoard } from '../Board';
import { GameStatus } from '../types';
export var startGame = function (board) {
    if (board === void 0) { board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]; }
    return ({
        board: getDefaultBoard(board),
        gameStatus: GameStatus.STARTED,
        score: 0,
    });
};
