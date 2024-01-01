//create volcano with fuming smoke
let sky = [];
let smoke = [];
var vy;
var y, bluealpha, redalpha, shake;
function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
  for (let i = 0; i < height; i++) {
    sky.push(new Sky());
  }
}

function draw() {
  y = 0;
  bluealpha = 300;
  redalpha = 50;

  //create artifical gradient by creating a bunch of rectangles which loses transparency as it goes down in y axis
  for (let i = 0; i < sky.length; i++) {
    sky[i].create(y);
    y += height / 100;
    bluealpha -= 3;
    redalpha += 3;
  }

  //create smoke behind the mountain
  let ash = new Smoke();
  smoke.push(ash);
  for (let i = 0; i < smoke.length; i++) {
    smoke[i].update();
    smoke[i].create();
  }
  shake = random(1, 2);

  //make volcano explode more by increasing velocity and size of smoke balls
  if (mouseIsPressed) {
    ash.vy = random(-0.5, 0.5);
    ash.vx = random(-1, 1);
    ash.size = random(10, 20);
    shake = random(3, 6);
  }
  //create volcano mountain
  push();
  translate(shake, shake);
  fill(0);
  noStroke();
  beginShape();
  vertex(-100, height);
  vertex(width / 2 - width / 10, height / 2 - height / 10);
  vertex(width / 2 + width / 9, height / 2);
  vertex(width, height);
  endShape();
  pop();
}

//stop animation
function stop() {
  noLoop();
}
//play animation
function play() {
  loop();
}
//create background
class Sky {
  constructor() {}

  create(y) {
    //layer gradient of blue and red

    //red gradient
    push();
    noStroke();
    fill(255, 0, 0, redalpha);
    rect(0, y, width, height / 100);
    pop();

    //bluegradient
    push();
    noStroke();
    fill(0, 51, 102, bluealpha);
    rect(0, y, width, height / 100);
    pop();
  }
}

class Smoke {
  //https://www.youtube.com/watch?v=UcdigVaIYAk
  constructor() {
    this.xpos = 200;
    this.ypos = 200;
    this.size = random(5, 50);
    this.vx = random(-0.1, 0.3);
    this.vy = random(0, 1);
  }

  //create dark grey circles to smiluate smoke
  create() {
    noStroke();
    fill(10);
    circle(this.xpos, this.ypos, this.size);
  }
  //amation of balls going up
  update() {
    this.xpos += this.vx;
    this.ypos -= this.vy;
  }
}
