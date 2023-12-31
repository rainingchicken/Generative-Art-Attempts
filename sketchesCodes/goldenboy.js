//rerecreate golden ratio's cousin
//https://www.intmath.com/blog/mathematics/golden-spiral-6512
// a bit motion sickening
var goldenratio = (1 / 2) * (1 + 5 ** (1 / 2));
var zoom = 1;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
 
background(0);
  let golden = new goldenboy();
    noFill();
    stroke(255, 204, 0);
  translate(width / 2, height / 2);
   zoom = (mouseX/500); 
   golden.create(zoom);

  
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
  create(zoom) {
   
    beginShape();

    //a(t) = (r(t)cos(t) , r(t)sin(t))
    //a(t) = (phi^tcos(t) , phi^tsin(t))
    for (let i = 0; i < this.t.length; i++) {
      this.xpoint = this.x[i] * goldenratio ** i;
      this.ypoint = this.y[i] * goldenratio ** i;
      curveVertex(this.xpoint*zoom, this.ypoint*zoom);
    }
    endShape();
  }
}
