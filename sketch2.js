function setup() {
  let cnv2 = createCanvas(400, 400);
  cnv2.position(0, 500);
  var circleSize; //controls size of circle
  var circleColor; //controls filled color of the cicle created
}

function draw() {
  circleColor = random(random(0, 255), random(0, 255), random(0, 255)); //colors set to random for visual simulation
  circleSize = random(10, 200); //size is also random to make it interesting

  if (mouseIsPressed == true) {
    //creates circles when  mouse is clicked
    fill(circleColor);
    circle(mouseX, mouseY, circleSize); //creates circle shape
  }
}
