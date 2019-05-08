  /* Decision Structure 
     Matthew Novick
     April 30, 2019
     Revised: May 8, 2019 */



  let choices=['rock','paper','scissors'];
  let choice;
  function setup() {
  // put setup code here
  createCanvas(800,600);
  background(100,250,234)
  choice=random(choices);
  }

  function draw() {
  // put drawing code here
  textSize(25);
  text('CPU',width/2+25,height/2-25);
  text('Player',width/2-100,height/2-25);
  }

  function keyPressed(){



  if (keyCode === LEFT_ARROW) {
    background(100,250,234)
    textSize(25)
    text(random(choices),width/2+25,height/2)

    text('rock',width/2-100,height/2);


  }

  if (keyCode === RIGHT_ARROW) {

  background(100,250,234)
    textSize(25)
  text(random(choices),width/2+25,height/2)


  text('paper',width/2-100,height/2);




  }

  if (keyCode === UP_ARROW) {

  background(100,250,234)
    textSize(25)
  text(random(choices),width/2+25,height/2)


  text('scissors',width/2-100,height/2);





  }
    }
