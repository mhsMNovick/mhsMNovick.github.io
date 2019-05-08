/*Matthew Novick
  Snowman drawing lesson
  March 6, 2019
  Revision date: May 8, 2019
*/
function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // Snowman body
  ellipse(200,200,150,150);
  ellipse(200,120,125,125);
  ellipse(200,60,85,85);
  // Snowman colour
  fill(12);
  // Snowman eyes and mouth
  ellipse(185,50,10,10);
  ellipse(215,50,10,10);
  rect(179,70,40,10)
  // Snowman Buttons
  {ellipse(200,120,10,10);
  ellipse(200,133,10,10);
  ellipse(200,147,10,10); fill(300);}
  // Snowman arms
  line(160,133,100,100);
  line(240,133,300,100);
}
