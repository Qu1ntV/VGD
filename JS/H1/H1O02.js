function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {

  noStroke();
  fill('pink');
  triangle(0,225,450,0,450,450);

  noStroke();
  fill('purple');
  triangle(0,0,450,225,0,450);
  


  strokeWeight(5);
  stroke('pink');
  fill('darkred');
  beginShape();
  vertex(225,115);
  vertex(450,225);
  vertex(225,335);
  vertex(0,225);
  endShape(CLOSE);
}
