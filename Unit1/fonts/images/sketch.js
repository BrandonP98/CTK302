let TattPen, Cypr, Seafood;

function setup() {
  createCanvas(500, 500);
  TattPen = loadImage("assets/TattPen");
  Cypr = loadImage("assets/Cypr");
  Seafood = loadImage("assets/Seafood");
  imageMODE(CENTER) ;
}


function draw() {
  background('green');

  image(TattPen, width/2, height/2, 100, 100);
  image(Cypr, width/2, height/2 - 120, 100, 100);
  image(Seafood, width/2, height/2 + 120, 100, 100);

}
