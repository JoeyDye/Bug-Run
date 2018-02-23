/** @description Opens character select modal on load */
$('#startModal').modal({
  backdrop: 'static', keyboard: false
});
$('#startModal').modal('show');


/**
 * @constructor
 * @description Parent class for all game objects. Includes shared properties such as position, sprite, and speed. Also, includes shared render method.
 * @param { number } x - x-coordinate
 * @param { number } y - y-coordinate
 * @param { string } sprite - image file path
 * @param { number } speed - value to be multiplied by dt
 */
class GameObject {
  constructor(x, y, sprite, speed) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.speed = speed;
  }

  /** @description Multiplies any movement by the dt parameter to ensure the game runs at the same
   * speed for all computers.
   * @param { number } dt = delta time
   */
  update(dt) {
    this.x += dt * this.speed;
    this.checkCollisions();
    this.resetEnemy();
  }


  /** @description Handles display of game object.
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

/**
 * @constructor
 * @description Enemies our player must avoid. Handles enemy rendering, movement, reseting, and collision checking.
 * @param Borrows all params from GameObject
 */
class Enemy extends GameObject{
  constructor(x, y, sprite = 'images/enemy-bug.png', speed =  Math.floor(Math.random() * (250 - 150) + 150)) {
    super(x, y, sprite, speed);
  }

  /** @description Checks for enemy player collisions and restarts player on collision */
  checkCollisions() {
    if (this.x > (player.x - 70) && this.x < player.x + 50 && this.y >= (player.y - 40) && this.y < player.y + 35) {
      player.resetPlayer();
    }
  }

  /** @description Resets enemy position if goes of screen */
  resetEnemy() {
    if (this.x > 515) {
      this.x = -200;}
  }
} // End of Enemy class

/**
 * @constructor
 * @description Player character. Handles updating, reseting, user input, and win message.
 * @param Borrows all parameters from Game Object
 */

class Player extends GameObject {
  constructor(x = 200, y = 380, sprite, speed = 50) {
    super(x, y, sprite, speed);
    this.winGame = false;
  }

  /** @description Resets player to start position */
  resetPlayer() {
    this.x = 200;
    this.y = 380;
  }

  /** @description Handles game win */
  win() {
    this.winGame = true;
    const winMessage = document.querySelector('.win-text');
    winMessage.innerHTML = 'You Win!!!';
    // Move star off screen
    star.y = -200;

    /** @description Resets game after 3 seconds */
    setTimeout(
      () => {
        this.resetPlayer();
        winMessage.innerHTML = '';
        star.y = -5;
        this.winGame = false;
      }, 3000);
  }

  /** @description Enables player movement on keypress
   * Stops player if game has been won
   * Runs win method if player reaches star
   * Checks keycode, and moves player based on input
   * Stops player if reaches edge of screen
   * @param { object } keycode - pressed key
   */
  handleInput(keycode) {
    if (this.winGame === true) return;

    if (this.x > (star.x - 70) && this.x < star.x + 60 && this.y >= (star.y - 50) && this.y < star.y + 50) {
      this.win();
    }

    switch (keycode) {
    case 'up':
      if (this.y > 0) {
        this.y -= this.speed;}
      break;
    case 'down':
      if (this.y < canvas.height - 228) {
        this.y += this.speed;}
      break;
    case 'right':
      if (this.x < canvas.width - 105) {
        this.x += this.speed; }
      break;
    case 'left':
      if (this.x > 0) {
        this.x -= this.speed;}
    }
  }
} // End of Player class


/**
 * @constructor
 * @description Star object
 */
class Star extends GameObject {
  constructor(x = 205, y = -10, sprite = 'images/star.png') {
    super(x, y, sprite);
  }
} // End of Star class

/** @description Adds event listener to listen for player selection. Starts game once player selected. */
const modalIMG = document.querySelector('.modal-img');

const setPlayer = (e) => {
  player.sprite = e.target.id === 'girl' ? 'images/char-cat-girl.png' : 'images/char-boy.png';
  $('#startModal').modal('hide');
  Engine(window);
}

modalIMG.addEventListener('click', setPlayer);

/** @description instantiates all enemy, player, and star objects, and places all enemies in array called allEnemies */
const player = new Player();
const star = new Star();
const enemy1 = new Enemy(-10, 60);
const enemy2 = new Enemy(-10, 140);
const enemy3 = new Enemy(-10, 220);
const enemy4 = new Enemy(-500, 60);
const enemy5 = new Enemy(-500, 140);
const enemy6 = new Enemy(-500, 220);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

/** @description Listens for key presses and send the keys to Player.handleInput() method */
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
