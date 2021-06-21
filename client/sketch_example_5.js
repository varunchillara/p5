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
let newWidth = 20;
let newHeight = 20;

function setup() {
  createCanvas(1280, 720);
  background(220);

  for (let i = 0; i < 100; i++) {
    // circles.push(new Circle(random(width), random(height)));
    // newWidth += 20;
    // newHeight += 20;
    circles.push(new Circle(random(width), random(height)));
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, ((circles[i].radius) * 2), ((circles[i].radius) * 2));
    fill(20, 0, 300, 50);
    strokeWeight(3);
  }
  for (let i = 0; i < circles.length; i++) {
    let currentCircle = circles[i];
    let x = circles[i].x;
    let y = circles[i].y;
    let r = circles[i].radius;
    let isInsideCanvas = x + r > width || x - r < 0 || y + r > height || y - r < 0;
    let isTouchingOtherCircle = false;

    for (let j = 0; j < circles.length; j++) {
      if (i === j) {
        break;
      }
      let otherCircle = circles[j];
      let distance = dist(currentCircle.x, currentCircle.y, otherCircle.x, otherCircle.y);
      if (distance < currentCircle.radius + otherCircle.radius) {
        isTouchingOtherCircle = true;
      }
    }
    if (isInsideCanvas) {
      //do nothing
    } else if (isTouchingOtherCircle) {
      //do nothing
    } else {
      circles[i].grow();
    }
  }
}