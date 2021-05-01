import { move } from "../Move"
import { Direction, Game, GameStatus } from "../types"

describe("Test moves with direction and mocked game", () => {
  test("Move up", () => {
    const initialBoard = [
      [2, 0, 4, 0],
      [2, 0, 4, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
    ]
    const game: Game = {
      board: initialBoard,
      gameStatus: GameStatus.STARTED,
      score: 42,
    }
    const { gameStatus, score } = move(Direction.UP, game)

    expect(score).toBe(54)
    expect(gameStatus).toBe(GameStatus.STARTED)
  })

  test("Move down", () => {
    const initialBoard = [
      [2, 2, 0, 4],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
    ]
    const game: Game = {
      board: initialBoard,
      gameStatus: GameStatus.STARTED,
      score: 42,
    }
    const { gameStatus, score } = move(Direction.DOWN, game)

    expect(score).toBe(50)
    expect(gameStatus).toBe(GameStatus.STARTED)
  })

  test("Move left", () => {
    const initialBoard = [
      [2, 2, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const game: Game = {
      board: initialBoard,
      gameStatus: GameStatus.STARTED,
      score: 42,
    }
    const { gameStatus, score } = move(Direction.LEFT, game)

    expect(score).toBe(46)
    expect(gameStatus).toBe(GameStatus.STARTED)
  })

  test("Move right", () => {
    const initialBoard = [
      [2, 2, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const game: Game = {
      board: initialBoard,
      gameStatus: GameStatus.STARTED,
      score: 42,
    }
    const { gameStatus, score } = move(Direction.RIGHT, game)

    expect(score).toBe(46)
    expect(gameStatus).toBe(GameStatus.STARTED)
  })

  test("No new moves", () => {
    const initialBoard = [
      [2, 2, 0, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const game: Game = {
      board: initialBoard,
      gameStatus: GameStatus.FINISHED,
      score: 42,
    }
    const { gameStatus, score } = move(Direction.RIGHT, game)

    expect(score).toBe(42)
    expect(gameStatus).toBe(GameStatus.FINISHED)
  })
})
