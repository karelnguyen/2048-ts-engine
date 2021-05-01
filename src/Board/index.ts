import { Board } from '../types';
import { randomStartingNumber } from './utils';

export const rotateRight = (board: Board): Board => {
  const result = [];

  for (let c = 0; c < board.length; c++) {
    const row = [];
    for (let r = board.length - 1; r >= 0; r--) {
      row.push(board[r][c]);
    }
    result.push(row);
  }

  return result;
};

export const rotateLeft = (board: Board): Board => {
  const result = [];

  for (let c = board.length - 1; c >= 0; c--) {
    const row = [];
    for (let r = board.length - 1; r >= 0; r--) {
      row.unshift(board[r][c]);
    }
    result.push(row);
  }

  return result;
};

export const shiftToRight = (board: Board): Board => {
  const newBoard = [];

  for (let r = 0; r < board.length; r++) {
    const row = [];
    for (let c = 0; c < board[r].length; c++) {
      const current = board[r][c];
      current === 0 ? row.unshift(current) : row.push(current);
    }
    newBoard.push(row);
  }

  return newBoard;
};

export const shiftToLeft = (board: Board): Board => {
  const newBoard = [];

  for (let r = 0; r < board.length; r++) {
    const row = [];
    for (let c = board[r].length - 1; c >= 0; c--) {
      const current = board[r][c];
      current === 0 ? row.push(current) : row.unshift(current);
    }
    newBoard.push(row);
  }

  return newBoard;
};

export const getBlankCoordinates = (board: Board): Board => {
  const blankCoordinates = [];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === 0) {
        blankCoordinates.push([r, c]);
      }
    }
  }

  return blankCoordinates;
};

export const placeRandomNumber = (board: Board): Board => {
  const blankCoordinates = getBlankCoordinates(board);
  if (!blankCoordinates.length) return board;

  const randomCoordinate = blankCoordinates[Math.floor(Math.random() * blankCoordinates.length)];

  const randomNumber = randomStartingNumber();
  board[randomCoordinate[0]][randomCoordinate[1]] = randomNumber;
  return board;
};

export const getDefaultBoard = (board: Board): Board => placeRandomNumber(placeRandomNumber(board));

export const hasBoardChanged = (original: Board, updated: Board): boolean => {
  return JSON.stringify(updated) !== JSON.stringify(original) ? true : false;
};
