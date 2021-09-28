let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER)
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      text('what did the criminal say to the vibrating chair?', width/2, height/2);
      break;

    case 1:
      background('yellow');
      text("what are you shaking for, I'm the one going to jail", width/2, height/2);

      break;
  }
  timer++ ;
  if (timer > 3+60) {
    timer = 0;
    state++;
    if (state > 1) {state = 0;
    }
  }
}

function mouseReleased() {
    state++;
    if (state > 1) state = 0;

}
