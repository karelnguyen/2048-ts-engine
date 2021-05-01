export declare enum GameStatus {
    STARTED = "STARTED",
    FINISHED = "FINISHED"
}
export declare enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
export declare type Board = number[][];
export declare type Game = {
    board: Board;
    score: number;
    gameStatus: GameStatus;
};
export declare type GameResult = Omit<Game, "gameStatus">;
