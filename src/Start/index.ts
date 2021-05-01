import { getDefaultBoard } from '../Board';
import { Board, Game, GameStatus } from '../types';

export const startGame = (
  board: Board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]
): Game => ({
  board: getDefaultBoard(board),
  gameStatus: GameStatus.STARTED,
  score: 0,
});
