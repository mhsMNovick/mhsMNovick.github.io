let x=400; //Player
let y=505; //Player
let x2=750;// First Border
let y2=0;  // First Border
let gateX = 750; //Second Border
let gateY = 50;  //Second Border
let gate2X = 750; //Third Border
let gate2Y = 50;  //Third Border
let gate3X = 770; //Forth Border
let gate3Y = 50;  //Forth Border
let gate4X = 740; //second Forth Border
let gate4Y = 50;  //second Forth Border
let gate4kX = 300; //second Forth Border
let gate4kY = 0;  //second Forth Border
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

let y4Speed=5; //Speed of Enemy for stage 3
let e4X = 300;  // Stage 3 Enemy starting position
let e4Y = 470;  // Stage 3 Enemy starting position

let y5Speed=5; //Speed of Enemy for stage 3
let e5X = 275;  // Stage 3 Enemy starting position
let e5Y = 470;  // Stage 3 Enemy starting position

let y6Speed=5; //Speed of Enemy for stage 4
let e6X = 450;  // Stage 4 Enemy starting position
let e6Y = 430;  // Stage 4 Enemy starting position

let y7Speed=5; //Speed of Enemy for stage 4
let e7X = 430;  // Stage 4 Enemy starting position
let e7Y = 430;  // Stage 4 Enemy starting position

let y8Speed=5; //Speed of Enemy for stage 4
let x8Speed=5;
let e8X = 280;  // Stage 4 Enemy starting position
let e8Y = 480;  // Stage 4 Enemy starting position

let y9Speed=5; //Speed of Enemy for stage 4
let x9Speed=5;
let e9X = 260;  // Stage 4 Enemy starting position
let e9Y = 400;  // Stage 4 Enemy starting position


let x10Speed=12;
let e10X = 400;  // Stage 4 Enemy starting position
let e10Y = 140;  // Stage 4 Enemy starting position


let x11Speed=12;
let e11X = 420;  // Stage 4 Enemy starting position
let e11Y = 200;  // Stage 4 Enemy starting position


let x12Speed=12;
let e12X = 440;  // Stage 4 Enemy starting position
let e12Y = 280;  // Stage 4 Enemy starting position


let x13Speed=12;
let e13X = 460;  // Stage 4 Enemy starting position
let e13Y = 340;  // Stage 4 Enemy starting position


let x14Speed=12;
let e14X = 480;  // Stage 4 Enemy starting position
let e14Y = 420;  // Stage 4 Enemy starting position


let x15Speed=12;
let e15X = 500;  // Stage 4 Enemy starting position
let e15Y = 480;  // Stage 4 Enemy starting position

let y16Speed=12;
let e16X = 410;  // Stage 4 Enemy starting position
let e16Y = 300;  // Stage 4 Enemy starting position

let y17Speed=12;
let e17X = 390;  // Stage 4 Enemy starting position
let e17Y = 300;  // Stage 4 Enemy starting position

let y18Speed=12;
let e18X = 430;  // Stage 4 Enemy starting position
let e18Y = 300;  // Stage 4 Enemy starting position

let x19Speed=16;
let e19X = 200;  // Stage 4 Enemy starting position
let e19Y = 300;  // Stage 4 Enemy starting position

let x20Speed=16;
let e20X = 200;  // Stage 4 Enemy starting position
let e20Y = 360;  // Stage 4 Enemy starting position

let x21Speed=16;
let e21X = 200;  // Stage 4 Enemy starting position
let e21Y = 420;  // Stage 4 Enemy starting position

let x22Speed=16;
let e22X = 200;  // Stage 4 Enemy starting position
let e22Y = 240;  // Stage 4 Enemy starting position

let x23Speed=16;
let e23X = 200;  // Stage 4 Enemy starting position
let e23Y = 180;  // Stage 4 Enemy starting position

let x24Speed=16;
let e24X = 600;  // Stage 4 Enemy starting position
let e24Y = 300;  // Stage 4 Enemy starting position

let x25Speed=16;
let e25X = 600;  // Stage 4 Enemy starting position
let e25Y = 360;  // Stage 4 Enemy starting position

let x26Speed=16;
let e26X = 600;  // Stage 4 Enemy starting position
let e26Y = 420;  // Stage 4 Enemy starting position

let x27Speed=16;
let e27X = 600;  // Stage 4 Enemy starting position
let e27Y = 240;  // Stage 4 Enemy starting position

let x28Speed=16;
let e28X = 600;  // Stage 4 Enemy starting position
let e28Y = 180;  // Stage 4 Enemy starting position

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
let hit25 = false;
let hit26 = false;
let hit27 = false;
let hit28 = false;
let hit29 = false;

let hit30 = false;
let hit31 = false;
let hit32 = false;
let hit33 = false;
let hit34 = false;
let hit35 = false;
let hit36 = false;
let hit37 = false;
let hit38 = false;
let hit39 = false;

let hit40 = false;
let hit41 = false;
let hit42 = false;
let hit43 = false;

let hit44 = false;
let hit45 = false;
let hit46 = false;
let hit47 = false;
let hit48 = false;
let hit49 = false;

let hit50 = false;
let hit51 = false;
let hit52 = false;
let hit53 = false;
let hit54 = false;
let hit55 = false;
let hit56 = false;
let hit57 = false;
let hit58 = false;
let hit59 = false;
let hit60 = false;
let hit61 = false;
let hit62 = false;

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
      x = 40
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
  text("Level 2 ----- (hint: go up)",200,25);

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

hit23 = collideRectCircle(e4X,e4Y,100,15,x,y,size);
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
rect(e4X,e4Y,100,15); //horizontal enemy
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

if (e2Y>=335 || e2Y<=60){
y2Speed=y2Speed*(-1);
}


if (e3Y>=335 || e3Y<=60){
y3Speed=y3Speed*(-1);
}

if (e4Y>=625 || e4Y<=375){
y4Speed=y4Speed*(-1);
}

if (e5Y>=625 || e5Y<=375){
y5Speed=y5Speed*(-1);
}

if (x<=0){
x=0}

if (y+size>=height){

  y=height-size
}
if (x>=width){
  x=20;
  y=215;
level+=1

}

}
  if (level === 5){
    print(x)
    print(y)
    hit25 = collideRectCircle(gate3X,gate3Y,300,300,x,y,size);
    hit26 = collideRectCircle(gate4X,gate4Y,300,300,x,y,size);
    hit29 = collideRectCircle(gate4kX,gate4kY,250,50,x,y,size);

    hit30 = collideRectCircle(0,0,300,50,x,y,size);
    hit31 = collideRectCircle(550,0,250,50,x,y,size);
    hit32 = collideRectCircle(740,350,60,300,x,y,size);
    hit33 = collideRectCircle(0,300,50,400,x,y,size);
    hit34 = collideRectCircle(0,50,50,50,x,y,size);
    hit35 = collideRectCircle(50,550,550,50,x,y,size);
    hit36 = collideRectCircle(650,550,300,50,x,y,size);
    hit37 = collideRectCircle(150,350,700,5,x,y,size);
    hit38 = collideCircleCircle(e6X,e6Y,8,x,y,size);
    hit39 = collideCircleCircle(e7X,e7Y,8,x,y,size);
    hit40 = collideCircleCircle(e8X,e8Y,8,x,y,size);
    hit41 = collideCircleCircle(e9X,e9Y,8,x,y,size);



  background(600,100,50);

  fill(0);
  textSize(25);
  text("Level 4",400,260);
  fill(255);
  textSize(32);

  noStroke();
  fill(55,50,20);
  rect(0,0,300,50);//top left border
  rect(550,0,250,50);//top right border
  rect(740,350,60,300);//bottom right border
  rect(0,300,50,400); //bottom left border
  rect(0,50,50,50); //second top left border
  rect(50,550,550,50);//bottom left middle border
  rect(650,550,300,50);//bottom right middle border
  rect(150,350,700,5); //center border
  fill(255);
  circle(e6X,e6Y,8,8);
  circle(e7X,e7Y,8,8);
  circle(e8X,e8Y,8,8);
  circle(e9X,e9Y,8,8);

  fill(0,255,0);
  rect(0,100,50,200); //Starting pad
  fill(0);
  rect(gate3X,gate3Y, 300, 300); //Gate to unlock
  fill(0,0,255);
  rect(gate4X,gate4Y, 30, 300); //Gate to unlock
  rect(gate4kX,gate4kY,250,50) //gate to unlock second key

  e6Y-=y6Speed
  e7Y+=y7Speed
  e8Y-=y8Speed
  e9Y+=y9Speed


  if (e6Y>=550 || e6Y<=350){
  y6Speed=y6Speed*(-1);
  }

  if (e7Y>=550 || e7Y<=350){
  y7Speed=y7Speed*(-1);
  }

  if (e8Y>=550 || e8Y<=350){
  y8Speed=y8Speed*(-1);
  }

  if (e9Y>=550 || e9Y<=350){
  y9Speed=y9Speed*(-1);
  }



  if (hit25 === true || hit26 === true){
    x=x-5
  }

  if (hit29 === true){
    y=y+5

  }

  if(hit30 === true || hit31 === true || hit32 === true || hit33 === true || hit34 === true || hit35 === true || hit36 === true || hit37 === true || hit38 === true || hit39 === true || hit40 === true || hit41 === true){
  level = 0
  x=400; //Player
  y=505; //Player
  x2=750;
  y2=0;
  gateX=750
  gateY=50
  gate2X=750
  gate2Y=50
  gate3X=770
  gate3Y=50
  gate4X=740
  gate4Y=50
  gate4kX=300
  gate4kY=0

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

  if (x<=0){
  x=0}

  if (y>=height){
    x=400;
    y=50;
  level+=1

  }

  if (y<=0){
    x=400;
    y=550;
  level+=2

  }

  if (x>=width){

  level+=3

  }
}

if (level === 6){
  hit27 = collideRectCircle(400,575,20,20,x,y,size);

  hit44 = collideRectCircle(e10X,e10Y,8,8,x,y,size);
  hit45 = collideRectCircle(e11X,e11Y,8,8,x,y,size);
  hit46 = collideRectCircle(e12X,e12Y,8,8,x,y,size);
  hit47 = collideRectCircle(e13X,e13Y,8,8,x,y,size);
  hit48 = collideRectCircle(e14X,e14Y,8,8,x,y,size);
  hit49 = collideRectCircle(e15X,e15Y,8,8,x,y,size);
  background(100,600,550);
  noStroke();



  fill(225,321,654);
  rect(300,0,200,100); //Starting pad
  fill(0);
  rect(400,575,20,20); //Key 1
  fill(255,0,0);
  circle(e10X,e10Y,8,8);
  circle(e11X,e11Y,8,8);
  circle(e12X,e12Y,8,8);
  circle(e13X,e13Y,8,8);
  circle(e14X,e14Y,8,8);
  circle(e15X,e15Y,8,8);

  if(hit44 === true || hit45 === true || hit46 === true || hit47 === true || hit48 === true || hit49 === true){
    level = 0
    x=400; //Player
    y=505; //Player
    x2=750;
    y2=0;
    gateX=750
    gateY=50
    gate2X=750
    gate2Y=50
    gate3X=770
    gate3Y=50
    gate4X=740
    gate4Y=50
    gate4kX=300
    gate4kY=0

  }


  e10X-=x10Speed
  e11X+=x11Speed
  e12X-=x12Speed
  e13X+=x13Speed
  e14X-=x14Speed
  e15X+=x15Speed

  if (e10X>=755 || e10X<=60){
  x10Speed=x10Speed*(-1);
  }

  if (e11X>=755 || e11X<=60){
  x11Speed=x11Speed*(-1);
  }

  if (e12X>=755 || e12X<=60){
  x12Speed=x12Speed*(-1);
  }

  if (e13X>=755 || e13X<=60){
  x13Speed=x13Speed*(-1);
  }

  if (e10X>=755 || e10X<=60){
  x14Speed=x14Speed*(-1);
  }

  if (e15X>=755 || e15X<=60){
  x15Speed=x15Speed*(-1);
  }


  if(hit27 === true){
    gate4X = -1000
    gate4Y = 0
    gate4kX = -1000
    gate4kY = 0
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

  if (x<=0){
  x=0}

  if (x+size>=width){
  x=width-size}

  if (y<=0){
    x=630;
    y=570;
  level-=1

  }

}
if (level === 7){
    hit28 = collideRectCircle(400,20,20,20,x,y,size);

    hit60 = collideRectCircle(e16X,e16Y,8,8,x,y,size);
    hit61 = collideRectCircle(e17X,e17Y,8,8,x,y,size);
    hit62 = collideRectCircle(e18X,e18Y,8,8,x,y,size);
    hit50 = collideRectCircle(e19X,e19Y,8,8,x,y,size);
    hit51 = collideRectCircle(e20X,e20Y,8,8,x,y,size);
    hit52 = collideRectCircle(e21X,e21Y,8,8,x,y,size);
    hit53 = collideRectCircle(e22X,e22Y,8,8,x,y,size);
    hit54 = collideRectCircle(e23X,e23Y,8,8,x,y,size);
    hit55 = collideRectCircle(e24X,e24Y,8,8,x,y,size);
    hit56 = collideRectCircle(e25X,e25Y,8,8,x,y,size);
    hit57 = collideRectCircle(e26X,e26Y,8,8,x,y,size);
    hit58 = collideRectCircle(e27X,e27Y,8,8,x,y,size);
    hit59 = collideRectCircle(e28X,e28Y,8,8,x,y,size);


  background(400,300,100);
  noStroke();
  fill(0,223,256);
  rect(300,510,200,100); //Starting pad
  fill(0);
  rect(400,20,20,20); //Key 2
  fill(255,0,255);
  circle(e16X,e16Y,8,8);  // Middle circle
  circle(e17X,e17Y,8,8); // Middle circle
  circle(e18X,e18Y,8,8); // Middle circle

  circle(e19X,e19Y,8,8);
  circle(e20X,e20Y,8,8);
  circle(e21X,e21Y,8,8);
  circle(e22X,e22Y,8,8);
  circle(e23X,e23Y,8,8);

  circle(e24X,e24Y,8,8);
  circle(e25X,e25Y,8,8);
  circle(e26X,e26Y,8,8);
  circle(e27X,e27Y,8,8);
  circle(e28X,e28Y,8,8);

  if(hit50 === true || hit51 === true || hit52 === true || hit53 === true || hit54 === true || hit55 === true || hit56 === true || hit57 === true || hit58 === true || hit59 === true || hit60 === true || hit61 === true || hit62 === true){
  level = 0
  x=400; //Player
  y=505; //Player
  x2=750;
  y2=0;
  gateX=750
  gateY=50
  gate2X=750
  gate2Y=50
  gate3X=770
  gate3Y=50
  gate4X=740
  gate4Y=50
  gate4kX=300
  gate4kY=0

  }

  e16Y+=y16Speed
  e17Y+=y17Speed
  e18Y+=y18Speed

  e19X+=x19Speed
  e20X+=x20Speed
  e21X+=x21Speed
  e22X+=x22Speed
  e23X+=x23Speed

  e24X-=x24Speed
  e25X-=x25Speed
  e26X-=x26Speed
  e27X-=x27Speed
  e28X-=x28Speed

  if (e16Y>=455 || e16Y<=60){
  y16Speed=y16Speed*(-1);
  }

  if (e17Y>=455 || e17Y<=60){
  y17Speed=y17Speed*(-1);
  }

  if (e18Y>=455 || e18Y<=60){
  y18Speed=y18Speed*(-1);
  }

  if (e19X>=355 || e19X<=0){
  x19Speed=x19Speed*(-1);
  }

  if (e20X>=355 || e20X<=0){
  x20Speed=x20Speed*(-1);
  }

  if (e21X>=355 || e21X<=0){
  x21Speed=x21Speed*(-1);
  }

  if (e22X>=355 || e22X<=0){
  x22Speed=x22Speed*(-1);
  }

  if (e23X>=355 || e23X<=0){
  x23Speed=x23Speed*(-1);
  }

  if (e24X>=800 || e24X<=455){
  x24Speed=x24Speed*(-1);
  }

  if (e25X>=800 || e25X<=455){
  x25Speed=x25Speed*(-1);
  }

  if (e26X>=800 || e26X<=455){
  x26Speed=x26Speed*(-1);
  }

  if (e27X>=800 || e27X<=455){
  x27Speed=x27Speed*(-1);
  }

  if (e28X>=800 || e28X<=455){
  x28Speed=x28Speed*(-1);
  }


  if (hit28 === true){
    gate3X = -1000
    gate3Y = 0

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

  if (x<=0){
  x=0}

  if (x+size>=width){
  x=width-size}

  if (y>=height){
    x=400;
    y=50;
  level-=2

  }
}

if (level === 8){
  background(0);
  fill(255);
  textSize(100);
  text("You Win",220,260);
  fill(255);
  textSize(32);


}
}
