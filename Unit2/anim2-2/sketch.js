// Reed Cavi's Rain Man

let x = 0 ;

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
  if (x>= width) {
    x = 0 ;
    }
  
}


function avatar() {
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

}
