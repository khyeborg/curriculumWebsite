// subject variables
let subjectsArray = [];
let subjectIDCounter = 0;
let subjectSize = 25;
let subjectSpeedLower = 0.5;
let subjectSpeedUpper = 2.5;

// subject stats variables
let numberOfUninfectedSubjects = 500;
let numberOfInfectedSubjects = 2;

// virus variables
let infectionRate = 10;
let infectionDistance = subjectSize;

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

   // create triedInfectedArray for each subject
   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].createTriedInfectedArray();
   }
}
 
function draw() {
   background(0);

   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].stateColor();
      subjectsArray[i].display();
      subjectsArray[i].move();

      if (subjectsArray[i].state == "infected") {
         subjectsArray[i].infectOthers();
      }
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
      this.triedInfectedArray = [];
      this.speed = random(subjectSpeedLower, subjectSpeedUpper);
   }

   createTriedInfectedArray() {
      for (let i = 0; i < subjectsArray.length; i++) {
         if (this.id != i) {
            this.triedInfectedArray.push("no");
         }

         else {
            this.triedInfectedArray.push("me");
         }
      }
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
      if (this.xPos > windowWidth + this.size * 2) {
         this.xPos = windowWidth + this.size * 2;
      }

      if (this.xPos < -this.size * 2) {
         this.xPos = -this.size * 2;
      }

      if (this.yPos > windowHeight + this.size * 2) {
         this.yPos = windowHeight + this.size * 2;
      }

      if (this.yPos < -this.size * 2) {
         this.yPos = -this.size * 2;
      }
   }

   infectOthers() {
      for (let i = 0; i < subjectsArray.length; i++) { 
         // if it's not the subject itself and the subject is state is not already infected or recovered or dead
         if (this.id != i && subjectsArray[i].state != "infected" && subjectsArray[i].state != "recovered" && subjectsArray[i].state != "dead") {
            // if another subject touches the infected subject and no infect attempt was made 
            if (dist(this.xPos, this.yPos, subjectsArray[i].xPos, subjectsArray[i].yPos) <= infectionDistance && this.triedInfectedArray[i] == "no") {
               this.triedInfectedArray[i] = "yes";
               let num = random(100);

               if (num < infectionRate) {
                  subjectsArray[i].state = "infected";
               }
            }
         }
      }
   }
}