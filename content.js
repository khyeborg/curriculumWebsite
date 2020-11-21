// contentArray
let contentObject = [
	{
		"title": "overview"
	}, 

	{
		"title": "Setup",
		"studentLearningObjective": "SWBAT use the p5 coding library to set up an empty black canvas of fixed width and height and understand the interaction between the index.html and sketch.js files.",
		"lessonAndOutcome": "Students are introduced to the p5 coding library that is written in JavaScript and taught about the implementation of coding libraries in coding projects. By the end of the lesson students should be able to code using the p5 coding library and the p5 Documentation as reference. ",
		"conceptualExtension": ["setup function",
								"draw function",
								"createCanvas function",
								"background function",
								"RGB values"
								]
	},

	{
		"title": "OOP w/ Perlin Noise",
		"studentLearningObjective": 'SWBAT build a particle system of particle behaviours that are independent of one another using the Principle of Object-Oriented Programming and implement the Perlin Noise algorithm to program the movement of the particles in the particle system.',
		"lessonAndOutcome": "Students are introduced to the Principle of Object-Oriented Programming and to the practices used to build a particle system. Students will use the constructor method and the new keyword to instantiate objects. Students will also use write additional methods to program the movement of the particles. Students will learn about the basic principles of the Perlin Noise algorithm and how it can be applied to produce natural movement of the particles.",
		"conceptualExtension": ["Principles of Object-Oriented Programming",
								"constructor method",
								"The new keyword",
								"Object instantiation",
								"Methods in a class",
								"Perlin Noise algorithm"
								]
	},

	{
		"title": "States",
		"studentLearningObjective": 'SWBAT implement a ‘states’ property for each particle in the particle system - “uninfected”, “infected”, “recovered” and visually represent the state of each particle with a different color.',
		"lessonAndOutcome": "Student are introduced to practices of property addition during the object instantiation process. Students are guided to write a stateColor function that would provide each particle with a visual representation of its state.",
		"conceptualExtension": ["Property addition",
								"Writing methods",
								"The this keyword",
								"Calling an object’s method"
								]
	},

	{
		"title": "Infection",
		"studentLearningObjective": 'SWBAT start building an infection system in which “infected” particles (visually represented in orange) can infect particles surrounding them who are “uninfected” (visually represented in green).',
		"lessonAndOutcome": "Students will write an infectOthers method that uses a combination of a for loop, conditional statements, random algorithm, and triedInfectedArray to create a visual representation of the disease spread. Students will walk through the conditional logic for infected particles to infect other particles in their vicinity and ways to implement the infection algorithm to enhance the particle system’s representation of the disease spread.",
		"conceptualExtension": ["infectOthers method",
								"Construction of the triedInfectedArray",
								"Combination of for loop, conditional statements, random algorithm, and triedInfectedArray",
								"Visual representation of disease spread"
								]
	},

	{
		"title": "Recovery or Death",
		"studentLearningObjective": 'SWBAT implement the recovery (visually represented in blue) of death (visually represented with the disappearance of particle) features in the particle system to enhance the representation of the disease spread.',
		"lessonAndOutcome": "Students will further plot the journey of an infected particle to determine if the particle would end up in recovery of death. Students will walk through variable assignments and the random algorithm to determine the ultimate fate of infected particles using the recoveryOrDeath function. Students will also update the stateColor function to include representation of “recovered” and “dead” particles within the particle system.",
		"conceptualExtension": ["Plot the life cycle of an infected particle",
								"Variable assignments",
								"recoveryOrDeath function",
								"Update the stateColor function"
								]
	},

	{
		"title": "Display Data",
		"studentLearningObjective": 'SWBAT implement a real time data-tracking algorithm in HTML to track the number of uninfected subjects, number of infected subjects, number of recovered subjects, and number of dead subjects within the particle system.',
		"lessonAndOutcome": "Students will write a computeStats function to calculate the number of uninfected subjects, number of infected subjects, number of recovered subjects, and number of dead subjects within the particle system at each draw loop iteration. Students will then modify the existing HTML to output the real time data collected by updating the HTML elements using getElementById and innerHTML.",
		"conceptualExtension": ["computeStats function",
								"Real time data tracking",
								"getElementById",
								"innerHTML",
								"Update HTML elements based on data in p5"
								]
	},

	{
		"title": "Virus Variable Controls",
		"studentLearningObjective": 'SWBAT build HTML elements for users to input data and variables related to the disease such as number of initial uninfected particles, number of initial infected particles, rate of infection, and rate of mortality rate to allow users to control and more accurately visualize the spread of the disease.',
		"lessonAndOutcome": "Students will write two functions - runSimulation and resetSketch to capture users’ input of data from the HTML elements regarding the number of initial uninfected particles, number of initial infected particles, rate of infection, and rate of mortality rate. Students will walk through the usage of data captured in HTML and the implementation of the data in p5 to produce a user-controlled environment within the particle system. The visualization of the disease spread will differ based on the data input by the users.",
		"conceptualExtension": ["runSimulation function",
								"resetSketch function",
								"User data input in HTML",
								"Implementation of user data input in p5",
								"Implementation of a user-controlled environment in a p5 particle system"
								]
	}
];









