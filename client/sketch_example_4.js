class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 1;
  }
  grow() {
    this.radius++;
  }
}

const circles = [];

function setup() {
  createCanvas(1280, 720);
  background(220);

  for (let i = 0; i < 100; i++) {
    circles.push(new Circle(random(width), random(height)));
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, ((circles[i].radius) * 2), ((circles[i].radius) * 2));
    fill(20, 0, 300, 100);
    strokeWeight(3);
  }
  for (let i = 0; i < circles.length; i++) {
    let x = circles[i].x;
    let y = circles[i].y;
    let r = circles[i].radius;
    if (x + r > width || x - r < 0 || y + r > height || y - r < 0) {
      //do not grow!!!
    } else {
      circles[i].grow();
    }
  }
}