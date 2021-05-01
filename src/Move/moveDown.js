import { evaluateMove } from '../Evaluation';
import { rotateLeft, rotateRight, shiftToLeft } from '../Board';
export var moveDown = function (board, direction) {
    var convertedBoard = rotateRight(board);
    var newBoard = shiftToLeft(convertedBoard);
    var _a = evaluateMove(newBoard, direction), score = _a.score, evaluatedBoard = _a.board;
    return { board: rotateLeft(evaluatedBoard), score: score };
};
