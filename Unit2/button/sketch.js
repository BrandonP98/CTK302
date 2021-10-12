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
  //fill('black')
  //text(mouseX + ", " + mouseY, 15, 15)
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
