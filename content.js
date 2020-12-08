// contentArray
let contentObject = [
	{
		"title": "overview",
		"introduction": "Welcome to the Computer Science section of the “Understanding the Pandemic” curriculum! In the Computer Science section, students will engage in hands-on coding projects using the p5 Coding Library to build simulations to visualize the spread of COVID-19. The Computer Science section of the curriculum aims to instill awareness about the mechanics of the spread of COVID-19 using culturally sustaining pedagogy and authentic assessments. Through the simulations and coding projects, students will better understand the underlying mechanics of COVID-19 from an analytical perspective to better protect themselves, each other, and their families.",
		"culturallySustainingPedagogy": "In the Day 7: Virus Variables Input section, students will make use of the COVID Alert NY app and other reliable COVID-19 data sources to gain accurate data to run disease spread simulations that reflect the difference in spread in neighborhoods of different demographics, especially contrasting the difference in spread, recovery, and mortality rates between predominantly white neighborhoods and minority neighborhoods. Students are asked to collect data of the demographics distribution in different cities, select a predominantly white neighborhood and a minority neighborhood, and collect COVID-19 data in the cities selected. Students will use the data collected to run two simulations and record their observations to be used in further discussions centered on reasons for the difference in spread and mortality.",
		"authenticAssessment": "In the assessment section, students will use the existing code as the foundation and implement additional features to enhance the COVID-19 simulation to better reflect the real time spread of COVID-19. Students are introduced to the assessment and guided to formulate additional features to be added to the existing simulation to better reflect the real time spread of COVID-19. Students are encouraged to tackle the assessment from any aspects of the virus, based on their field of interests. Two sample projects with downloadable source code can be found to introduce students to some possible ways of enhancing the simulation."

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
	}, 

	{
		"title": "Virus Variable Controls",
		"studentLearningObjective": 'SWBAT make use of the COVID Alert NY app and other reliable COVID-19 data sources to gain accurate data to run disease spread simulations that reflect the difference in spread in neighborhoods of different demographics, especially contrasting the difference in spread, recovery, and mortality rates between predominantly white neighborhoods and minority neighborhoods.',
		"lessonAndOutcome": "Students will perform research via the COVID Alert NY app and other reliable COVID-19 data sources to collect numbers that they can input to run the disease spread simulation. Students are asked to collect data of the demographics distribution in different cities, select a predominantly white neighborhood and a minority neighborhood, and collect COVID-19 data in the cities selected. Students will use the data collected to run two simulations and record their observations to be used in further discussions.",
		"conceptualExtension": ["Collect data via the COVID Alert NY app and other reliable COVID-19 data sources",
								"Collect data of the demographics distribution in different cities",
								"Compare and contrast disease spread pattern in predominantly white neighborhoods and minority neighborhoods",
								"Discuss difference in disease spread pattern in in predominantly white neighborhoods and minority neighborhoods"
								],
		"dataSources": ["COVID Alert NY",
						"New York State Department of Health",
						"CDC COVID Data Tracker"
						],
		"dataSourcesLink": ["https://coronavirus.health.ny.gov/covid-alert-ny",
							"https://www.health.ny.gov/",
							"https://covid.cdc.gov/covid-data-tracker/#cases_casesper100klast7days"
							]
	},

	{
		"title": "Assessment",
		"studentLearningObjective": 'SWBAT use the existing code as the foundation and implement additional features to enhance the COVID-19 simulation to better reflect the real time spread of COVID-19.',
		"lessonAndOutcome": "Students are introduced to the assessment and guided to formulate additional features to be added to the existing simulation to better reflect the real time spread of COVID-19. Students are encouraged to tackle the assessment from any aspects of the virus, based on their field of interests. Two sample projects with downloadable source code can be found to introduce students to some possible ways of enhancing the simulation.",
		"conceptualExtension": ["Expanding the COVID-19 simulation",
								"Reading source code",
								"Implementing source code to expand existing programs"
								]
	},

	{
		"title": "Sample Project #1",
		"description": "This program implements mask-wearing to track the difference in spread of COVID-19. Mask Rate and Mask Decrease Factor are added as additional variables to control the simulation."
	},

	{
		"title": "Sample Project #2",
		"description": "This program implements social distancing to track the difference in spread of COVID-19. Particles that practice social distancing are surrounding by a red coating."
	},

	{
		"title": "Learning Experiences Bank",
		"experiencesArray": [
								["Interdisciplinary Learning", "The Math component within the curriculum goes hand-in-hand with the Computer Science component. Students are encouraged to layer the mathematics learned (e.g. exponential functions) to make sense of the COVID-19 simulations. The code used to build the COVID-19 simulation is also bounded with the mathematics learned. Interdisciplinary learning becomes a focus within the curriculum because the curriculum is built with the goal of providing the learner with a holistic understanding of the pandemic under the lens Math and Computer Science.", "images/inter.jpg", "500px"],
								["Breaking Down Large Tasks", "Tackling complex Computer Science projects such as the COVID-19 simulation can be intimidating for many students. In order to help students better navigate the learning process, students are instructed to break down the complex program into smaller, more manageable pieces of code. For example, if students were to enhance their simulation by adding a mask component, they are encouraged to break down the feature into multiple aspects such as the visual component, the variables-setting component, the variables-tracking component, the infection component, the data component, etc. of the mask program.", "images/break.png", "400px"],
								["Create A Project Timeline", "On top of breaking down large tasks, students are also instructed to create a project timeline as a part of their assessment proposal. Given the time assigned for the assessment, students need to formulate a feature enhancement that is achievable within the allotted time frame. Constructing a project timeline allows students to consider the complexity of the feature to implement with respect to the time needed to complete an assessment of a particular complexity. Students are also able to self-assess their completion and adjust the timeline or project complexity accordingly to account for the lack of or the surplus of time to complete their projects.", "images/timeline.png", "500px"],
								["Collaborative Learning in Small Groups", "When learning code or tackling assessments, students are broken down into small groups to promote collaborative learning through small group discussions. Instead of only asking teachers for help, students are instructed to approach their peers first with any code-related questions. That way, students get to help each other while learning to work collaboratively through the process. Even though students are instructed to submit individual assessments of enhanced simulations, students are encouraged to collaborate with each other to generate ideas and code to implement additional features to enhance the COVID-19 simulation.", "images/small.png", "500px"],
								["Authentic Assessments", "Students use existing code as foundation and implement additional features to enhance the COVID-19 simulation to better reflect the real time spread of COVID-19. Students are introduced to the assessment and guided to formulate additional features to be added to the existing simulation to better reflect the real time spread of COVID-19. Students are encouraged to tackle the assessment from any aspects of the virus, based on their field of interests. Two sample projects with downloadable source code can be found to introduce students to some possible ways of enhancing the simulation.", "images/authentic.png", "700px"]
							]
	}, 

	{
		"title": "Lesson Plan",
		"lesson": 	[
						"https://docs.google.com/document/d/1ONIqDeynQtM92QgQwx35Bmg7NJZrZIydexB_bR755AU/edit?usp=sharing",
						"https://docs.google.com/document/d/1kzIeD98iC9bcd9n7_omgDYJAbskt3B-asymEctLaF94/edit?usp=sharing",
						"https://docs.google.com/document/d/1kzIeD98iC9bcd9n7_omgDYJAbskt3B-asymEctLaF94/edit?usp=sharing"
					]
	}
];









