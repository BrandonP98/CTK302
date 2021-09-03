let TattPen, Cypr, Seafood;

function setup() {
  createCanvas(500, 500);
  TattPen = loadImage("assets/TattPen.jpg");
  Cypr = loadImage("assets/Cypr.jpg");
  Seafood = loadImage("assets/Seafood.png");
  imageMode(CENTER) ;
}


function draw() {
  background('green');

  image(TattPen, width/2, height/2, 100, 100);
  image(Cypr, width/2, height/2 - 120, 100, 100);
  image(Seafood, width/2, height/2 + 120, 100, 100);

}
