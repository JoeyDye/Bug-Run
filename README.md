# Bug Run

## Getting Started

To get started, clone the project to your local computer. Next open index.html in your favorite browser. This will start up the game. Once the game is open, you can begin playing. See gameplay instructions below.

Note that for improved performance, I've also included a Gulp file you can use to build the application. If haven't already done so, download [node.js](https://nodejs.org/en/).

Next, You will need to run the following in the root directory to download all dev dependencies.

```bash
npm install
```
Then, simply run the gulp command in the root directory to set up the build folder.

```bash
gulp
```
Once set up, you can use the new index.html file from you newly created build folder to run the game.

## Gameplay

Start the game by selecting a player.

To play, use the following arrow keys to move the player across the screen.

* ↑ up
* ↓ down
* → right
* ← left

## Winning the Game

Your goal is to collect the star without being hit by an enemy. If your player collides with an enemy, he or she will revert back to the starting position. Once you collect the star, you win!