let x=0;
let y=255;
let size=50;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  // put drawing code here

  for(let y = 0; y<=height;y=y+50){
 noStroke();
    fill(random(255))
  ellipse(random(windowWidth),y,size,size)


  }


}
