let location, alleykicks;

function setup() {
  createCanvas(500, 500);
  location = loadImage("assets/location.jpg");
  alleykicks = loadImage("assets/alleykicks.jpg");
  //Seafood = loadImage("assets/Seafood.png");
  imageMode(CENTER) ;
}


function draw() {
  background('green');

  image(location, width/2, height/2, 100, 100);
  image(alleykicks, width/2, height/2 - 120, 100, 100);
  //image(Seafood, width/2, height/2 + 120, 100, 100);
  textSize(24);
  text("I enjoy taking walks at night in somewhat comfortable weather" 30, 300)

}
