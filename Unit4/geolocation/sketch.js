// Note - you must change line 19 to your own APPID to get this to work!

function setup() {
  createCanvas(windowWidth, windowHeight);

    locate = loadImage("assets/location.jpg");
    kicks = loadImage("assets/alleykicks.jpg");

function draw() {

      background('#ddff87');
      image(locate, 30, 30, 200, 200);
      image(kicks, 100, 100, 200, 200);
      //fill('black');
      textSize(24)
      text("I enjoy taking walks at night (in somewhat comfortable weather ");


  }
}
