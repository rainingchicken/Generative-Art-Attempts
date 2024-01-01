//hurricane

var goldenratio = (1 / 2) * (1 + 5 ** (1 / 2));

function setup() {
  //to prevent lag from unnecessarily activating when mouse on on convas
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
}

function draw() {
  background(0, 155, 255);
  noFill();
  const c = color(255);
  c.setAlpha(100);
  stroke(c);
  translate(((width / 2) * mouseX) / 200, ((height / 2) * mouseY) / 200);
  let golden = new goldenboy();

  //third layer
  for (let i = 0; i < 3; i += 0.8) {
    push();
    rotate(i * PI);
    strokeWeight(160);
    golden.create();
    pop();
  }

  //second layer
  for (let i = 0; i < 3; i += 0.8) {
    push();
    rotate(i * PI);
    strokeWeight(40);
    golden.create();
    pop();
  }

  //main
  for (let i = 0; i < 3; i += 0.8) {
    push();
    strokeWeight(20);
    rotate(i * PI);
    golden.create();
    pop();
  }

  //create eye of storm
  push();
  fill(0, 155, 255, 100);
  circle(0, 0, 50);
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
  create() {
    beginShape();

    for (let i = 0; i < this.t.length; i++) {
      this.xpoint = this.x[i] * goldenratio ** i;
      this.ypoint = this.y[i] * goldenratio ** i;
      curveVertex(this.xpoint, this.ypoint);
    }
    endShape();
  }
}
