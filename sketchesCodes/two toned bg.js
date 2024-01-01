function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
}

function draw() {
  frameRate(60);
  background(mouseX, 50, 60);
}

//stop animation
function stop() {
  noLoop();
}
//play animation
function play() {
  loop();
}
