let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background('red');

  switch (state) {

    case 0:
      fill('green')
      rect(135, 110, 100, 100)
      fill('black')
      text ("Christmas season is approaching!", 100, 80)

      break;

    case 1:
      background('green');
      fill('red')
      rect(135, 110, 100, 100)
      fill('black')
      text ("Christmas season is now here!", 110, 80)

      break;

    //case 2:
      //text("2", 100, 100);
      //break;

  }
<<<<<<< HEAD
  //fill('black')
  //text(mouseX + ", " + mouseY, 15, 15)
=======
  fill('black')
  text(mouseX + ", " + mouseY, 15, 15)
>>>>>>> 801ec18525cd706a9088b548298c23c07276c3c4
}


function mouseReleased() {
  if ((state == 0) && (mouseX > 135) && (mouseX < 235) && (mouseY > 110) && (mouseY < 210)) {
    state = 1;
    }
  else
  if ((state == 1) && (mouseX > 135) && (mouseX < 235) && (mouseY > 110) && (mouseY < 210)) {
    state = 0;
    }
}
