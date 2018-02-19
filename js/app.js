// Open character select modal on load
$('#myModal').modal('show')

// Enemies our player must avoid
class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (15 - 10) + 10); // Give each enemy a random speed
    this.sprite = 'images/enemy-bug.png';
  }

  // Multiply any movement by the dt parameter to ensure the game runs at the same speed for
  // all computers.
  update(dt) {
    this.speed * dt;
  }

  // Draw enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Check for enemy player collisions and restart player on collision
  checkCollisions() {
    if (this.x > (player.x - 65) && this.x < player.x + 80 && this.y >= (player.y - 70) && this.y < player.y + 65) {
    player.resetPlayer();
     }
   }

  // If enemy off screen reset position
  reset() {
    if (this.x > 515) {
      this.x = -200;}
  }

  // Move enemy across screen
  moveEnemy(enemy) {
    const enemyInterval = setInterval(() => {
      // Stop enemies on game win
      if (player.winGame === true) {
        clearInterval(enemyInterval);
      }
      enemy.checkCollisions();
      enemy.update();
      // Reset enemy if it reaches end of screen
      enemy.reset(); 
      enemy.x += enemy.speed;
      }, 75)};
} // End of Enemy class

class Player {
  constructor() {
    this.x = 200;
    this.y = 380;
    this.speed = 30;
    this.sprite;
    this.winGame = false;
  }

  // Multiply any movement by the dt parameter to ensure the game runs at the same speed for
  // all computers.
  update(dt) {
    this.speed * dt;
  }

  // Load player on screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Reset player to start position
  resetPlayer() {
    this.x = 200;
    this.y = 420;
  }

  // Handle game win
  win() {
    this.winGame = true;
    const winMessage = document.querySelector('.win-message'); // Display win message
    winMessage.innerHTML = 'You Win!!!'
    // Move star off screen
    star.y = -200;

    // Resent game after 3 seconds
    setTimeout(
      () => {
        this.resetPlayer()
        startEnemies();
        winMessage.innerHTML = '';
        star.y = -5;
        this.winGame = false;
      }, 3000)
    }

  // Enable player movement on keypress
  handleInput(keycode) {
    // Stop player if game has been won
    if (player.winGame === true) return;

    // Run win method if player reaches star
    if (this.x > (star.x - 70) && this.x < star.x + 60 && this.y >= (star.y - 50) && this.y < star.y + 50) {
      this.win();
    }
    this.update();

    // Check keycode. Move player the correct direction. Stop movement if player reaches edge of screen.
    switch (keycode) {
      case 'up':
        if (this.y > -10) {
        this.y -= this.speed;}
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

    // Load star on screen
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  } // End of Star class

// Add event listener to listen for player selection. Start game once player selected.
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

// instantiate all enemy, player, and star objects, and place all enemies in array called allEnemies
const player = new Player();
const star = new Star();
const enemy1 = new Enemy(-10, 60);
const enemy2 = new Enemy(-10, 140);
const enemy3 = new Enemy(-10, 220);
const enemy4 = new Enemy(-500, 60);
const enemy5 = new Enemy(-500, 140);
const enemy6 = new Enemy(-500, 220);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Move enemies at varying speed accross screen
const startEnemies = () => {
  for (enemy of allEnemies) {
    enemy.moveEnemy(enemy);
  };
}
startEnemies();

// Listen for key presses and send the keys to Player.handleInput() method
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
