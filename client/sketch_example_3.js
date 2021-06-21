const circles = [];

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < 5000; i++) {
    let circle = {
      x : random(width),
      y : random(height),
      radius : 30
    }
    let overlap = false;
    for (let j = 0; j < circles.length; j++) {
      let otherCircle = circles[j];
      let distance = dist(circle.x, circle.y, otherCircle.x, otherCircle.y);
      if (distance < (circle.radius + otherCircle.radius)) {
        overlap = true;
      }
    }

    if (!overlap) {
      circles.push(circle);
    }
  }

  for (let i = 0; i < circles.length; i++) {
    // comment this in to randomize the colors!!!
    let randomRed = random(0, 255);
    let randomGreen = random(0, 255);
    let randomBlue = random(0, 255);
    fill(randomRed, randomGreen, randomBlue, 100);
    strokeWeight(2);
    stroke(51);
    ellipse(circles[i].x, circles[i].y, ((circles[i].radius) * 2), ((circles[i].radius) * 2));
  }
}

function draw() {
}