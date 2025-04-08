//Name: Javidan Hasanzade
//File: main.js
//Date: April 7, 2025
//Object building practice script file

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Ball class
class Ball {
  constructor(x, y, velX, velY, color, size) {
    //Coordinates
    this.x = x;
    this.y = y;
    //Velocity (horizontal, vertical)
    this.velX = velX;
    this.velY = velY;
    //Appearance
    this.color = color;
    this.size = size;
  }

  //draw() draws the ball on given context
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  //update() updates ball information
  //reverses the ball if it reached the edge of context
  //otherwise continues moving with current x and y velocity
  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
