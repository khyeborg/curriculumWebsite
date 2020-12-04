// program variables
let activeColor = "#2b678a";
let hoverColor = "#2b678a";
let tabsBackgroundColorArray = ["#153243", "#153243", "#153243", "#153243"];
let homeMenu = ["CURRICULUM OVERVIEW", "RATIONALE", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PHILOSOPHY", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOCIAL RELEVANCE", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GOALS", "CITATIONS"];
// let socioemotionalMenu = ["Socioemotional Menu 1", "Socioemotional Menu 2", "Socioemotional Menu 3"];
let mathMenu = ["Overview", "Day 1: Introduction to Exponential Functions (b value)", "Day 2: Introduction to Exponential Functions (a and b values)", "Day 3: Appreciation and Depreciation using Equations", "Day 4: Appreciation and Depreciation using Graphs/Visuals", "Day 5: Gathering Information for Community Analysis", "Day 6: Gathering Information for Community Analysis 2", "Day 7: Drawing Conclusions Between Different Counties", "Day 8: How does COVID 19 being close to home make you feel?", "Assessment", "Learning Experiences Bank", "Lesson Plan"];
let computerScienceMenu = ["Overview", "Day 1: Setup", "Day 2: OOP w/ Perlin Noise", "Day 3: States", "Day 4: Infection", "Day 5: Recovery or Death", "Day 6: Display Data", "Day 7: Virus Variable Controls", "Day 8: Virus Variables Input", "Assessment: Simulation Enhancement", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample Project #1", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample Project #2", "Learning Experiences Bank", "Lesson Plan", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lesson Plan #1", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lesson Plan #2", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lesson Plan #3"];
let computerScienceTitle = ["Overview", "Setup", "OOP w/ Perlin Noise", "States", "Infection", "Recovery or Death", "Display Data", "Virus Variable Controls", "Virus Variables Input", "Assessment: Simulation Enhancement", "Wearing Masks", "Social Distancing", "Learning Experiences Bank", "Lesson Plan", "Lesson Plan #1", "Lesson Plan #2", "Lesson Plan #3"];
let menuBigArray = [homeMenu, mathMenu, computerScienceMenu];
let defaultHTMLArray = ["h1", "m1", "Hello!"];
let needSourceCode = [1, 2, 3, 4, 5, 6, 7, 10, 11];
let zipArray = ["setup", "oop", "states", "infection", "recovery", "computeStats", "variableControls", "wearingMasks", "socialDistancing"];

// get references 
let body = document.querySelector("body");
let tabsArray = document.getElementsByClassName("tab");
let pageArray = document.getElementsByClassName("page");
let menuBigDivArray = document.getElementsByClassName("menu_big_div");
let homeContentArray = document.getElementsByClassName("home_content_page");
// let socioemotionalContentArray = document.getElementsByClassName("socioemotional_content_page");
let mathContentArray = document.getElementsByClassName("math_content_page");
let computerScienceContentArray = document.getElementsByClassName("computer_science_content_page");
let contentBigArray = [homeContentArray, mathContentArray, computerScienceContentArray];
let tempDivArray = [];

let computerScienceContent = document.getElementById("computer_science_overview");

// populate tempDivArray
for (let i = 0; i < contentBigArray.length; i++) {
	tempDivArray.push([]);
}

// add event listeners to tabs
for (let i = 0; i < tabsArray.length; i++) {
  // add background color
  tabsArray[i].style.backgroundColor = tabsBackgroundColorArray[i];

  if (tabsArray[i].classList.contains("active")) {
    tabsArray[i].style.backgroundColor = activeColor;
  }

  tabsArray[i].onclick = function() {
    for (let j = 0; j < pageArray.length; j++) {
		if (i == j) {
			pageArray[j].style.display = "flex";
			tabsArray[j].classList.add("active");
		}

		else {
			pageArray[j].style.display = "none";
			tabsArray[j].classList.remove("active");
		}

		if (tabsArray[j].classList.contains("active")) {
			tabsArray[j].style.backgroundColor = activeColor;
		}

		else {
			tabsArray[j].style.backgroundColor = tabsBackgroundColorArray[j];
		}
	}

    restoreDefault();
  }

  tabsArray[i].onmouseover = function() {
    tabsArray[i].style.backgroundColor = hoverColor;
  }

  tabsArray[i].onmouseout = function() {
    if (tabsArray[i].classList.contains("active")) {
      tabsArray[i].style.backgroundColor = activeColor;
    }

    else {
      tabsArray[i].style.backgroundColor = tabsBackgroundColorArray[i];
    }
  }
}

// add menu to each page
for (let i = 0; i < menuBigArray.length; i++) {
	for (let j = 0; j < menuBigArray[i].length; j++) {
		// create menu
		let tempDiv = document.createElement("div");
		tempDiv.classList.add("menu");
		// tempDiv.innerHTML = menuBigArray[i][j];
		tempDiv.innerHTML = "<a class='special_a' href='#'>" + menuBigArray[i][j] + "</a>";


		// submenus for home
		if (i == 0) {
			if (j == 0) {
				tempDiv.classList.add("home_menu");
			}

			if (j == 1) {
				tempDiv.classList.add("lastmenu");
			}
			
			if (j == 2 || j == 3 || j == 4) {
				tempDiv.classList.add("submenu");

				if (j == 4) {
					tempDiv.style.paddingBottom = "40px";
				}
			}
		}

		if (i == menuBigArray.length - 1) {
			if (j == 9 || j == 13) {
				tempDiv.classList.add("lastmenu");
			}

			if (j == 10 || j == 11 || j >= 14) {
				tempDiv.classList.add("submenu");
			}

			if (j == 11) {
				tempDiv.style.paddingBottom = "20px";
			}
		}

		if (j == 0) {
			tempDiv.style.paddingTop = "35px";
			tempDiv.style.color = "white";
		}

		tempDivArray[i].push(tempDiv);
		menuBigDivArray[i].appendChild(tempDiv);
	}
}

// add interactivity to all tempDiv in tempDivArray (except computer science)
for (let i = 0; i < tempDivArray.length - 1; i++) {
	for (let j = 0; j < tempDivArray[i].length; j++) {
		// make sure the first menu is active
		if (j == 0) {
			tempDivArray[i][j].children[0].classList.add("active");
			tempDivArray[i][j].children[0].style.color = "white";
		}

		if (!(i == 0 && j == 1)) {
			tempDivArray[i][j].onclick = function() {
				for (let k = 0; k < tempDivArray[i].length; k++) {
					if (k == j) {
						contentBigArray[i][k].style.display = "block";
						tempDivArray[i][k].children[0].style.color = "white";
						tempDivArray[i][k].children[0].classList.add("active");
					}

					else {
						contentBigArray[i][k].style.display = "none";
						tempDivArray[i][k].children[0].style.color = "#b5d1de";
						tempDivArray[i][k].children[0].classList.remove("active");
					}
				}
			}

			tempDivArray[i][j].onmouseover = function() {
				tempDivArray[i][j].children[0].style.color = "white";
			}

			tempDivArray[i][j].onmouseout = function() {
				if (tempDivArray[i][j].children[0].classList.contains("active")) {
					tempDivArray[i][j].children[0].style.color = "white";
				}

				else {
					tempDivArray[i][j].children[0].style.color = "#b5d1de";
				}
			}
		}
	}
}

// let computerScienceHTMLArray = ["Hello!"];

// computer science content
for (let i = 0; i < tempDivArray[2].length; i++) {
	// make sure the first menu is active
	if (i == 0) {
		tempDivArray[2][i].children[0].style.color = "white";
		tempDivArray[2][i].children[0].classList.add("active");
	}

	if (i != 13) {
		tempDivArray[2][i].onclick = function() {

			if (i == 0) {
				// add title to each computer science page
				computerScienceContent.innerHTML = "";
				addComputerScienceTitle(i);
				addComputerScienceNotes(i);
			}

			// only add iframe for steps that require an iframe
			if (i > 0) {
				computerScienceContent.innerHTML = "";
				addComputerScienceTitle(i);
				if (i != 9 && i < 12) {
					addComputerScienceIFrame(i);
				}
				addComputerScienceNotes(i);
			}

			// add HTML to each computer science page

			// white or #b5d1de
			for (let j = 0; j < tempDivArray[2].length; j++) {
				if (i == j) {
					tempDivArray[2][j].children[0].style.color = "white";
					tempDivArray[2][j].children[0].classList.add("active");
				}

				else {
					tempDivArray[2][j].children[0].style.color = "#b5d1de";
					tempDivArray[2][j].children[0].classList.remove("active");
				}
			}
		}

		tempDivArray[2][i].onmouseover = function() {
			tempDivArray[2][i].children[0].style.color = "white";
		}

		tempDivArray[2][i].onmouseout = function() {
			if (tempDivArray[2][i].children[0].classList.contains("active")) {
				tempDivArray[2][i].children[0].style.color = "white";
			}

			else {
				tempDivArray[2][i].children[0].style.color = "#b5d1de";
			}
		}
	}
}

function restoreDefault() {
	for (let i = 0; i < menuBigArray.length - 1; i++) {
		for (let j = 0; j < menuBigArray[i].length; j++) {
			if (j == 0) {
				contentBigArray[i][j].style.display = "block";
				tempDivArray[i][j].children[0].classList.add("active");
				tempDivArray[i][j].children[0].style.color = "white";
			}

			else {
				contentBigArray[i][j].style.display = "none";
				tempDivArray[i][j].children[0].classList.remove("active");
				tempDivArray[i][j].children[0].style.color = "#b5d1de";
			}
		}
	}

	// restore default to computer science content page
	computerScienceContent.innerHTML = "";
	addComputerScienceTitle(0);
	addComputerScienceNotes(0);

	for (let i = 0; i < tempDivArray[2].length; i++) {
		if (i == 0) {
			tempDivArray[2][i].classList.add("active");
			tempDivArray[2][i].style.color = "white";
		}

		else {
			tempDivArray[2][i].classList.remove("active");
			tempDivArray[2][i].style.color = "#b5d1de";
		}
	}
}

function addComputerScienceTitle(i) {
	let temph1 = document.createElement("h1");
	temph1.innerHTML = computerScienceTitle[i];
	temph1.setAttribute("class", "title");
	computerScienceContent.appendChild(temph1);
}

function addComputerScienceIFrame(i) {
	let tempIFrame = document.createElement("iframe");
	tempIFrame.classList.add("sketches");
	tempIFrame.setAttribute("id", "sketch" + (i - 1));
	tempIFrame.setAttribute("src", "sketch_html/sketch" + (i - 1) + ".html");
	computerScienceContent.appendChild(tempIFrame);
}

function addComputerScienceNotes(i) {
	// overview
	if (i == 0) {
		// Introduction
		let temph2 = document.createElement("h2");
		temph2.innerHTML = "Introduction";
		temph2.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2);

		let tempp = document.createElement("p");
		tempp.innerHTML = contentObject[i].introduction;
		tempp.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(tempp);

		// Culturally Sustaining Pedagogy
		let temph2b = document.createElement("h2");
		temph2b.innerHTML = "Culturally Sustaining Pedagogy";
		temph2b.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2b);

		let temppb = document.createElement("p");
		temppb.innerHTML = contentObject[i].culturallySustainingPedagogy;
		temppb.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(temppb);

		// Authentic Assessment
		let temph2c = document.createElement("h2");
		temph2c.innerHTML = "Authentic Assessment";
		temph2c.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2c);

		let temppc = document.createElement("p");
		temppc.innerHTML = contentObject[i].authenticAssessment;
		temppc.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(temppc);
	}

	else if (i <= 9) {
		// Student Learning Objective
		let temph2 = document.createElement("h2");
		temph2.innerHTML = "Student Learning Objective";
		temph2.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2);

		let tempp = document.createElement("p");
		tempp.innerHTML = contentObject[i].studentLearningObjective;
		tempp.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(tempp);

		// Lesson and Outcome
		let temph2b = document.createElement("h2");
		temph2b.innerHTML = "Lesson and Outcome";
		temph2b.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2b);

		let temppb = document.createElement("p");
		temppb.innerHTML = contentObject[i].lessonAndOutcome;
		temppb.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(temppb);

		// Conceptual Extension
		let temph2c = document.createElement("h2");
		temph2c.innerHTML = "Conceptual Extension";
		temph2c.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2c);

		let tempul = document.createElement("ul");

		for (let num = 0; num < contentObject[i].conceptualExtension.length; num++) {
			let templi = document.createElement("li");
			templi.innerHTML = contentObject[i].conceptualExtension[num];
			tempul.appendChild(templi);
		}

		computerScienceContent.appendChild(tempul);

		// data sources
		if (i == 8) {
			let temph2e = document.createElement("h2");
			temph2e.innerHTML = "Data Sources";
			temph2e.setAttribute("class", "computer_science_h2");
			computerScienceContent.appendChild(temph2e);

			let tempulb = document.createElement("ul");

			for (let num = 0; num < contentObject[i].dataSources.length; num++) {
				let templib = document.createElement("li");
				templib.innerHTML = "<a href='" + contentObject[i].dataSourcesLink[num] + "' target='_blank' class='a_link'>" + contentObject[i].dataSources[num] + "</a>";
				tempulb.appendChild(templib);
			}

			computerScienceContent.appendChild(tempulb);
		}

		if (needSourceCode.includes(i)) {
			// Source Code
			let temph2d = document.createElement("h2");
			temph2d.innerHTML = "Source Code";
			temph2d.setAttribute("class", "computer_science_h2");
			computerScienceContent.appendChild(temph2d);

			let tempa = document.createElement("a");

			if (i < 10) {
				tempa.innerHTML = "Download Source Code - Day " + (i) + ": " + computerScienceTitle[i];
				tempa.href = "zip_files/Day" + (i) + "_" + zipArray[i - 1] + ".zip";
			}

			else {
				tempa.innerHTML = "Download Source Code - Project #" + (i - 9) + ": " + computerScienceTitle[i];
				tempa.href = "zip_files/project" + (i - 9) + "_" + zipArray[i - 3] + ".zip";
			}

			computerScienceContent.appendChild(tempa);
		}
	}

	else if (i == 10 || i == 11) {
		// Student Learning Objective
		let temph2 = document.createElement("h2");
		temph2.innerHTML = "Description";
		temph2.setAttribute("class", "computer_science_h2");
		computerScienceContent.appendChild(temph2);

		let tempp = document.createElement("p");
		tempp.innerHTML = contentObject[i].description;
		tempp.setAttribute("class", "computer_science_p");
		computerScienceContent.appendChild(tempp);

		if (needSourceCode.includes(i)) {
			// Source Code
			let temph2d = document.createElement("h2");
			temph2d.innerHTML = "Source Code";
			temph2d.setAttribute("class", "computer_science_h2");
			computerScienceContent.appendChild(temph2d);

			let tempa = document.createElement("a");

			if (i < 10) {
				tempa.innerHTML = "Download Source Code - Day " + (i) + ": " + computerScienceTitle[i];
				tempa.href = "zip_files/Day" + (i) + "_" + zipArray[i - 1] + ".zip";
			}

			else {
				tempa.innerHTML = "Download Source Code - Project #" + (i - 9) + ": " + computerScienceTitle[i];
				tempa.href = "zip_files/project" + (i - 9) + "_" + zipArray[i - 3] + ".zip";
			}

			computerScienceContent.appendChild(tempa);
		}
	}

	else if (i == 12) {
		for (let j = 0; j < contentObject[i].experiencesArray.length; j++) {
			let temph2 = document.createElement("h2");
			temph2.innerHTML = contentObject[i].experiencesArray[j][0];
			temph2.setAttribute("class", "computer_science_h2");
			computerScienceContent.appendChild(temph2);

			let tempp = document.createElement("p");
			tempp.innerHTML = contentObject[i].experiencesArray[j][1];
			tempp.setAttribute("class", "computer_science_p");
			computerScienceContent.appendChild(tempp);
		}
	}
}










