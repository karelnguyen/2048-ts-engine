import { evaluateMove } from '../Evaluation';
import { shiftToRight } from '../Board';
export var moveRight = function (board, direction) {
    var newBoard = shiftToRight(board);
    var _a = evaluateMove(newBoard, direction), score = _a.score, evaluatedBoard = _a.board;
    return { board: evaluatedBoard, score: score };
};
