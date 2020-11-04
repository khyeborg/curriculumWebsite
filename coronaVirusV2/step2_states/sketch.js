// subject variables
let subjectsArray = [];
let subjectIDCounter = 0;
let subjectSize = 25;
let subjectSpeedLower = 0.5;
let subjectSpeedUpper = 2.5;

// subject stats variables
let numberOfUninfectedSubjects = 500;
let numberOfInfectedSubjects = 2;

function setup() {
   createCanvas(1000, 500);
   noStroke();
   noiseDetail(24);

   for (let i = 0; i < numberOfUninfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "uninfected", random(width), random(height), subjectSize, random(1000000), random(1000000)));
      subjectIDCounter++;
   }

   for (let i = 0; i < numberOfInfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "infected", random(width), random(height), subjectSize, random(1000000), random(1000000)));
      subjectIDCounter++;
   }
}
 
function draw() {
   background(0);

   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].stateColor();
      subjectsArray[i].display();
      subjectsArray[i].move();
   }
}
 
class Subject {
   constructor(id, state, xPos, yPos, size, xnoise, ynoise) {
      this.id = id;
      this.state = state;
      this.xPos = xPos;
      this.yPos = yPos;
      this.size = size;
      this.xnoise = xnoise;
      this.ynoise = ynoise;
      this.speed = random(subjectSpeedLower, subjectSpeedUpper);
   }

   stateColor() {
      if (this.state == "uninfected") {
         this.r = 0;
         this.g = 255;
         this.b = 0;
      }

      else if (this.state == "infected") {
         this.r = 255;
         this.g = 163;
         this.b = 0;
      }

      else if (this.state == "recovered") {
         this.r = 0;
         this.g = 0;
         this.b = 255;
      }

      fill(this.r, this.g, this.b);
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
