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
}
