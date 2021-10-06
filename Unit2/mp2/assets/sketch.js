let numberOfTouches ;

function setup() {
  createCanvas(400, 400);

  artdecometro = loadImage("assets/artdecometro.jpg");
  skyplane = loadImage("assets/skyplane.jpg");
  artdecomiami = loadImage("assets/artdecomiami.jpg");
  imageMode(CENTER) ;

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Larry is a stock broker stressed from living the big city life and desires a getaway aka an escape", 5, 22) ;
      image(artdecometro, width/2, height/2, 100, 100)
      break ;

      case 1:
      text("So he decides to book a flight somewhere", 5, 22) ;
      image(skyplane, width/2, height/2, 100, 100)
      break ;

      case 2:
      text("Which takes him to sunny and coastal Miami where he soaks up South Beach", 5, 22) ;
      image(artdecomiami, width/2, height/2, 100, 100)
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
      break ;


  }

}
