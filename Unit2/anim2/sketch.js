// Reed Cavi's Rain Man

let x = 0 ;
let d = 40;
let p1 = d;
let p2 = p1 + d;
let p3 = p2 + d;
let p4 = p3 + d;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  push() ;
  translate(x, 0) ;
  avatar() ;
  pop() ;

  x = x + 3 ;
  if (x > width) {
    x = -300 ;
  }

}


function avatar() {
  // rain man body head when not pressed
 fill('yellow')
 ellipse(410, 170, 80, 80);

 fill('pink');
 arc(410, 180, 20, 20, 80, PI + QUARTER_PI, CHORD);



 // rain man body
 fill('black');
 rect(390, 220, 40, 110);
 rect(395, 230, 10, 140);
 rect(413, 230, 10, 140);
 rect(404, 210, 10, 40);

 fill('green')
 ellipse(410, 240, 30, 30);

 // rain man arms
 fill('black');
 line(500, 200, 400, 225);
 fill('black');
 line(300, 210, 400, 225);

 fill('red')
 ellipse(395, 150, 10, 10);

 fill('red')
 ellipse(425, 150, 10, 10);

  fill('black');
 line(380, 140, 400, 145);

  fill('black');
 line(420, 145, 440, 140);

function mouseReleased() {
  fill('black')
  print(mouseX + ", " + mouseY, 40, 40);
}
}
