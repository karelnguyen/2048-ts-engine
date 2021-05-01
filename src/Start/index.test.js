import { startGame } from "../Start";
import { GameStatus } from "../types";
test("Start game", function () {
    var _a = startGame(), board = _a.board, gameStatus = _a.gameStatus, score = _a.score;
    // board is randomized, cannot test actual values in tiles
    expect(board.length).toBeGreaterThan(0);
    expect(score).toBe(0);
    expect(gameStatus).toBe(GameStatus.STARTED);
});
