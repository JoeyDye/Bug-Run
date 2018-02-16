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
    this.sprite = "images/enemy-bug.png";
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
    if (this.x > (player.x - 60) && this.x < player.x + 101 && this.y >= player.y && this.y < player.y + 171) {
    player.resetPlayer();
    }
  }

    // If enemy off screen reset position

    reset() {
      if (this.x > 515) {
        this.x = -200;} 
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor() {
    this.x = 200;
    this.y = 420;
    this.speed = 20;
    this.sprite = "images/char-boy.png";
    this.score = 0;
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

  updateScore() {
    // const p = document.getElementById('score');

    this.score += 1;
    // p.innerHTML = `Score = ${this.score}`;
    // ctx.font = '24px serif';
    // ctx.fillStyle = 'white';
    // ctx.fillText(score = ${this.score}, 50, 50);
  }

  handleInput(keycode) {
    if (this.y < 5) {
      this.updateScore();
      this.resetPlayer();
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
  }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player();
const enemy1 = new Enemy(-10, 60);
const enemy2 = new Enemy(-10, 140);
const enemy3 = new Enemy(-10, 220);
const enemy4 = new Enemy(-350, 60);
const enemy5 = new Enemy(-350, 140);
const enemy6 = new Enemy(-350, 220);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// Move enemies at varying speed accross screen

allEnemies.forEach(function(enemy) {
  setInterval(() => {
    enemy.checkCollisions();
    enemy.update();
    enemy.reset();
    enemy.x += enemy.speed;
    }, 100);
});

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