  /* Keyboard assignment
     Matthew Novick
     April 23, 2019  */



  let x = 100;
  let y = 100;
  let size = 50
  let x2=150
  let y2=150
  let size2=50

  function setup() {
  createCanvas(1012, 800);
    background(200,100,146);
  fill(255, 0, 0);

  }

  function draw() {
  background(200,100,146)
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  rect(x, y, size, size);

  if (y<0){
    y=0
  }
  else if (y+size>=height){

    y=height-size
  }

  if(x+size>=width){

    x=width-size
  }
  else if (x<=0){
  x=0}

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

  rect(x2, y2, size2, size2);

  if (y2<0){
    y2=0
  }
  else if (y2+size2>=height){

    y2=height-size2
  }

  if(x2+size2>=width){

    x2=width-size2
  }
  else if (x2<=0){
  x2=0}
  }
