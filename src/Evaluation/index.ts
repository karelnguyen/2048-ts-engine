import { Board, Direction, GameResult } from "../types"

export const evaluateMove = (
  board: Board,
  direction: Direction
): GameResult => {
  const isNegative = [Direction.UP, Direction.RIGHT].includes(direction)
  let score = 0

  for (let r = 0; r < board.length; r++) {
    for (let c = board[r].length - 1; c >= 0; c--) {
      const tileC = isNegative ? c - 1 : c + 1
      if (board[r][c] > 0 && board[r][c] === board[r][tileC]) {
        board[r][c] = board[r][c] * 2
        board[r][tileC] = 0
        score += board[r][c]
      } else if (board[r][c] === 0 && board[r][tileC] > 0) {
        board[r][c] = board[r][tileC]
        board[r][tileC] = 0
      }
    }
  }

  return {
    score,
    board,
  }
}
