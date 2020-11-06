// subject variables
let subjectsArray = [];
let subjectIDCounter = 0;
let subjectSize = 25;
let subjectSpeedLower = 0.5;
let subjectSpeedUpper = 2.5;

// subject stats variables
let numberOfUninfectedSubjects = 500;
let numberOfInfectedSubjects = 5;
let numberOfRecoveredSubjects = 0;
let numberOfDeadSubjects = 0;

// virus variables
let masterInfectionRate = 50;
let infectionDistance = subjectSize;
let infectedToRecoveredDurationLower = 750;
let infectedToRecoveredDurationUpper = 1250;
let mortalityRate = 20;

// mask variables
let maskRate = 50;
let maskDecreaseFactor = 0.5;

// images variables
let maskImage;

function preload() {
   maskImage = loadImage("images/mask.png");
}

function setup() {
   let canvas = createCanvas(1000, 500);
   canvas.parent('sketch_holder');
   noStroke();
   noiseDetail(24);
   imageMode(CENTER);

   for (let i = 0; i < numberOfUninfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "uninfected", random(width), random(height), subjectSize, random(1000000), random(1000000), random(100)));
      subjectIDCounter++;
   }

   for (let i = 0; i < numberOfInfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "infected", random(width), random(height), subjectSize, random(1000000), random(1000000), random(100)));
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
         subjectsArray[i].infectedToRecoveredOrDeath();
      }
   }

   computeStats();
}
 
class Subject {
   constructor(id, state, xPos, yPos, size, xnoise, ynoise, maskRateNum) {
      this.id = id;
      this.state = state;
      this.xPos = xPos;
      this.yPos = yPos;
      this.size = size;
      this.xnoise = xnoise;
      this.ynoise = ynoise;
      this.infectedCounter = 0;
      this.triedInfectedArray = [];
      this.infectedToRecoveredDuration = random(infectedToRecoveredDurationLower, infectedToRecoveredDurationUpper);
      this.speed = random(subjectSpeedLower, subjectSpeedUpper);

      if (this.state == "infected") {
         this.abilityToRecover = this.recoveryOrDeath();
      }

      // does the subject wear a mask?
      if (maskRateNum < maskRate) {
         this.masked = true;
         this.infectionRate = masterInfectionRate * maskDecreaseFactor;
      }

      else {
         this.masked = false;
         this.infectionRate = masterInfectionRate;
      }
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
      if (this.state != "dead") {
         ellipse(this.xPos, this.yPos, this.size, this.size);

         if (this.masked == true) {
            this.drawMask();
         }
      }
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

   infectOthers() {
      for (let i = 0; i < subjectsArray.length; i++) { 
         // if it's not the subject itself and the subject is state is not already infected or recovered or dead
         if (this.id != i && subjectsArray[i].state != "infected" && subjectsArray[i].state != "recovered" && subjectsArray[i].state != "dead") {
            // if another subject touches the infected subject and no infect attempt was made 
            if (dist(this.xPos, this.yPos, subjectsArray[i].xPos, subjectsArray[i].yPos) <= infectionDistance && this.triedInfectedArray[i] == "no") {
               this.triedInfectedArray[i] = "yes";

               // determine if the subject can infect others
               let num1 = random(100);
               if (num1 < this.infectionRate) {
                  // decide if the subject can be infected
                  let num2 = random(100);
                  if (num2 < subjectsArray[i].infectionRate) {
                     subjectsArray[i].state = "infected";
                     subjectsArray[i].abilityToRecover = subjectsArray[i].recoveryOrDeath();
                  }
               }
            }
         }
      }
   }

   infectedToRecoveredOrDeath() {
      this.infectedCounter++;

      if (this.abilityToRecover == "yes") {
         if (this.infectedCounter >= this.infectedToRecoveredDuration) {
            this.state = "recovered";
         }
      }

      else if (this.abilityToRecover == "no") {
         if (this.infectedCounter >= this.infectedToRecoveredDuration) {
            this.state = "dead";
            numberOfDeadSubjects++;
         }
      }
   }

   recoveryOrDeath() {
      let num = random(100);

      if (num < mortalityRate) {
         this.abilityToRecover = "no";
      }

      else {
         this.abilityToRecover = "yes";
      }

      return this.abilityToRecover;
   }

   drawMask() {
      image(maskImage, this.xPos, this.yPos + 5.5);
   }
}

function computeStats() {
   numberOfUninfectedSubjects = 0;
   numberOfInfectedSubjects = 0;
   numberOfRecoveredSubjects = 0;

   for (let i = 0; i < subjectsArray.length; i++) {
      if (subjectsArray[i].state == "uninfected") {
         numberOfUninfectedSubjects++;
      }

      else if (subjectsArray[i].state == "infected") {
         numberOfInfectedSubjects++;
      }

      else if (subjectsArray[i].state == "recovered") {
         numberOfRecoveredSubjects++;
      }
   }

   document.getElementById("number_of_uninfected").innerHTML = numberOfUninfectedSubjects;
   document.getElementById("number_of_infected").innerHTML = numberOfInfectedSubjects;
   document.getElementById("number_of_recovered").innerHTML = numberOfRecoveredSubjects;
   document.getElementById("number_of_dead").innerHTML = numberOfDeadSubjects;
}

let updatedNumberOfUninfectedSubjects = numberOfUninfectedSubjects;
let updatedNumberOfInfectedSubjects = numberOfInfectedSubjects;

function runSimulation() {
	updatedNumberOfUninfectedSubjects = int(document.getElementById("initialUninfected").value);
   numberOfUnInfectedSubjects = updatedNumberOfUninfectedSubjects;

   updatedNumberOfInfectedSubjects = int(document.getElementById("initialInfected").value);
   numberOfInfectedSubjects = updatedNumberOfInfectedSubjects;

   infectionRate = int(document.getElementById("rateOfInfection").value);
   mortalityRate = int(document.getElementById("mortalityRate").value);
   maskRate = int(document.getElementById("maskRate").value);
   maskDecreaseFactor = int(document.getElementById("maskDecreaseFactor").value);

   resetSketch();
}

function resetSketch() {
   subjectsArray = [];

   for (let i = 0; i < updatedNumberOfUninfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "uninfected", random(width), random(height), subjectSize, random(1000000), random(1000000), random(100)));
      subjectIDCounter++;
   }

   for (let i = 0; i < updatedNumberOfInfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "infected", random(width), random(height), subjectSize, random(1000000), random(1000000), random(100)));
      subjectIDCounter++;
   }

   // create triedInfectedArray for each subject
   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].createTriedInfectedArray();
   }

   numberOfRecoveredSubjects = 0;
   numberOfDeadSubjects = 0;
}