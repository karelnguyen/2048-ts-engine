export enum GameStatus {
  STARTED = "STARTED",
  FINISHED = "FINISHED",
}

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type Board = number[][]

export type Game = {
  board: Board
  score: number
  gameStatus: GameStatus
}

export type GameResult = Omit<Game, "gameStatus">
