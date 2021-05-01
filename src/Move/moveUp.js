import { rotateRight, shiftToRight, rotateLeft } from '../Board';
import { evaluateMove } from '../Evaluation';
export var moveUp = function (board, direction) {
    var convertedBoard = rotateRight(board);
    var newBoard = shiftToRight(convertedBoard);
    var _a = evaluateMove(newBoard, direction), score = _a.score, evaluatedBoard = _a.board;
    return { board: rotateLeft(evaluatedBoard), score: score };
};
