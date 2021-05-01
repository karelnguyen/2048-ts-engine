import { startGame } from "../Start"
import { GameStatus } from "../types"

test("Start game", () => {
  const { board, gameStatus, score } = startGame()
  // board is randomized, cannot test actual values in tiles
  expect(board.length).toBeGreaterThan(0)
  expect(score).toBe(0)
  expect(gameStatus).toBe(GameStatus.STARTED)
})
