let img;
let mySound;
let x;
let x2=600;
let y=300;
let y2=300
let size=50;


let hit=false



let x1Speed=10;
let scoreElem;

function preload() {
  img = loadImage('Rapslogo.png');
  mySound = loadSound('dingdong.mp3');
}

function setup() {
  // put setup code here
  scoreElem = createDiv('Score = 0');
 scoreElem.position(20, 20);
 scoreElem.id = 'score';
 scoreElem.style('color', 'white');
  createCanvas(windowWidth,windowHeight);
  x=random(255);


}

function draw() {
  // put drawing code here
  checkGameStatus();
  checkForHit();
  hit=collideRectRect(x,y,size,size,x2,y2,size,size);
  fill(255);


  print(hit);

  if (hit===true){
      mySound.setVolume(0.1);
    mySound.play();
background(255,0,0);
img.resize(400, 400);
image(img,width/2,height/2);
textSize(50);
text('GAME OVER', 500, 100);
textSize(25);
text('Press F5 to restart',525,125);
x1Speed=0


  }
  else {
  background(0);

fill(127);
rect(x,y,size,size);

fill(255);
if (keyIsDown(65)) {
  x2 -= 5;
}

if (keyIsDown(68)) {
  x2 += 5;
}

if (keyIsDown(87)) {
  y2 -= 5;
}

if (keyIsDown(83)) {
  y2 += 5;
}
rect(x2,y2,size,size);


if (y2<0){
  y2=0
}
else if (y2+size>=height){

  y2=height-size
}

if(x2+size>=width){

  x2=width-size
}
else if (x2<=0){
x2=0}
}

x+=x1Speed
if(x+size>width || x<0){
x1Speed*=-1;
x=random(255);
}

}

function checkGameStatus() {
  if (hit===true) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was : ' + scoreVal);
  }
}

function checkForHit() {
  if (hit===false) {
    const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
}

}
