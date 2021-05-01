import { Board, Direction, GameResult } from '../types';
import { evaluateMove } from '../Evaluation';
import { shiftToLeft } from '../Board';

export const moveLeft = (board: Board, direction: Direction): GameResult => {
  const newBoard = shiftToLeft(board);

  const { score, board: evaluatedBoard } = evaluateMove(newBoard, direction);

  return { board: evaluatedBoard, score };
};
