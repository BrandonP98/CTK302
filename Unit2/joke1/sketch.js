let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('#42f5c5');
      text("What did the criminal say to the vibrating chair?", 100, 100) ;

      break;

    case 1:
      background('#9ef542');
      text("What are you shaking for? I'm the one going to jail!", 100, 100) ;

      break;
  }

}


function mouseReleased() {
    state++;
    if (state > 1) state = 0;

}
