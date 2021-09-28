let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      // text('what did the criminal say to the vibrating chair?', width/2 height/2);
      //text("what are you shaking for, I'm the one going to jail", width/2 height/2);
      text("what did the criminal say to the vibrating chair?", 100, 100) ;
      break;

    case 1:
      background('yellow');
      //text("what are you shaking for, I'm the one going to jail", width/2 height/2);
      text("hello world", 100, 100) ;
      break;
  }

}


function mouseReleased() {
    state++;
    if (state > 1) state = 0;

}
