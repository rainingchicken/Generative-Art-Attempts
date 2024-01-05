//recreate a CD spinning
var x, y, radius, coloralpha, size;
var circles = [];
function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
  background(50);
}

function draw() {
  let c = new drawcircle();
  circles.push(c);

  noStroke();
  translate(width / 2, height / 2);
  
  push();
  fill(20, 20);
  circle(0, 0, width / 5); // black band of the cd
  fill(255, 40);
  circle(0, 0, width / 6); //white circle
  fill(50);
  circle(0, 0, width / 8); //smallest circle make sdame color as background to emulate transparency
  pop();
  
  rotate(frameCount / 2); //make circle moves around path
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].create();
  }
}

class drawcircle {
  constructor() {
    this.x = 60; //controls circles' distance from orgins
    this.y = 60;
    this.size = width / 4; //control circle size
    this.coloralpha = 255;
  }
  update() {
    this.coloralpha -= 155; //create variation in color but gives bluring effects
  }

  create() {
    fill(random(255), 100, 100, this.coloralpha);
    circle(this.x, this.y, this.size); //create circles
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
