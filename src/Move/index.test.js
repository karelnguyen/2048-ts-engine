import { move } from "../Move";
import { Direction, GameStatus } from "../types";
describe("Test moves with direction and mocked game", function () {
    test("Move up", function () {
        var initialBoard = [
            [2, 0, 4, 0],
            [2, 0, 4, 0],
            [0, 0, 0, 0],
            [2, 0, 0, 0],
        ];
        var game = {
            board: initialBoard,
            gameStatus: GameStatus.STARTED,
            score: 42,
        };
        var _a = move(Direction.UP, game), gameStatus = _a.gameStatus, score = _a.score;
        expect(score).toBe(54);
        expect(gameStatus).toBe(GameStatus.STARTED);
    });
    test("Move down", function () {
        var initialBoard = [
            [2, 2, 0, 4],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [2, 0, 0, 0],
        ];
        var game = {
            board: initialBoard,
            gameStatus: GameStatus.STARTED,
            score: 42,
        };
        var _a = move(Direction.DOWN, game), gameStatus = _a.gameStatus, score = _a.score;
        expect(score).toBe(50);
        expect(gameStatus).toBe(GameStatus.STARTED);
    });
    test("Move left", function () {
        var initialBoard = [
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        var game = {
            board: initialBoard,
            gameStatus: GameStatus.STARTED,
            score: 42,
        };
        var _a = move(Direction.LEFT, game), gameStatus = _a.gameStatus, score = _a.score;
        expect(score).toBe(46);
        expect(gameStatus).toBe(GameStatus.STARTED);
    });
    test("Move right", function () {
        var initialBoard = [
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        var game = {
            board: initialBoard,
            gameStatus: GameStatus.STARTED,
            score: 42,
        };
        var _a = move(Direction.RIGHT, game), gameStatus = _a.gameStatus, score = _a.score;
        expect(score).toBe(46);
        expect(gameStatus).toBe(GameStatus.STARTED);
    });
    test("No new moves", function () {
        var initialBoard = [
            [2, 2, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        var game = {
            board: initialBoard,
            gameStatus: GameStatus.FINISHED,
            score: 42,
        };
        var _a = move(Direction.RIGHT, game), gameStatus = _a.gameStatus, score = _a.score;
        expect(score).toBe(42);
        expect(gameStatus).toBe(GameStatus.FINISHED);
    });
});
