// program variables
let activeColor = "#2b678a";
let hoverColor = "#2b678a";
let tabsBackgroundColorArray = ["#153243", "#153243", "#153243", "#153243"];
let homeMenu = ["CURRICULUM OVERVIEW", "RATIONALE", "PHILOSOPHY", "SOCIAL RELEVANCE", "GOALS"];
// let socioemotionalMenu = ["Socioemotional Menu 1", "Socioemotional Menu 2", "Socioemotional Menu 3"];
let mathMenu = ["Overview", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8"];
let computerScienceMenu = ["Overview", "Step 0: Setup", "Step 1: OOP w/ Perlin Noise", "Step 2: States", "Step 3: Infection", "Step 4: Recovery or Death", "Step 5: Display Data", "Step 6: Virus Variable Controls", "Step 7: Virus Variables Input", "Assessment", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample Project #1", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample Project #2"];
let computerScienceTitle = ["Overview", "Setup", "OOP w/ Perlin Noise", "States", "Infection", "Recovery or Death", "Display Data", "Virus Variable Controls", "Virus Variables Input", "Assessment: Simulation Enhancement", "Wearing Masks", "Social Distancing"];
let computerScienceNotes = ["Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes", "Notes notes notes"];
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
		tempDiv.innerHTML = menuBigArray[i][j];

		if (i == menuBigArray.length - 1 && j == menuBigArray[i].length - 3) {
			tempDiv.classList.add("lastmenu");
		}

		if (i == menuBigArray.length - 1) {
			if (j == menuBigArray[i].length - 2 || j == menuBigArray[i].length - 1) {
				tempDiv.classList.add("submenu");
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
			tempDivArray[i][j].classList.add("active");
			tempDivArray[i][j].style.color = "white";
		}

		tempDivArray[i][j].onclick = function() {
			for (let k = 0; k < tempDivArray[i].length; k++) {
				if (k == j) {
					contentBigArray[i][k].style.display = "block";
					tempDivArray[i][k].style.color = "white";
					tempDivArray[i][k].classList.add("active");
				}

				else {
					contentBigArray[i][k].style.display = "none";
					tempDivArray[i][k].style.color = "#b5d1de";
					tempDivArray[i][k].classList.remove("active");
				}
			}
		}

		tempDivArray[i][j].onmouseover = function() {
			tempDivArray[i][j].style.color = "white";
		}

		tempDivArray[i][j].onmouseout = function() {
			if (tempDivArray[i][j].classList.contains("active")) {
				tempDivArray[i][j].style.color = "white";
			}

			else {
				tempDivArray[i][j].style.color = "#b5d1de";
			}
		}
	}
}

// let computerScienceHTMLArray = ["Hello!"];

// computer science content
for (let i = 0; i < tempDivArray[2].length; i++) {
	// make sure the first menu is active
	if (i == 0) {
		tempDivArray[2][i].style.color = "white";
		tempDivArray[2][i].classList.add("active");
	}

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
			addComputerScienceIFrame(i);
			addComputerScienceNotes(i);
		}

		// add HTML to each computer science page

		// white or #b5d1de
		for (let j = 0; j < tempDivArray[2].length; j++) {
			if (i == j) {
				tempDivArray[2][j].style.color = "white";
				tempDivArray[2][j].classList.add("active");
			}

			else {
				tempDivArray[2][j].style.color = "#b5d1de";
				tempDivArray[2][j].classList.remove("active");
			}
		}
	}

	tempDivArray[2][i].onmouseover = function() {
		tempDivArray[2][i].style.color = "white";
	}

	tempDivArray[2][i].onmouseout = function() {
		if (tempDivArray[2][i].classList.contains("active")) {
			tempDivArray[2][i].style.color = "white";
		}

		else {
			tempDivArray[2][i].style.color = "#b5d1de";
		}
	}
}

function restoreDefault() {
	for (let i = 0; i < menuBigArray.length - 1; i++) {
		for (let j = 0; j < menuBigArray[i].length; j++) {
			if (j == 0) {
				contentBigArray[i][j].style.display = "block";
				tempDivArray[i][j].classList.add("active");
				tempDivArray[i][j].style.color = "white";
			}

			else {
				contentBigArray[i][j].style.display = "none";
				tempDivArray[i][j].classList.remove("active");
				tempDivArray[i][j].style.color = "#b5d1de";
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
	let tempp = document.createElement("p");
	tempp.innerHTML = computerScienceNotes[i];
	computerScienceContent.appendChild(tempp);

	if (needSourceCode.includes(i)) {
		let tempa = document.createElement("a");

		if (i < 10) {
			tempa.innerHTML = "Download Source Code - Step " + (i - 1) + ": " + computerScienceTitle[i];
			tempa.href = "zip_files/step" + (i - 1) + "_" + zipArray[i - 1] + ".zip";
		}

		else {
			tempa.innerHTML = "Download Source Code - Project #" + (i - 9) + ": " + computerScienceTitle[i];
			tempa.href = "zip_files/project" + (i - 9) + "_" + zipArray[i - 3] + ".zip";
		}

		computerScienceContent.appendChild(tempa);
	}
}










