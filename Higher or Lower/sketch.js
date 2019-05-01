let choice=['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
let choices;
let nextoption=['1','2','3','4','5','6','7','8','9','10','11','12','13','14'];
let nextnumber;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(100,250,234);
  choices=random(choice);
  nextnumber=random(nextoption);
}

function draw() {
  // put drawing code here



}



function mouseClicked(){
if(mouseClicked){
  background(100,250,234)
  print(random(choice));
  textSize(50);
  text(choices,windowWidth/2,windowHeight/2);

}

}

function keyPressed() {


  if (keyCode === LEFT_ARROW) {
  //  nextoption=print(random(choice));
    text(nextnumber,windowWidth/2+100,windowHeight/2)

  if (choices<=nextnumber){
    text('you win',windowWidth/2,windowHeight/2+50);


  }
  if(choices>=nextnumber){
    text('you lose',windowWidth/2,windowHeight/2+50);

  }
  }
 if (keyCode === RIGHT_ARROW) {
   text(nextnumber,windowWidth/2+100,windowHeight/2)

 if (choices>=nextnumber){
   text('you win',windowWidth/2,windowHeight/2+50);


 }
 if(choices<=nextnumber){
   text('you lose',windowWidth/2,windowHeight/2+50);

 }
 }
}
