// Open modal on load
$('#myModal').modal('show')

// Enemies our player must avoid
class Enemy {
  constructor(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x; // added for start x position
    this.y = y; // added for start y position
    this.speed = Math.floor(Math.random() * (15 - 10) + 10);
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.speed * dt;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Check enemy player collisions

  checkCollisions() {
    if (this.x > (player.x - 65) && this.x < player.x + 80 && this.y >= (player.y - 70) && this.y < player.y + 65) {
    player.resetPlayer(); // Reset player to start position
     }
   }

    // If enemy off screen reset position

    reset() {
      if (this.x > 515) {
        this.x = -200;}
    }

    moveEnemy(enemy) {
      const enemyInterval = setInterval(() => {
        if (player.winGame === true) {
          clearInterval(enemyInterval);
        }
        enemy.checkCollisions();
        enemy.update();
        enemy.reset();
        enemy.x += enemy.speed;
        }, 300)};
} // End of Enemy class

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor() {
    this.x = 200;
    this.y = 380;
    this.speed = 20;
    this.sprite;
    this.winGame = false;
  }

  update(dt) {
    this.speed * dt;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Reset player to start position

  resetPlayer() {
    this.x = 200;
    this.y = 420;
  }

  win() {
    const winMessage = document.querySelector('.win-message');
    winMessage.innerHTML = 'You Win!!!'
    star.y = -200;
    this.winGame = true;

    setTimeout(
      () => {
        this.resetPlayer()
        startEnemies();
        winMessage.innerHTML = '';
        star.y = -5;
        this.winGame = false;
      }, 3000)
    }

  handleInput(keycode) {
    if (player.winGame === true) return;

    if (this.x > (star.x - 70) && this.x < star.x + 60 && this.y >= (star.y - 50) && this.y < star.y + 50) {
      this.win();
    }
    this.update();

    switch (keycode) {
      case 'up':
        if (this.y > -10) {
        this.y -= this.speed;} // Test if player has reached screen edge
        break;
      case 'down':
        if (this.y < canvas.height - 170) {
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

  class Star {
    constructor() {
      this.x = 205;
      this.y = -5;
      this.sprite = 'images/star.png';
    }

    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }

  // Select player
  const selectGirl = document.querySelector('#girl');
  const selectBoy = document.querySelector('#boy');

  let sprite;

  const setPlayerGirl = sprite => {
      player.sprite = 'images/char-cat-girl.png';
      $('#myModal').modal('hide');
      Engine(this);
    }

  const setPlayerBoy = sprite => {
      player.sprite = 'images/char-boy.png';
      $('#myModal').modal('hide');
      Engine(this);
    }

  selectGirl.addEventListener('click', setPlayerGirl);
  selectBoy.addEventListener('click', setPlayerBoy);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player();
const star = new Star();
const enemy1 = new Enemy(-10, 60);
const enemy2 = new Enemy(-10, 140);
const enemy3 = new Enemy(-10, 220);
const enemy4 = new Enemy(-350, 60);
const enemy5 = new Enemy(-350, 140);
const enemy6 = new Enemy(-350, 220);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Move enemies at varying speed accross screen

const startEnemies = () => {
  for (enemy of allEnemies) {
    enemy.moveEnemy(enemy);
  };
}

startEnemies();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
