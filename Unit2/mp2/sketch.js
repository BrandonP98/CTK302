let numberOfTouches ;
let x = 0;

function setup() {
  createCanvas(500, 500);

  artdecometro = loadImage("assets/artdecometro.jpg");
  skyplane = loadImage("assets/skyplane.jpg");
  plane = loadImage("assets/plane.png");
  artdecomiami = loadImage("assets/artdecomiami.jpg");

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      image(artdecometro, 0, 0, 500, 430) ;
      fill('white') ;
      text("Larry is a stock broker stressed from living the big city life and desires a getaway aka an escape", 5, 22) ;
      break ;

      case 1:
      image(skyplane,  250, 250, 500, 430) ;
      image(plane, x, 100, 100, 100) ;
      text("So he decides to book a flight somewhere", 5, 22) ;
      //rect(x, 100, 100, 100) ;
      x = x + 3 ;
      if (x > width) {
        x = 0 ;
        }
      break ;

      case 2:
      image(artdecomiami, 250, 250, 500, 430) ;
      fill('black')
      text("Which ends up flying him out to sunny and coastal Miami where he soaks up South Beach", 5, 22) ;
      break ;

      //case 3:
     //text("three are touching the screen", 5, 22) ;
            // put a picture here
      //break ;


  }

}
