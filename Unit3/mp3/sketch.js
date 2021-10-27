let cars = [];
let maxCars = 14 ;
let state = 0 ;
let timer = 0 ;
let carsEaten = 0;

let frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  evilp = loadImage("assets/evilp.png");
  halloweenmoon = loadImage("assets/halloweenmoon.jpg");
  toolhammerc = loadImage("assets/toolhammerc.png");
  //artdecomiami = loadImage("assets/artdecomiami.jpg");

  // Spawn many objects
  for (let i = 0; i < 12; i++) {
    cars.push(new Car());
  }
// initialize frog position
  frogPos = createVector(width / 2, height - 70);
}

function draw() {
  switch(state) {
  case 0: // welcome
    background('red');
    fill('white');
    text("Hurry Up & Click!", 425, 450) ;
    fill('white');
    textSize(60);
    text("SMASHIN' PUMPKINS", 360, 150) ;
    //rect(400, 240, 100, 100)
    image(evilp, 600, 240, 100, 100);
    // image(splashscreen, ....)
    break ;

    case 1: // game state
    game();
    timer++ ;
      if (timer > 10*60) {
        state = 3 ; //we lost
        timer = 0 ;
      }
    break ;

    case 2: // winning state
    background('red');
    fill('white');
    textSize(40);
    text("SO YOU CAN SUCCEED?", 450, 100) ;
    break ;

    case 3:
    background('black');
    fill('white');
    textSize(70);
    fill('orange')
    text("YOU SUCK!!", 460, 300) ;
    break ; // losing state
  }
}


 function mouseReleased(){
   if ((state == 0) && (mouseX > 135) && (mouseX < 235) && (mouseY > 110) && (mouseY < 210)) {
    state = 1;
  }
   switch(state){
     case 0:
       state = 1 ;
       break;

       case 2: // the win state
       resetTheGame() ;
       state = 2 ;
       break ;

       case 3: // losing state
       resetTheGame() ;
       state = 0 ;
       break ;
 }

}



function game() {
  background('black');
  image(halloweenmoon, 5, 5, 1300, 655 );
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ; //takes out a car
    }
  }

  if (cars.length == 0) {
    state = 2 ; //We won
  }


  // print out how many cars are left
  fill('black');
  textSize(16) ;
  text("Pumpkins Left: "+ cars.length + " Pumkins Smashed = "+ carsEaten, 20, 30) ;

  //fill("green");
  image(toolhammerc, frogPos.x, frogPos.y, 50, 50);
  checkForKeys() ;
}

function resetTheGame() {
  timer = 0
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), random(height-120));
    this.vel = createVector(random(5), 0);
    this.cor = color(0, random(50, 100), random(190, 245), random(100));
    this.size = random(90);
  }

  // methods

  display() {
    fill(this.cor);
    // rect(this.pos.x, this.pos.y, 75, 25);
    //textSize(this.size);
    image(evilp, this.pos.x, this.pos.y, 40, 40);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
