//Name: Javidan Hasanzade
//File: main.js
//Date: April 7, 2025
//Bouncing balls script file

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//adding count label selector and count
let countLabel = document.querySelector('p');
let count = 0;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Shape parent class
class Shape {

  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

}

//Ball child classs
class Ball extends Shape {

  constructor(x, y, velX, velY, color, size) {
    //calling parent constructor
    super(x,y,velX,velY);

    //Setting rest of the fields
    this.color = color;
    this.size = size;
    this.exists = true;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

//EvilCircle class eats balls
class EvilCircle extends Shape{

  constructor(x, y){

    //hardcoded velocities
    const velX = 20;
    const velY = 20;

    //calling parent constructor
    super(x,y,velX,velY);

    //setting color and size
    this.color = "white";
    this.size = 10;
    
    //Adding controls (wasd) to evil ball
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'a':
          this.x -= this.velX;
          break;
        case 'd':
          this.x += this.velX;
          break;
        case 'w':
          this.y -= this.velY;
          break;
        case 's':
          this.y += this.velY;
          break;
      }
    });

  }

  //Draw method
  draw() {
    ctx.beginPath();
    //Adding outline color instead of fill:
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  //Makes sure evil circle is within context by checking bounds and
  //adjusting the x,y values
  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y += this.size;
    }
  }

  //Collision detection
  //Checks if the ball collides with evil ball
  //Removes the ball and updates count if they collide
  collisionDetect() {
    for (const ball of balls) {
      const currentBall = ball;
      if (currentBall.exists) { //Ball exists, getting position
        const dx = this.x - currentBall.x;
        const dy = this.y - currentBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        //Checking for collision
        if (distance < this.size + currentBall.size) { //Collision detected if true

          //Ball exists set to false
          currentBall.exists = false;

          //finding index of the ball that just collided
          const indexToRemove = balls.findIndex(ball => ball === currentBall);

          //removing the ball from that index:
          balls.splice(indexToRemove, 1);

          //ball count decreased
          count--;
          countLabel.textContent = 'Ball count: ' + count;
        }
      }
      
    }
  }

}

//Balls array
const balls = [];

//Populating balls array
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-1,1),
    random(-1,1),
    randomRGB(),
    size
  );

  balls.push(ball);
  
  //Updating ball count and counter:
  count++;
  countLabel.textContent = `Ball count: ${count}`;
}

//Creating evil ball on the top left of the context frame
const evilBall = new EvilCircle(0, 0);

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  //Updating evil ball:
  evilBall.draw();
  evilBall.checkBounds();
  evilBall.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
