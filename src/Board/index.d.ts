import { Board } from '../types';
export declare const rotateRight: (board: Board) => Board;
export declare const rotateLeft: (board: Board) => Board;
export declare const shiftToRight: (board: Board) => Board;
export declare const shiftToLeft: (board: Board) => Board;
export declare const getBlankCoordinates: (board: Board) => Board;
export declare const placeRandomNumber: (board: Board) => Board;
export declare const getDefaultBoard: (board: Board) => Board;
export declare const hasBoardChanged: (original: Board, updated: Board) => boolean;
