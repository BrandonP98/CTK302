let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  //for (let i = 0; i < 20; i++) {
    //cars.push(new Car());
  //}
}

function draw() {
  background("#1a86c4");
  cars.push(new Car());
  for (let i = 4; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0) {
      cars.splice(i, 1) ;
    }

  }

  print(cars.length) ;
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(250, 350);
    this.vel = createVector(random(10, -10), random(-2, -70));
    //this.a = random(255) ; //#f7c439 #c44a1a
    this.r = ('#f7c439');
    this.g = random(255);
    this.b = ('#c44a1a');
    this.size = random(15, 25);

  }

  // methods
  display() {

    fill(this.r, this.g, this.b) ;
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  move() {
    this.pos.add(this.vel);
    this.a -= 20;
    //if (this.pos.x > width) this.pos.x = 0;
    //if (this.pos.x < 0) this.pos.x = width;
    //if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
