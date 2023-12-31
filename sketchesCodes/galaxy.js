//rerecreate golden ratio's cousin
//making a galaxy
//https://www.intmath.com/blog/mathematics/golden-spiral-6512
// a bit motion sickening
var goldenratio = (1 / 2) * (1 + 5 ** (1 / 2));
var zoom, size, coloralpha, staralpha; //how muxh canvas zooms in and out based on mouse location, size of each gas layer, color of gas, color of star
let golden, center; //define class of spiral and circle at center of galaxy
let gas = [];
let star = [];
function setup() {
  createCanvas(400, 400);
  golden = new goldenboy();
  center = new Center();
  for (let i = 0; i < width * 10; i++) {
    gas.push(new Gas());
  }
  for (let i = 0; i < width * 10; i++) {
    star.push(new Stars());
  }
  frameRate(30);
}

function draw() {
  background(0);

  zoom = mouseX / 500;
  push();
  noFill();
  stroke(255, 204, 0);
  translate(width / 2, height / 2);

  golden.createCurve(zoom);
  pop();
  coloralpha = 0.6;
  size = 200;
  for (let i = 0; i < gas.length; i++) {
    coloralpha -= 0.06;
    size *= 2;
    gas[i].create(size, zoom, coloralpha);
  }
  center.create(zoom);

  staralpha = 10;
  for (let i = 0; i < star.length; i++) {
    coloralpha -= 0.06;
    star[i].create(zoom, staralpha);
  }
}
//create theta [0, pi/2, pi, 3/2 pi, 2pi,...]
function theta() {
  var turns = 100;
  var t = [];
  for (let i = 0; i < turns; i++) {
    if (i == 0) {
      t[i] = 0;
    } else {
      t[i] = t[i - 1] + Math.PI / 2;
    }

    t.push(t[i]);
  }
  return t;
}

function cost() {
  var x = []; //array of cos(t)
  let t = theta();
  t.forEach((element) => {
    //have to make 3 sig fig because cos was having trouble calculating many decimal places
    x.push(Math.round(Math.cos(element.toFixed(3))));
  });
  return x;
}

function sint() {
  var y = []; //array of sin(t)
  let t = theta();
  t.forEach((element) => {
    //have to make 3 sig fig because cos was having trouble calculating many decimal places
    y.push(Math.round(Math.sin(element.toFixed(3))));
  });
  return y;
}

//creates visual of golden ratio spiral
class goldenboy {
  //a(t) = (xpoint , ypoint)
  constructor(t, x, y, xpoint, ypoint) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.t = theta();
    this.x = cost();
    this.y = sint();
  }
  createCurve(zoom) {
    //half of galaxy
    beginShape();

    //a(t) = (r(t)cos(t) , r(t)sin(t))
    //a(t) = (phi^tcos(t) , phi^tsin(t))
    for (let i = 0; i < this.t.length; i++) {
      this.xpoint = this.x[i] * goldenratio ** i;
      this.ypoint = this.y[i] * goldenratio ** i;
      curveVertex(this.xpoint * zoom, this.ypoint * zoom);
    }
    endShape();
    //second half
    beginShape();

    for (let i = 0; i < this.t.length; i++) {
      this.xpoint = this.x[i] * goldenratio ** i;
      this.ypoint = this.y[i] * goldenratio ** i;
      curveVertex(this.xpoint * -1 * zoom, this.ypoint * -1 * zoom);
    }
    endShape();
  }
}

//creates space
class Gas {
  constructor() {}
  create(size, zoom, coloralpha) {
    push();
    noStroke();
    fill(255, 255, 191, 100 * coloralpha);
    ellipse(width / 2, height / 2, size * (10 / 7) * zoom, size * zoom);
    pop();
  }
}

//create a bright star the middle
class Center {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  create(zoom) {
    push();
    noStroke();
    fill(255, 255, 255, 250);
    ellipse(
      width / 2,
      height / 2,
      (width / 3) * (10 / 7) * zoom,
      (width / 3) * zoom
    );
    pop();
  }
}

//create dotted stars
class Stars {
  constructor(x, y, size) {
    this.x = random(width * 100);
    this.y = random(height * 100);
    this.size = random(1, 5);
  }
  create(zoom, staralpha) {
    push();
    noStroke();
    fill(255, 255, 255, 100 * staralpha);
    circle(this.x * zoom, this.y * zoom, this.size * zoom);
    pop();
  }
}
