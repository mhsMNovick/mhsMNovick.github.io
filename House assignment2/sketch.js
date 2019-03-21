/*
House assignment
Created by Matthew Novick
March 18, 2019
*/

function setup() {
  // put setup code here
  // Create the canvas
  createCanvas(800,600);
  background(135,206,250);
}

function draw() {
  // Variables for house
  // set the width of the house
  //change houseWidth to scale the house
  //dont change houseWidth past 800
  let houseWidth=600;
  let houseHeight=houseWidth/2;
  let refX=width/2-houseWidth/2;
  let refY=height-houseHeight;



  // Main part of the house
  fill(20,75,200);
  rect(refX,refY, houseWidth,houseHeight);
  fill(255);
  // roof
  fill(150,204,0);
  triangle(refX, refY, width/2,refY-houseWidth/4,refX+houseWidth,refY);
  fill(255);
  // Door
  fill(0);
  rect(width/2-(houseWidth/8)/2,height-houseHeight/4,houseWidth/10,houseHeight/4);
  fill(255);
  ellipse(width/2-(houseWidth/8)/4,height-houseHeight/8,houseWidth/64,houseHeight/32);
  //window 1
  rect(width/2-(houseWidth/4),height-houseHeight/1.25,houseWidth/12,houseHeight/6);
  line(width/2-(houseWidth/4),height-houseHeight/1.40,width/2-houseWidth/4+houseWidth/12,height-houseHeight/1.40);
  line(width/2-(houseWidth/4.80),height-houseHeight/1.25,width/2-houseWidth/4+houseWidth/24,height-houseHeight/1.58);
  //window 2
  rect(width/2+(houseWidth/8),height-houseHeight/1.25,houseWidth/12,houseHeight/6);
  //line(width/2+(houseWidth/8),height-houseHeight/1.40,width-houseWidth/4-houseWidth/2.92,height-houseHeight/1.40);
  line(width/2+(houseWidth/8),height-houseHeight/1.40,width/2+(houseWidth/8)+houseWidth/12,height-houseHeight/1.40);
  line(width/2+(houseWidth/6),height-houseHeight/1.25,width/2+houseWidth/4-houseWidth/12,height-houseHeight/1.58);


}
