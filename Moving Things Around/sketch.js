/* Moving Things Around
   Matthew Novick
   April 4, 2019
   revised: May 8, 2019
   */



  let x = 100;
  let y = 100;
  let y2= 100;
  let x2= 100;
  let size=200
  let xball=100
  let yball=100
  let xSpeed=5
  let ySpeed=0
  let size2=15
  function setup() {
  createCanvas(1012, 512);
}

  function draw() {
  background(0);
  drawball();
  hittingstuuf();
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }


  fill(255, 0, 0);
  if (y<0)
  {
    y=0
  }

  else if(y+size>=height)
  {
    y=height-size

  }
  rect(x*9.5, y, 10, 100);

  drawRect();


}

  function drawRect(){
  if (keyIsDown(SHIFT)) {
    y2 -= 5;
  }

  if (keyIsDown(CONTROL)) {
    y2 += 5;
  }

  if (y2<0)
  {
    y2=0

  }
  else if(y2+size>=height)
  {
    y2=height-size

  }


  fill(255, 0, 0);
  rect(x2-50, y2, 10, 100);


}


function drawball() {



  //draw the rectangle
  fill(187,23,12);
  circle(xball,yball,size2,size2);

  //move the rectangle
  xball+=xSpeed;
  yball=yball+ySpeed;

  //if it reaches the bottom, change direction
  if (yball+size2>=height || yball<=0){
  ySpeed=ySpeed*(-1);

  }
  //if it reaches the right, change direction
  if(xball+size2>=width || xball<=0){
    xSpeed=xSpeed*(-1);
  }

}
// How the ball hits the thing
function hittingstuuf(){
if((xball>x2 && xball<x2+10)&&(yball+yball/2)>=y2){
  xSpeed *=-1;
  ySpeed *=-1;
}

if((xball>x*9.5 && xball<x*9.5+10)&&(yball+yball/2)>=y){
  xSpeed *=-1;
  ySpeed *=-1;
}

}
