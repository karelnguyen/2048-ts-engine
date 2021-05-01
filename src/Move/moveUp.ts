import { Board, Direction, GameResult } from '../types';
import { rotateRight, shiftToRight, rotateLeft } from '../Board';
import { evaluateMove } from '../Evaluation';

export const moveUp = (board: Board, direction: Direction): GameResult => {
  const convertedBoard = rotateRight(board);
  const newBoard = shiftToRight(convertedBoard);

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction);

  return { board: rotateLeft(evaluatedBoard), score };
};
