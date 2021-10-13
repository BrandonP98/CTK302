let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  //text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      textSize(20)
      fill('black')
      text("I bet", 5, 22) ;

      break ;

      case 1:
      textSize(20)
      fill('black')
      text("you can't", 5, 22) ;
      fill('#f0bdbd') ;
      triangle(40, 85, 58, 20, 86, 75);
      break ;

      case 2:
      textSize(20)
      fill('black')
      text("fit", 5, 22) ;
      fill('#f0e1bd');
      rect(90, 60, 300, 45) ;
            // put a picture here
      break ;

      case 3:
      textSize(20)
      fill('black')
      text("6 fingers", 5, 22) ;
      fill('#bdc5f0')
      ellipse(252, 144, 72, 72);
            // put a picture here
      break ;

      case 4:
      textSize(20)
      fill('black')
      text("on the screen", 5, 22) ;
      fill('#f0efbd');
      arc(279, 300, 220, 220, PI, TWO_PI);

      break ;

      case 5:
      textSize(20)
      fill('black')
      text("at once", 5, 22) ;
      fill('#beeddb')
      quad(189, 18, 216, 18, 216, 360, 144, 360);
      break ;
      // put a picture here
      break ;

      case 6:
      textSize(20)
      fill('black')
      text("and still see all the shapes", 5, 22) ;
      fill('#bdecf0') ;
      rect(75, 155, 75, 75) ;
      // put a picture here
      break ;
  }

}
