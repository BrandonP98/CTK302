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
      text("no one is touching the screen", 5, 22) ;
      image(artdecometro, width/2, height/2, 100, 100)
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      image(artdecometro, width/2, height/2, 100, 100)
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
      break ;


  }

}
