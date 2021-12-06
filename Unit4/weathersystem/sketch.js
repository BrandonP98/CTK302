// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temp = 0;
var humidity = 0;
var feels_like = 0;

function setup() {
  createCanvas(400, 400);

    santacruz = loadImage("assets/santacruz.jpeg");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Santa Cruz,CA,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=2ab3fd961cc8c4aacb1786ddb79e8da5'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
temp = weather.main.temp ;
humidity = weather.main.humidity;
feels_like = weather.main.feels_like;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      image(santacruz, width /2, height /2, 100, 100);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("Windspeed Is " + windspeed, 20, 40);
      text("Temperature is " + temp, 20, 60);
      text("Humidty is " + humidity, 20, 80);
      text("Feels like " + feels_like, 20, 100);



      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}
