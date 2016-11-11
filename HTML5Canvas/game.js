var canvas;
var canvasContext;

var initialPositionRectX = 50;
var initialPositionRectY = 50;

var initialPositionXPC;
var initialPositionYPC = 300;

const PCHeight = 100;
const PCWidth = 10;

var ballSpeedX = 5;
var ballSpeedY = 5;

var pcSpeedY = 5;

var framesPerSecond = 60;

function calculatMousePos(evt){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
}


window.onload = function(){

  canvas = document.getElementById('myCanvas');
  canvasContext = canvas.getContext('2d');

  initialPositionXPC = (canvas.width) - 10;

  console.log(document.documentElement.scrollLeft);
  setInterval(function(){
      draw();
      move();
      movePc();
  }, 1000/framesPerSecond);

}

function move(){
  initialPositionRectX += ballSpeedX;
  initialPositionRectY += ballSpeedY;

  if(initialPositionRectX > (canvas.width - 25)){
    ballSpeedX = -ballSpeedX;
  }
  if(initialPositionRectX < 25){
    ballSpeedX = -ballSpeedX;
  }

  if(initialPositionRectY > (canvas.height) - 25){
    ballSpeedY = -ballSpeedY;
  }

  if(initialPositionRectY < 25){
    ballSpeedY = -ballSpeedY;
  }
}

function movePc(){
  initialPositionYPC += pcSpeedY;

  if(initialPositionYPC > (canvas.height) - 100){
    pcSpeedY = -pcSpeedY;
  }

  if(initialPositionYPC < 0){
    pcSpeedY = -pcSpeedY;
  }
}

function draw(){

  // Background!
  colorRect(0, 0, canvas.width, canvas.height, 'black');

  // Ball
  colorCircle(initialPositionRectX, initialPositionRectY, 25, 0, 2*Math.PI, false);

  // First Player
  colorRect(0, 300, 10, 100, 'white');

  // Second Player
  colorRect(initialPositionXPC, initialPositionYPC, PCWidth, PCHeight, 'white');

}

function colorRect(leftX, leftY, width, height, color){

  canvasContext.fillStyle = color;
  canvasContext.fillRect(leftX, leftY, width, height);

}

function colorCircle(x, y, radius, angleStart, angleFinish, clockWise){
  canvasContext.fillStyle = 'blue';
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, angleStart, angleFinish, clockWise);
  canvasContext.fill();
}
