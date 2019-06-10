let x=400; //Player
let y=505; //Player
let x2=750;// First Border
let y2=0;  // First Border
let gateX = 750; //Second Border
let gateY = 50;  //Second Border
let gate2X = 750; //Third Border
let gate2Y = 50;  //Third Border
let size=15; //Size of player ball

let ySpeed=10; //Speed of Enemy for stage 2
let eX = 600;  // Stage 2 Enemy starting position
let eY = 100;  // Stage 2 Enemy starting position
let eSize = 8 //Enemy size

let y2Speed=10; //Speed of Enemy for stage 3
let e2X = 400;  // Stage 3 Enemy starting position
let e2Y = 150;  // Stage 3 Enemy starting position
let e2Size = 8 //Enemy size

let y3Speed=10; //Speed of Enemy for stage 3
let e3X = 420;  // Stage 3 Enemy starting position
let e3Y = 150;  // Stage 3 Enemy starting position
let e3Size = 8 //Enemy size

let y4Speed=4; //Speed of Enemy for stage 3
let e4X = 300;  // Stage 3 Enemy starting position
let e4Y = 470;  // Stage 3 Enemy starting position

let y5Speed=8; //Speed of Enemy for stage 3
let e5X = 275;  // Stage 3 Enemy starting position
let e5Y = 470;  // Stage 3 Enemy starting position

let level=0; // levels

let hit = false;
let hit2 = false;
let hit3 = false;
let hit4 = false;
let hit5 = false;
let hit6 = false;
let hit7 = false;

let hit8 = false;
let hit9 = false;
let hit10 = false;
let hit11 = false;
let hit12 = false;
let hit13 = false;
let hit14 = false;
let hit15 = false;
let hit16 = false;

let hit17 = false
let hit18 = false;
let hit19 = false;
let hit20 = false;
let hit21 = false;
let hit22 = false;
let hit23 = false;
let hit24 = false;

function setup() {
  // put setup code here
  createCanvas(800,600);
  background(255,0,0);
}

function draw() {
  // put drawing code here

  print(level);
  hit = collideRectCircle(500,200,25,25,x,y,size);
  hit2 = collideRectCircle(x2,y2,50,800,x,y,size);



  if (level ===0) {
    //Show the instructions to the user



    hit8 = collideRectCircle(100,450,50,50,x,y,size);
    hit9 = collideRectCircle(175,450,50,50,x,y,size);
    hit10 = collideRectCircle(250,450,50,50,x,y,size);
    hit11 = collideRectCircle(325,450,50,50,x,y,size);


    if (hit8 === true){
      level = 1;

    }

    if (hit9 === true){
      level = 2;
      x = 30
      y = 150
    }

    if (hit10 === true){
      level = 4;
      x = 30
      y = 150
    }

   if (hit11 === true){
      level = 5;
      x = 300
      y = 150
    }
    background(0);
    fill(255,0,0);
    textSize(25);
    text('1',125,430)

    textSize(25);
    text('2',200,430)

    textSize(25);
    text('3',275,430)

    textSize(25);
    text('4',350,430)

    fill(255);
    rect(100,450,50,50); //Level 1
    rect(175,450,50,50); //level 2
    rect(250,450,50,50); //level 3
    rect(325,450,50,50); //level 4
    fill(255,0,0);

    circle(x,y,size,size);

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

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('The Game', width/2, height/2-50);

    textSize(16);
    text('Rules: Find key, Open gate, continue to next level \nUse your arrow keys to move the ball ', width/2, height/2);
    text('Press enter to continue', width/2, height/2+50);

    //If they press enter, move to the next level (game)
    if (keyIsDown(ENTER)) {
      level+=1;
      x = 30
      y = 230
    }
  }

  if (level===1){
  background(200,100,146)
  fill(0);
  textSize(25);
  text("Level 1",50,25);
  fill(255);
  textSize(32);

  textSize(16);
  text('This is the KEY', 510,180);

  fill(0);
  rect(500,200,25,25)
  fill(255)


  if (hit2 === true){
    y=y-5
    x=x-5
  }
  if(hit === true){
    x2=-100
    y2=0

  }
  fill(400,100,400);
  noStroke();
  rect(x2,y2,50,800);

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
  fill(255,0,0);
  circle(x,y,size,size);

  if (y<0){
    y=0
  }
  else if (y+size>=height){

    y=height-size
  }

  else if (x<=0){
  x=0}
  if(x>width){
    x=15;
    y=80;
    level+=1
  }

  }

else if(level===2){


  hit3 = collideRectCircle(50,0,800,50,x,y,size);
  hit4 = collideRectCircle(0,250,800,400,x,y,size);
  hit6 = collideRectCircle(gateX,gateY,300,200,x,y,size);
  hit7 = collideCircleCircle(eX,eY,eSize,x,y,size);
  print(hit7)
  background(255,200,51);

  circle(eX,eY,eSize,eSize);

  eY+=ySpeed

  if (eY>=height/2-25 || eY<=25){
  ySpeed=ySpeed*(-1);

  }

  if (hit7 === true){
    level = 0
    x2=750;
    y2=0;
    gateX=750
    gateY=50

  }

  fill(255,500,200);
  noStroke();
  rect(50,0,800,50); //Top Border
  rect(0,250,800,400);//Bottom Border
  fill(0);
  rect(0,0,50,250); // Starting pad
  rect(gateX,gateY, 300, 200); //Gate to unlock


  if(hit === true){
    x2=1
    y2=1

  }

  if(hit3 === true){
  level = 0
  x2=750;
  y2=0;
  gateX=750
  gateY=50

  }
  if(hit4 === true){
    level = 0
    x2=750;
    y2=0;
    gateX=750
    gateY=50

  }

  if (hit6 === true){
    y=y-5
    x=x-5
  }




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
  fill(255,0,0);
  circle(x,y,size,size);
  fill(255,50,323);
  textSize(25);
  text("Level 2",100,25);

  if (y<0){
    y=0
  }
  else if (y+size>=height){

    y=height-size
  }

 if (x<=0){
  x=0}

if (y<=0){
  x=15;
  y=550;
level+=1

}

if(x>width){
  x=15;
  y=80;
  level+=2
}




}

if (level === 3){
background(255,200,50);
hit5 = collideRectCircle(width/2,height/2,20,20,x,y,size);
print(hit5);
if (hit5 === true){
  gateX = 1500
  gateY = 1500

}
fill(0);
rect(width/2,height/2,20,20) // Key for opening gate

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
fill(255,0,0);
circle(x,y,size,size);

if (y<0){
  y=0
}
else if (y+size>=height){

  y=height-size
  if (y+size>=height){
    x=15;
    y=10;
  level-=1

}



}
}

if (level === 4){
hit12 = collideRectCircle(gate2X,gate2Y,300,300,x,y,size);
hit13 = collideRectCircle(0,0,800,50,x,y,size);
hit14 = collideRectCircle(50,350,800,25,x,y,size);
hit15 = collideRectCircle(750,350,50,400,x,y,size);
hit16 = collideRectCircle(700,470,20,20,x,y,size);

hit17 = collideRectCircle(500,50,15,140,x,y,size);
hit18 = collideRectCircle(500,250,15,100,x,y,size);
hit19 = collideRectCircle(300,50,15,100,x,y,size);
hit20 = collideRectCircle(300,210,15,140,x,y,size);

hit21 = collideCircleCircle(e2X,e2Y,e2Size,x,y,size);
hit22 = collideCircleCircle(e3X,e3Y,e3Size,x,y,size);

hit23 = collideRectCircle(e4X,e4Y,200,15,x,y,size);
hit24 = collideRectCircle(e5X,e5Y,15,50,x,y,size);

background(400,575,200);

fill(255);
noStroke();
rect(0,0,800,50); //Top Border
rect(50,350,800,25);//Bottom Border
rect(750,350,50,400);//Bottom Right Border
fill(0);
rect(0,50,50,300); //Starting pad
rect(gate2X,gate2Y, 300, 300); //Gate to unlock
fill(200,600,50);
rect(500,50,15,140); //top right object
rect(500,250,15,100);//bottom right object
rect(300,50,15,100); //top left object
rect(300,210,15,140);//bottom left object
circle(e2X,e2Y,e2Size,e2Size);
circle(e3X,e3Y,e3Size,e3Size);



if (hit12 === true){

  y=y-5
  x=x-5

}

if(hit13 === true || hit14 === true || hit15 === true || hit17 === true || hit18 === true || hit19 === true || hit20 === true || hit21 === true || hit22 === true || hit23 === true || hit24 === true){
level = 0
x=400; //Player
y=505; //Player
x2=750;
y2=0;
gateX=750
gateY=50
gate2X=750
gate2Y=50

}
fill(200,600,50);
rect(e4X,e4Y,200,15); //horizontal enemy
rect(e5X,e5Y,15,50); //vertical enemy

fill(0);
rect(700,470,20,20); //key

if(hit16 === true){
  gate2X=-1000
  gate2Y=0

}

fill(0);
textSize(25);
text("Level 3",50,25);

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
fill(255,0,0);
circle(x,y,size,size);

e2Y+=y2Speed
e3Y+=y3Speed
e4Y+=y4Speed
e5Y-=y5Speed

if (e2Y>=height/2+35 || e2Y<=60){
y2Speed=y2Speed*(-1);



if (e3Y>=height/2+35 || e3Y<=60){
y3Speed=y3Speed*(-1);
}
if (e4Y>=height/2-50 || e4Y<=200){
y4Speed=y4Speed*(-1);
}

if (e5Y>=height/2-50 || e5Y<=220){
y5Speed=y5Speed*(-1);
}

if (x<=0){
x=0}

if (y+size>=height){

  y=height-size
}
if (x>=width){
  x=400;
  y=450;
level+=1

}

}
  if (level === 5){
  background(600,100,50);

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
  fill(255,0,0);
  circle(x,y,size,size);

}
}
}
