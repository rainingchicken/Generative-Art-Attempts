//experimenting with 3d
function setup() {
  var canv = createCanvas(200, 200, WEBGL); //small canvas to not hurt eyes looking at this piece
  canv.mouseOver(play);
  canv.mouseOut(stop);
}

function draw() {
  background(0);
  noFill();

  //control camera
  orbitControl();

  let rad = millis() / 4600;
  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);
  // xy-axis roation
  //https://math.stackexchange.com/questions/1402362/can-rotations-in-4d-be-given-an-explicit-matrix-form
  applyMatrix(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ct, -st, 0, 0, st, ct);
  stroke(255);
  sphere(50);
}
//stop animation
function stop() {
  noLoop();
}
//play animation
function play() {
  loop();
}
