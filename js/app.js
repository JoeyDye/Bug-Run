/** @description Opens character select modal on load */
$('#startModal').modal({
  backdrop: 'static', keyboard: false
});
$('#startModal').modal('show');



/**
 * @constructor
 * @description Enemies our player must avoid. Includes properties for x and y coordinates,
 * speed, and sprite image. Also, includes methods for updating, rendering, checking collisions
 * reseting, and moving the enemy across the screen. Using a constructor allows for the creation
 * of mutiple enemy instances.
 * @param { number } x - x coordinate
 * @param { number } y - y coordinate
 */
class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Gives each enemy a random speed
    this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    this.sprite = 'images/enemy-bug.png';
  }

  /** @description Multiplies any movement by the dt parameter to ensure the game runs at the same
   * speed for all computers.
   * @param { number } dt = delta time
   */
  update(dt) {
    this.speed * dt;
  }

  /** @description Draws enemy on screen */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  /** @description Checks for enemy player collisions and restart player on collision */
  checkCollisions() {
    if (this.x > (player.x - 65) && this.x < player.x + 80 && this.y >= (player.y - 70) && this.y < player.y + 65) {
      player.resetPlayer();
    }
  }

  /** @description resets enemy position if goes of screen */
  reset() {
    if (this.x > 515) {
      this.x = -200;}
  }

  /** @description Moves enemy across screen, stops enemies if game has been won, and resets the
   * enemy if it reaches the screen edge.
   * @param { string } char - enemy instance
   */
  moveEnemy(char) {
    const enemyInterval = setInterval(() => {
      if (player.winGame === true) {
        clearInterval(enemyInterval);
      }
      char.checkCollisions();
      char.update();
      char.reset();
      char.x += char.speed;
    }, 75);}
} // End of Enemy class

/**
 * @constructor
 * @description Player character who much reach the star. Includes properties such as x coordinate,
 * y coordinate, player speed, sprite image (based on player selection), and win status.
 * Includes methods such as update, render, reset, win, and handle input on keypress.
 */

class Player {
  constructor() {
    this.x = 200;
    this.y = 380;
    this.speed = 30;
    this.sprite;
    this.winGame = false;
  }

  /** @description Multiplies any movement by the dt parameter to ensure the game runs at the same speed for all computers. */
  update(dt) {
    this.speed * dt;
  }

  /** @description Loads player on screen */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  /** @description Resets player to start position */
  resetPlayer() {
    this.x = 200;
    this.y = 380;
  }

  /** @description Handles game win */
  win() {
    this.winGame = true;
    const winMessage = document.querySelector('.win-text'); // Display win message
    winMessage.innerHTML = 'You Win!!!';
    // Move star off screen
    star.y = -200;

    /** @description Resets game after 3 seconds */
    setTimeout(
      () => {
        this.resetPlayer();
        startEnemies();
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
    if (player.winGame === true) return;

    if (this.x > (star.x - 70) && this.x < star.x + 60 && this.y >= (star.y - 50) && this.y < star.y + 50) {
      this.win();
    }
    this.update();

    switch (keycode) {
    case 'up':
      if (this.y > -5) {
        this.y -= this.speed;}
      break;
    case 'down':
      if (this.y < canvas.height - 175) {
        this.y += this.speed;}
      break;
    case 'right':
      if (this.x < canvas.width - 100) {
        this.x += this.speed; }
      break;
    case 'left':
      if (this.x > -10) {
        this.x -= this.speed;}
    }
  }
} // End of Player class


/**
 * @constructor
 * @description Star the player much reach to win. Properties include x coordinate, y coordinate, and
 * sprite image. Methods include render.
 */
class Star {
  constructor() {
    this.x = 205;
    this.y = -5;
    this.sprite = 'images/star.png';
  }

  /** @description Loads star on screen */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
} // End of Star class

/** @description Adds event listener to listen for player selection. Start game once player selected. */
const selectGirl = document.querySelector('#girl');
const selectBoy = document.querySelector('#boy');

const setPlayerGirl = () => {
  player.sprite = 'images/char-cat-girl.png';
  $('#startModal').modal('hide');
  Engine(window);
};

const setPlayerBoy = () => {
  player.sprite = 'images/char-boy.png';
  $('#startModal').modal('hide');
  Engine(window);
};

selectGirl.addEventListener('click', setPlayerGirl);
selectBoy.addEventListener('click', setPlayerBoy);

/** @description instantiates all enemy, player, and star objects, and place all enemies in array called allEnemies */
const player = new Player();
const star = new Star();
const enemy1 = new Enemy(-10, 60);
const enemy2 = new Enemy(-10, 140);
const enemy3 = new Enemy(-10, 220);
const enemy4 = new Enemy(-500, 60);
const enemy5 = new Enemy(-500, 140);
const enemy6 = new Enemy(-500, 220);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

/** @description Moves enemies at varying speed accross screen */
const startEnemies = () => {
  for (let char of allEnemies) {
    char.moveEnemy(char);
  }
};
startEnemies();

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
