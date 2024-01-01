function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
  var n; //number of sides of polygon
  var x; //circle x position on canvas
  var y; //circle y position
  var size; //circle size
  frameRate(1);
}

function draw() {
  background(int(mouseX), int(mouseX), int(mouseY), random(255)); //creates different background color based on mouse
  fill(random(), random(), random(), mouseX); //fills shape with random colors with alpha depending on mouse
  n = random(0, 15); //randomize shape
  x = mouseX; //spawns circle where mouse is
  y = mouseY;
  size = random(10, 150);
  if (n <= 2) {
    //sides of shape is less than 2 then always spawn a circle
    circle(x, y, size);
  } else {
    //spawns random shape
    beginShape();
    for (var i = 0; i < n; i++) {
      vertex(random(width), random(height));
    }
    endShape(CLOSE);
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
