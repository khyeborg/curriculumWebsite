// subject variables
let subjectsArray = [];
let subjectIDCounter = 0;
let subjectSize = 25;
let subjectSpeedLower = 0.5;
let subjectSpeedUpper = 2.5;

// function windowResized() {
//    resizeCanvas(computerScienceContentArray[2].offsetWidth - 200, windowHeight - 200);
// }

function setup() {
   createCanvas(1000, 500);
   noStroke();
   noiseDetail(24);

   for (let i = 0; i < 500; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, random(width), random(height), subjectSize, random(1000000), random(1000000)));
      subjectIDCounter++;
   }
}
 
function draw() {
   background(0);

   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].display();
      subjectsArray[i].move();
   }
}
 
class Subject {
   constructor(id, xPos, yPos, size, xnoise, ynoise) {
      this.id = id;
      this.xPos = xPos;
      this.yPos = yPos;
      this.size = size;
      this.xnoise = xnoise;
      this.ynoise = ynoise;
      this.speed = random(subjectSpeedLower, subjectSpeedUpper);
   }

   display() {
      ellipse(this.xPos, this.yPos, this.size, this.size);
   }

   move() {
      let xvalue = noise(this.xnoise);
      let xmove = map(xvalue, 0, 1, -this.speed, this.speed);
      this.xPos += xmove;
      this.xnoise += 0.01

      let yvalue = noise(this.ynoise);
      let ymove = map(yvalue, 0, 1, -this.speed, this.speed);
      this.yPos += ymove;
      this.ynoise += 0.01

      // contain the subjects
      if (this.xPos > width + this.size * 2) {
         this.xPos = width + this.size * 2;
      }

      if (this.xPos < -this.size * 2) {
         this.xPos = -this.size * 2;
      }

      if (this.yPos > height + this.size * 2) {
         this.yPos = height + this.size * 2;
      }

      if (this.yPos < -this.size * 2) {
         this.yPos = -this.size * 2;
      }
   }
}