// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
var plane;
// var bunnyImage;
var frogPos;
var city = 0;
 //1 = Tampa
 //2 = Albuquerque
 //3 = Seattle

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;





  // load any images you need
  plane = loadImage("assets/plane.png");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  //xPosition = map(gamma, -18, 18, 0, width);
  //yPosition = map(beta, 25, 45, 0, height);
    xPosition = mouseX;
    yPosition = mouseY;

  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  image(plane, 0, 0, 100, 100);
  pop();
  //if(xPosition >)


  // update the frog's position using the accelerometer data
  //frogPos.x = xPosition;
  //frogPos.y = yPosition;



  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("", width / 2, 600, windowWidth - 200, windowHeight - 200);


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y, 25, 170);
  text("z = " + z, 25, 190);
  text(xPosition + ", " + yPosition, 25, 210);

}

function deviceShaken() {

}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
