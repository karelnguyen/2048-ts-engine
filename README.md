# Getting Started 🚀
`2048-ts-engine` is a typescript based app that handles logic for 2048 game. You can also use plain JS, if Typescript is not needed.

## Installation
```
yarn add 2048-ts-engine
```

## How to use 
- The lib returns two main functions
  - `startGame` - simply starting the game, no parameters are required
  - `move` - accepts these parameters 
  ```ts
  direction: Direction
  game: Game
  ```

Both these functions return the shape of a game with all its relevant data defining the state of the game (board coordinates, score, status etc.) which look like this:
```
{
  "score": 16,
  "board": [
    [ 0, 0, 4, 0 ],
    [ 0, 0, 0, 0 ],
    [ 2, 0, 0, 0 ],
    [ 4, 8, 0, 8 ]
  ],
  "gameStatus": "STARTED"
}
```

You will need need to store the the current state somewhere, since the engine only process the game, and after every move, the current state of game is returned.


```js
import { startGame, move } from '2048-ts-engine';
import { Direction, Game, GameStatus } from '2048-ts-engine/src/types';

const newGame = startGame();
const gameProcessed = move(Direction.UP, {
  "score": 16,
  "board": [
    [ 0, 0, 4, 0 ],
    [ 0, 0, 0, 0 ],
    [ 2, 0, 0, 0 ],
    [ 4, 8, 0, 8 ]
  ],
  "gameStatus": "STARTED"
});
```

## Useful scripts

```bash
  # test game logic
  yarn test
```

