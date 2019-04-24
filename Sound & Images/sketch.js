let img;
let x=0;
let x2=600;
let y=300;
let y2=300
let size=50;


let hit=false



let x1Speed=10;


function preload() {
  img = loadImage('Rapslogo.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  hit=collideRectRect(x,y,size,size,x2,y2,size,size);

  print(hit);

  if (hit===true){
background(255,0,0);
img.resize(50, 100);
image(img,width/10,height/10);
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

}

}
