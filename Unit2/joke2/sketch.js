let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER)
}

function draw() {

  switch (state) {

    case 0:
      background('#abebe6');
      text("What did the phone buy his longtime girlfriend?", 200, 100);
      break;

    case 1:
      background('#faeeb6');
      text("A ring", 100, 100);

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
