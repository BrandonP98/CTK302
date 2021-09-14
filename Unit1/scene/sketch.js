function setup() {
  createCanvas(650, 530);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke() ;
}

function draw() {
  background("#DC22D0");

  fill('#8222DC')
  rect(325, 460, 650, 330);

  fill('#FFB565')
  rect(325, 460, 650, 170);

  //fill('brown')
  //rect(530, 360, 30, 300)

  fill('#A2861F')
  rect(465, 385, 30, 250)

  fill('brown')
  circle(440, 295, 40)

  fill('brown')
  circle(480, 290, 40)

  //fill('brown')
  //circle(510, 220, 40)

  //fill('brown')
  //circle(540, 224, 40)

  fill('#FF9C32')
  circle(115, 145, 90)

  fill('green');
  triangle(449, 235, 360, 325, 454, 285);

  fill('green');
  triangle(449, 235, 540, 315, 454, 285);

  fill('green');
  triangle(449, 235, 540, 238, 454, 285);

  fill('green');
  triangle(449, 235, 372, 225, 454, 285);

  fill('green');
  triangle(439, 235, 493, 166, 484, 243);

  fill('green');
  triangle(493, 166, 528, 200, 488, 192);

  //fill('green');
  //triangle(449, 235, 364, 240, 445, 282);

  //fill('green');
  //triangle(449, 235, 535, 303, 445, 282);

  //fill('green');
  //triangle(449, 235, 521, 270, 445, 282);

  //fill('green');
  //triangle(449, 235, 518, 240, 454, 285);

  //fill('green');
  //triangle(449, 235, 426, 184, 318, 270);

  //fill('green');
  //triangle(449, 235, 426, 184, 550, 257);

  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
