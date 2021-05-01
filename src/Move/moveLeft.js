import { evaluateMove } from '../Evaluation';
import { shiftToLeft } from '../Board';
export var moveLeft = function (board, direction) {
    var newBoard = shiftToLeft(board);
    var _a = evaluateMove(newBoard, direction), score = _a.score, evaluatedBoard = _a.board;
    return { board: evaluatedBoard, score: score };
};
