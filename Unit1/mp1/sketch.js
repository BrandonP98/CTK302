function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke() ;
}

function draw() {
  background(200,350,450);

  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed

    fill('red') ;
    rect(274, 154, 200, 200) ;
    background('black');

    fill('red') ;
    ellipse(325, 290, 200, 560);

  fill('green') ;
  ellipse(325, 200, 300, 300);

  fill('green') ;
  ellipse(325, 290, 200, 160);

    fill('black') ;
  ellipse(250, 174, 110, 31);

  fill('black') ;
  ellipse(250, 174, 110, 63);
  ellipse(400, 174, 110, 63);
  //ellipse(232, 157, 90, 70);
  //ellipse(232, 157, 90, 70);

    fill('white')
    circle(558, 100, 150);

    fill('white')
    point(82, 173);


  //stroke(0)
  //line(284, 297, 370, 302);
  //arc(35, 35, 85, 50, 0, PI / 2.0);




  } else {
    // when the mouse isn't pressed!
  }


    fill('white')
    circle(90, 95, 70);
    circle(90, 60, 70);
    circle(75, 80, 70);
    circle(60, 60, 70);
    circle(50, 80, 70);
  circle(122, 77, 70);

  fill('green') ;
  ellipse(325, 200, 300, 300);

  fill('green') ;
  ellipse(325, 290, 200, 160);

  fill('black') ;
  ellipse(250, 174, 110, 63);
  ellipse(400, 174, 110, 63);
  ellipse(325, 300, 80, 63);
  //ellipse(232, 157, 90, 70);
  //ellipse(232, 157, 90, 70);


  //stroke(0)
  //line(284, 297, 370, 302);
  //arc(35, 35, 85, 50, 0, PI / 2.0);


  // this shows mouse location - comment it out when you're done!

  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
