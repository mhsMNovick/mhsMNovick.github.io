  /* Working with levels
     Matthew Novick
     May 3, 2019
     Revised: May 8, 2019 */



  /*
  We will initially set the level variable to 0
  Level 0 --> Instructions
  Level 1 --> Game
  Level 2 --> Win Screen
  */
  let level = 0;

  //Create the x and y variables for our character
  let x;
  let y;

  //Create a variable that will store our image
  let img;
  let hit=false
  let x1=800
  let y1=100

  let ySpeed=10

  let size=100

  function preload() {
    //Assign the image file to the variable
    img = loadImage('alien.png');
  }


  function setup() {
    // put setup code here
    //Create the canvas
    createCanvas(1200,800);

    //Assign the initial values for x and y
    x = width/2;
    y = height/2;
  }

  function draw() {
    // put drawing code here
  print(level);
  hit=collideRectRect(x,y,66,92,x1,y1,size,size);
  print(hit);


  /*--------------------INSTRUCTIONS--------------------*/
    if (level ===0) {
      //Show the instructions to the user
      background(0);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(32);
      text('ALIEN DOMINATION', width/2, height/2);

      textSize(16);
      text('You are a member of the Glorg alien race, a species determined to take over the earth. \nUse your arrow keys to move your character off of the screen to win.', width/2, height/2+50);
      text('Press enter to continue', width/2, height/2+100);

      //If they press enter, move to the next level (game)
      if (keyIsDown(ENTER)) {
        level+=1;
      }
    }
    /*--------------------END INSTRUCTIONS--------------------*/


    /*--------------------GAME--------------------*/
    else if (level ===1) {

      //Change the background and add the character
      background(255,100,250);
      image(img,x,y);

      //Move the character based on input from the user (arrow keys)
      if (keyIsDown(RIGHT_ARROW)) {
        x+=5;
      }

      if (keyIsDown(LEFT_ARROW)) {
        x-=5;
      }

      if (keyIsDown(UP_ARROW)) {
        y-=5;
      }

      if (keyIsDown(DOWN_ARROW)) {
        y+=5;
      }

      //If the user leaves the screen, they win so move on to the next level (win)
      if (x>width || x<0 || y>height || y<0) {
        background(0);
        fill(255);
        textSize(16);
        text('Level 1 completed', width/2, height/2+50);
        text('Press enter to continue', width/2, height/2+100);
        if (keyIsDown(ENTER)) {
        x=width/2-200
        y=height/2
        level+=1
      }
        }
        }
        else if (level ===2) {

          //Change the background and add the character
       background(255,100,250);
       noStroke();
       fill(255,100,250)
       rect(x,y,66,92);
       image(img,x,y);

       fill(187,23,12);
       rect(x1,y1,size,size);

       //move the rectangle
       y1=y1+ySpeed;

       //if it reaches the bottom, change direction
       if (y1+size>=height || y1<=0){
       ySpeed=ySpeed*(-1);

       }



       //Move the character based on input from the user (arrow keys)
       if (keyIsDown(RIGHT_ARROW)) {
         x+=5;
       }

       if (keyIsDown(LEFT_ARROW)) {
         x-=5;
       }

       if (keyIsDown(UP_ARROW)) {
         y-=5;
       }

       if (keyIsDown(DOWN_ARROW)) {
         y+=5;
       }

      if (hit===true){
        noLoop();
        if (keyCode===82) {
          x=width/2;
          y=height/2;
          level=1;
        }
        background(0)
      text('Game Over', width/2,height/2)
        text('Press F5 to play again', width/2, height/2+50);

  }



      //If the user leaves the screen, they win so move on to the next level (win)
      if (x>width) {
        level+=1
      }
    }
    /*--------------------END GAME--------------------*/

    /*--------------------WIN SCREEN--------------------*/
    else if (level===3) {
      //Change the backround and inform the user that they won
      background(0,255,0);
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(32);
      text('YOU WIN!', width/2, height/2);
      textSize(16);
      text('Press enter to play again', width/2, height/2+50);

      //If the user presses enter, reset the x and y value and reset the level to level 1 (game)
      if (keyIsDown(ENTER)) {
        x=width/2;
        y=height/2;
        level=1;
      }
    }
    /*--------------------END WIN SCREEN--------------------*/


  }
