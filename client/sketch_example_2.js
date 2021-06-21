const circles = [];

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < 500; i++) {
    let circle = {
      x : random(width),
      y : random(height),
      radius : 24
    }
    circles.push(circle);
  }

  for (let i = 0; i < circles.length; i++) {
    // comment this in to randomize the colors!!!
    let randomRed = random(0, 255);
    let randomGreen = random(0, 255);
    let randomBlue = random(0, 255);
    fill(randomRed, randomGreen, randomBlue, 100);
    // fill(100, 200, 75, 50);
    noStroke();
    ellipse(circles[i].x, circles[i].y, ((circles[i].radius) * 2), ((circles[i].radius) * 2));
  }
}

function draw() {
}