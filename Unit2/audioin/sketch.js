var mic;
var vol;
var c = 'purple';
let x = 0 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > 0.20) { // if the volume is LOUD?
    // do something

    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  else

  if (vol > 0.15) { // if the volume is LOUD?
    // do something

  textSize(18);
  fill('black')
  text("You're gonna crash my system!", 90, 190);


  }


  // extra stuff for debugging
  textSize(18);
  text("Click and talk\nNot too loud tho!\n\nMy volume is " + vol, 20, 40);

  stroke('white')
  rect(vol * 100, 120, 50, 50);

//   rect(vol * 300, 150, 50, 50);

//   x = map(vol, 0, .2, 0, width) ;
//   rect(x, 200, 50, 50);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
