function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  
  // check to condition of the mouse
  if(mouseIsPressed){ fill (300,200,600);// true or false?
    // if true, change the fill color to purple
    ellipse(width/2, height/2, 200, 200);// Increase the size of the circle when mouse is pressed
    
  }
  else { 
  fill (100,300,50);// Change fill color to green when mouse is not pressed
    
  }
  ellipse(width/2, height/2, 100, 100);
}
