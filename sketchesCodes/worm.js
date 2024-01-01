var circleSize; //controls size of circle
var circleColor; //controls filled color of the cicle created
var create;
let savedTime;
let totalTime = 10000;
function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
  background(56, 56, 56);
  savedTime = millis(); //setup timer
}

function draw() {
  let passedTime = millis() - savedTime; //calculate time pased
  circleColor = random(random(0, 255), random(0, 255)); //colors set to random for visual simulation
  circleSize = random(1, 150); //size is also random to make it interesting
  fill(circleColor);

  if (mouseIsPressed) {
    //creates circles when  mouse is clicked
    circle(mouseX, mouseY, circleSize); //creates circle shape
  }
  if (passedTime > totalTime) {
    //if time pass 10 seconds
    clear(); //to prevent lag
    background(56, 56, 56);
    savedTime = millis();
  }
}

//stop animation
function stop() {
  noLoop();
}
//play animation
function play() {
  loop();
}
