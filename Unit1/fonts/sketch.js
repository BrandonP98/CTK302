let f1, f2, f3;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/OE.ttf");
  f2 = loadFont("assets/Graf.ttf");
  f3 = loadFont("assets/Deco.ttf");
  textAlign(CENTER) ;
}
  function draw() {
    background('orange');
    textFont(f1);
    textSize(28);
    text("Go CTK", width/2, 100) ;

    textFont(f2);
    textSize(24);
    text("Go You Redbirds!", width/2, 160) ;

    textFont(f3);
    textSize(24);
    text("Go You Redbirds!", width/2, 200) ;
  }
