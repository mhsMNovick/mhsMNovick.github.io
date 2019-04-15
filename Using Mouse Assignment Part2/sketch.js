let size=10

function setup() {
  // put setup code here
  createCanvas(1200,1000);
  background(100,20,240)
}


function draw() {

  }
  function mouseMoved(){
  if (mouseX) {
  fill(random(255),random(255),random(255));
  line(mouseX,mouseY, size,size);
}


}

function mouseClicked(){
if (size){
  background(random(255),random(255),random(255))
size=random(255)

}

}
