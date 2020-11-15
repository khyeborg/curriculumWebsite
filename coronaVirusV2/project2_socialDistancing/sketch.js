// subject variables
let subjectsArray = [];
let subjectIDCounter = 0;
let subjectSize = 25;
let subjectSpeedLower = 0.5;
let subjectSpeedUpper = 2.5;

// subject stats variables
let numberOfUninfectedSubjects = 120;
let numberOfInfectedSubjects = 20;
let numberOfRecoveredSubjects = 0;
let numberOfDeadSubjects = 0;

// virus variables
let infectionRate = 10;
let infectionDistance = subjectSize;
let infectedToRecoveredDurationLower = 750;
let infectedToRecoveredDurationUpper = 1250;
let mortalityRate = 20;

// social distancing variables
let forceFieldSize = subjectSize + 15;
let initialXPosArray = [];
let initialYPosArray = [];
let socialDistancingRate = 20;
let socialDistanceBooleanArray = [];
let socialDistanceSubjectArray = [];
let noSocialDistanceSubjectArray = [];
let numberOfSocialDistanceSubjects = 0;
let numberOfNoSocialDistanceSubjects = 0;

// shuffle array variables
let shuffleArray = [];
let shuffledSocialDistanceBooleanArray = [];
let shuffledInitialXPosArray = [];
let shuffledInitialYPosArray = [];

function setup() {
   createCanvas(1000, 500);
   noStroke();
   noiseDetail(24);

   // construct socialDistanceBooleanArray
   for (let i = 0; i < numberOfUninfectedSubjects + numberOfInfectedSubjects; i++) {
      if (random(100) < socialDistancingRate) {
         socialDistanceBooleanArray.push(true);
      }

      else {
         socialDistanceBooleanArray.unshift(false);
         initialXPosArray.push(random(width));
         initialYPosArray.push(random(height));
      }
   }

   while (initialXPosArray.length < socialDistanceBooleanArray.length) {
      let tempMyXPos = random(width);
      let tempMyYPos = random(height);

      initialXPosArray.push(tempMyXPos);
      initialYPosArray.push(tempMyYPos);

      for (let i = 0; i < initialXPosArray.length - 1; i++) {
         if (dist(initialXPosArray[i], initialYPosArray[i], tempMyXPos, tempMyYPos) < forceFieldSize) {
            initialXPosArray.pop();
            initialYPosArray.pop();
            break;
         }
      }
   }

   // shuffle socialDistanceBooleanArray, initialXPosArray, initialXPosArray
   shuffleArrays();
   
   for (let i = 0; i < numberOfUninfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "uninfected", shuffledInitialXPosArray[subjectIDCounter], shuffledInitialYPosArray[subjectIDCounter], subjectSize, random(1000000), random(1000000), shuffledSocialDistanceBooleanArray[subjectIDCounter]));
      subjectIDCounter++;
   }

   for (let i = 0; i < numberOfInfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "infected", shuffledInitialXPosArray[subjectIDCounter], shuffledInitialYPosArray[subjectIDCounter], subjectSize, random(1000000), random(1000000), false));
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
   constructor(id, state, xPos, yPos, size, xnoise, ynoise, socialDistanceBoolean) {
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
      
      if (socialDistanceBoolean == true) {
         this.socialDistance = true;
      }

      else {
         this.socialDistance = false;
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
   }

   display() {
      if (this.state != "dead") {
         // draw a force field if I'm supposed to social distance
         if (this.socialDistance == true) {
            fill(255, 0, 0, 80);
            ellipse(this.xPos, this.yPos, forceFieldSize, forceFieldSize);
         }

         fill(this.r, this.g, this.b);
         ellipse(this.xPos, this.yPos, this.size, this.size);
         // fill(0);
         // text(this.id, this.xPos - 5, this.yPos + 5);
      }
   }

   move() {
      let xvalue = noise(this.xnoise);
      let xmove = map(xvalue, 0, 1, -this.speed, this.speed);
      this.xnoise += 0.01

      let yvalue = noise(this.ynoise);
      let ymove = map(yvalue, 0, 1, -this.speed, this.speed);
      this.ynoise += 0.01

      // move
      // if I'm supposed to socially distance myself 
      if (this.socialDistance == true) {
         for (let i = 0; i < subjectsArray.length; i++) {
            let tempXPos = this.xPos + xmove;
            let tempYPos = this.yPos + ymove;
            // if it's not myself
            if (i != subjectsArray.indexOf(this)) {
               if (dist(tempXPos, tempYPos, subjectsArray[i].xPos, subjectsArray[i].yPos) < forceFieldSize) {
                  break;
               }
            }

            if (i == subjectsArray.length - 1) {
               this.xPos += xmove;
               this.yPos += ymove;
            }
         }
      }

      else {
         for (let i = 0; i < subjectsArray.length; i++) {
            let tempXPos = this.xPos + xmove;
            let tempYPos = this.yPos + ymove;

            if (subjectsArray[i].socialDistance == true) {
               if (dist(tempXPos, tempYPos, subjectsArray[i].xPos, subjectsArray[i].yPos) < subjectSize + 7.5) {
                  break;
               }
            }

            if (i == subjectsArray.length - 1) {
               this.xPos += xmove;
               this.yPos += ymove;
            }
         }
      }

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
               let num = random(100);

               if (num < infectionRate) {
                  subjectsArray[i].state = "infected";
                  subjectsArray[i].abilityToRecover = subjectsArray[i].recoveryOrDeath();
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

function updateInitialUninfected() {
   updatedNumberOfUninfectedSubjects = int(document.getElementById("initialUninfected").value);
   resetSketch();
}

function updateInitialInfected() {
   updatedNumberOfInfectedSubjects = int(document.getElementById("initialInfected").value);
   resetSketch();
}

function updateRateOfInfection() {
   infectionRate = int(document.getElementById("rateOfInfection").value);
   resetSketch();
}

function updateMortalityRate() {
   mortalityRate = int(document.getElementById("mortalityRate").value);
   resetSketch();
}

function resetSketch() {
   subjectsArray = [];
   initialXPosArray = [];
   initialYPosArray = [];
   socialDistanceBooleanArray = [];
   shuffleArray = [];
   shuffledSocialDistanceBooleanArray = [];
   shuffledInitialXPosArray = [];
   shuffledInitialYPosArray = [];
   subjectIDCounter = 0;

   // construct socialDistanceBooleanArray
   for (let i = 0; i < updatedNumberOfUninfectedSubjects + updatedNumberOfInfectedSubjects; i++) {
      if (random(100) < socialDistancingRate) {
         socialDistanceBooleanArray.push(true);
      }

      else {
         socialDistanceBooleanArray.unshift(false);
         initialXPosArray.push(random(width));
         initialYPosArray.push(random(height));
      }
   }

   while (initialXPosArray.length < socialDistanceBooleanArray.length) {
      let tempMyXPos = random(width);
      let tempMyYPos = random(height);

      initialXPosArray.push(tempMyXPos);
      initialYPosArray.push(tempMyYPos);

      for (let i = 0; i < initialXPosArray.length - 1; i++) {
         if (dist(initialXPosArray[i], initialYPosArray[i], tempMyXPos, tempMyYPos) < forceFieldSize) {
            initialXPosArray.pop();
            initialYPosArray.pop();
            break;
         }
      }
   }

   // shuffle socialDistanceBooleanArray, initialXPosArray, initialXPosArray
   shuffleArrays();
   
   for (let i = 0; i < updatedNumberOfUninfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "uninfected", shuffledInitialXPosArray[subjectIDCounter], shuffledInitialYPosArray[subjectIDCounter], subjectSize, random(1000000), random(1000000), shuffledSocialDistanceBooleanArray[subjectIDCounter]));
      subjectIDCounter++;
   }

   for (let i = 0; i < updatedNumberOfInfectedSubjects; i++) {
      subjectsArray.push(new Subject(subjectIDCounter, "infected", shuffledInitialXPosArray[subjectIDCounter], shuffledInitialYPosArray[subjectIDCounter], subjectSize, random(1000000), random(1000000), false));
      subjectIDCounter++;
   }

   // create triedInfectedArray for each subject
   for (let i = 0; i < subjectsArray.length; i++) {
      subjectsArray[i].createTriedInfectedArray();
   }
}

function shuffleArrays() {
   for (let i = 0; i < socialDistanceBooleanArray.length; i++) {
      shuffleArray.push(i);
   }

   for (let i = 0; i < socialDistanceBooleanArray.length; i++) {
      let item = shuffleArray[Math.floor(Math.random() * shuffleArray.length)];

      shuffledSocialDistanceBooleanArray.push(socialDistanceBooleanArray[item]);
      shuffledInitialXPosArray.push(initialXPosArray[item]);
      shuffledInitialYPosArray.push(initialYPosArray[item]);

      // remove item from shuffleArray
      shuffleArray.splice(shuffleArray.indexOf(item), 1);
   }
}