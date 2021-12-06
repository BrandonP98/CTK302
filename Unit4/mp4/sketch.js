// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
var plane;
// var bunnyImage;
var frogPos;
var city = 0;
let prevcity = -1;
var myCityString;
//1 = Tampa
//2 = Albuquerque
//3 = Seattle
var weather;
var weatherID = 0; // returned in the JSON weather element
var windspeed = 0;
var temp = 0;
var humidity = 0;
var feels_like = 0;

function setup() {

  createCanvas(displayWidth, displayHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;





  // load any images you need
  plane = loadImage("assets/plane.png");
  albuquerque = loadImage("assets/NewMexico.png");
  grunge = loadImage("assets/Seattle4.png");
  tampa = loadImage("assets/Tampa.png");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);
  //xPosition = mouseX;
  //yPosition = mouseY;



  prevcity = city;
  //determine what city we're in
  if ((xPosition < 120) && (yPosition > 350) && (yPosition < 600)) {
    city = 2;
    myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Albuquerque,NM,US&units=imperial&appid=2ab3fd961cc8c4aacb1786ddb79e8da5';
  }

  if ((xPosition > 400) && (yPosition > 370) && (yPosition < 600)) {
    city = 1;
    myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Tampa,FL,US&units=imperial&appid=2ab3fd961cc8c4aacb1786ddb79e8da5';
  }

  if ((xPosition < 230) && (yPosition < 180) && (yPosition > 0)) {
    city = 3;
    myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle,WA,US&units=imperial&appid=2ab3fd961cc8c4aacb1786ddb79e8da5';
  }

  if (prevcity != city) {
    loadJSON(myCityString, gotData);
  }

  prevcity = city;
  switch (city) {
    case 0:
      //image(artdecometro, 0, 0, 500, 430) ;
      fill('#b3b3b3');
      text("Fly to a city to experience regional weather ", width / 2, height / 2);
      break;

    case 1:
      image(tampa, width /2, height /2, width, height);
      if (weather) {
        //rect(x, 100, 100, 100) ;
        fill('black');
        text("What is the weather in " + weather.name + "?", 20, 20);
        text("Windspeed Is " + windspeed, 20, 40);
        text("Temperature is " + temp, 20, 60);
        text("Humidty is " + humidity, 20, 80);
        text("Feels like " + feels_like, 20, 100);
      }
      break;

    case 2:
      image(albuquerque, width /2, height /2, width, height);
      if (weather) {

        fill('black');
        text("What is the weather in " + weather.name + "?", 20, 20);
        text("Windspeed Is " + windspeed, 20, 40);
        text("Temperature is " + temp, 20, 60);
        text("Humidty is " + humidity, 20, 80);
        text("Feels like " + feels_like, 20, 100);
      }
      break;

    case 3: //Seattle
      image(grunge, width /2, height /2, 350, 900);
      if (weather) {

        fill('black');
        text("What is the weather in " + weather.name + "?", 20, 20);
        text("Windspeed Is " + windspeed, 20, 40);
        text("Temperature is " + temp, 20, 60);
        text("Humidty is " + humidity, 20, 80);
        text("Feels like " + feels_like, 20, 100);
      }
      break;
  }

  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  //textAlign(LEFT);
  //textSize(20);
  //fill('black');
  //text("orientation data:", 25, 25);
  //textSize(15);
  //text("alpha: " + alpha, 25, 50);
  //text("beta: " + beta, 25, 70);
  //text("gamma: " + gamma, 25, 90);
  //textSize(20);
  //text("acceleration data:", 25, 125);
  //textSize(15);
  //text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  //text("y = " + y, 25, 170);
  //stext("z = " + z, 25, 190);
  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  image(plane, 0, 0, 100, 100);
  pop();
  //text(xPosition + ", " + yPosition, 25, 210);

}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  humidity = weather.main.humidity;
  feels_like = weather.main.feels_like;
}
