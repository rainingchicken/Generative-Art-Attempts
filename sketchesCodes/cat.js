function setup() {
  var canv = createCanvas(400, 400);
  canv.mouseOver(play);
  canv.mouseOut(stop);
}

function draw() {
  background(110);
  let el = new earleft(88, 174, 36, 70); //left ear
  el.create();

  ellipse(229 + mouseX / 70, 167 + mouseY / 70, 36, 70); //ear right

  ellipse(165 + mouseX / 50, 239 + mouseY / 50, 142 * 2, 186); //face

  fill(200);
  ellipse(165 + mouseX / 70, 239 + mouseY / 70, 20, 16); //nose
  fill(255);

  //whiskers
  line(
    180 + mouseX / 70,
    235 + mouseY / 70,
    252 + mouseX / 70,
    224 + mouseY / 70
  );
  line(
    180 + 2 + mouseX / 70,
    235 + 4 + mouseY / 70,
    252 + 2 + mouseX / 70,
    224 + 14 + mouseY / 70
  );
  line(
    180 + 2 + mouseX / 70,
    235 + 7 + mouseY / 70,
    252 + 16 + mouseX / 70,
    224 + 28 + mouseY / 70
  );
  line(
    149 + mouseX / 70,
    237 + mouseY / 70,
    70 + mouseX / 70,
    230 + mouseY / 70
  );
  line(
    149 + 3 + mouseX / 70,
    235 + 6 + mouseY / 70,
    70 + 2 + mouseX / 70,
    230 + 15 + mouseY / 70
  );
  line(
    149 + 4 + mouseX / 70,
    235 + 8 + mouseY / 70,
    70 + 1 + mouseX / 70,
    230 + 31 + mouseY / 70
  );

  //table
  rect(0, height - height / 3, width, 200);

  let m = new mouse(mouseX, mouseY, 50); //create mouse object
  m.create();
}

//stop animation
function stop() {
  noLoop();
}
//play animation
function play() {
  loop();
}

class earleft {
  constructor(x, y, sizeW, sizeH) {
    this.x = x;
    this.y = y;
    this.sizeW = sizeW;
    this.sizeH = sizeH;
  }

  create() {
    rotate(radians(-45)); //tilt ear 45 degree to the left
    ellipse(
      -this.x + mouseX / 80,
      this.y + mouseY / 80,
      this.sizeW,
      this.sizeH
    ); //ear left
    rotate(radians(45)); //to not rotate the whole canvas
  }
}

class mouse {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  create() {
    fill(115);
    circle(this.x - 20, this.y - 20, this.size / 4); //ears of mouse
    circle(this.x - 15, this.y - 20, this.size / 4);
    arc(this.x, this.y, this.size, this.size, PI, 0, CHORD); //body of mouse
    noFill();
    arc(this.x + 50, this.y, 50, 50, HALF_PI, PI); //tail of mouse
    fill(255);
  }
}
