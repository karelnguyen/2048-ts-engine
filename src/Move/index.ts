import { Board, Direction, Game, GameResult, GameStatus } from "../types"
import { moveUp } from "./moveUp"
import { moveRight } from "./moveRight"
import { moveDown } from "./moveDown"
import { moveLeft } from "./moveLeft"
import { placeRandomNumber, hasBoardChanged } from "../Board"

const nextResultByDirection = (
  board: Board,
  direction: Direction
): GameResult => {
  const resultMapper: Map<Direction, GameResult> = new Map([
    [Direction.UP, moveUp(board, direction)],
    [Direction.DOWN, moveDown(board, direction)],
    [Direction.LEFT, moveLeft(board, direction)],
    [Direction.RIGHT, moveRight(board, direction)],
  ])

  return resultMapper.get(direction) as GameResult
}

export const hasOtherMoves = (board: Board): boolean => {
  const moves = [
    hasBoardChanged(board, moveUp(board, Direction.UP).board),
    hasBoardChanged(board, moveDown(board, Direction.DOWN).board),
    hasBoardChanged(board, moveLeft(board, Direction.LEFT).board),
    hasBoardChanged(board, moveRight(board, Direction.RIGHT).board),
  ]

  return moves.includes(true)
}

export const move = (direction: Direction, game: Game): Game => {
  const isGameRunning = game.gameStatus === GameStatus.STARTED
  const { board, score } = nextResultByDirection(game.board, direction)
  const hasChanged = hasBoardChanged(game.board, board)

  if (!hasChanged || !isGameRunning) return game

  const nextBoard = placeRandomNumber(board)
  const canContinue = hasOtherMoves(nextBoard)

  if (!canContinue) {
    return {
      score: game.score,
      board: board,
      gameStatus: GameStatus.FINISHED,
    }
  }

  return {
    score: game.score + score,
    board: nextBoard,
    gameStatus: GameStatus.STARTED,
  }
}
