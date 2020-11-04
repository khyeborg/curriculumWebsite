// program variables
let activeColor = "lightblue";
let hoverColor = "lightblue";
let tabsBackgroundColorArray = ["#153243", "#800F20", "#254514", "#20124D"];
let homeMenu = ["Home Menu 1", "Home Menu 2", "Home Menu 3"];
let socioemotionalMenu = ["Socioemotional Menu 1", "Socioemotional Menu 2", "Socioemotional Menu 3"];
let mathMenu = ["Math Menu 1", "Math Menu 2", "Math Menu 3"];
let computerScienceMenu = ["Overview", "Step 0: Setup", "Step 1: OOP w/ Perlin Noise", "Step 2: States", "Step 3: Infection", "Step 4: Recovery or Death", "Step 5: Display Data", "Step 6: Virus Variable Controls", "Step 7: Virus Variables Input", "Project: Enhance Simulation"];
let menuBigArray = [homeMenu, socioemotionalMenu, mathMenu, computerScienceMenu];
let canvasWidth;

// get references 
let body = document.querySelector("body");
let tabsArray = document.getElementsByClassName("tab");
let pageArray = document.getElementsByClassName("page");
let menuBigDivArray = document.getElementsByClassName("menu_big_div");
let homeContentArray = document.getElementsByClassName("home_content_page");
let socioemotionalContentArray = document.getElementsByClassName("socioemotional_content_page");
let mathContentArray = document.getElementsByClassName("math_content_page");
let computerScienceContentArray = document.getElementsByClassName("computer_science_content_page");
let contentBigArray = [homeContentArray, socioemotionalContentArray, mathContentArray, computerScienceContentArray];
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
for (let i = 0; i < tempDivArray[3].length; i++) {
	// make sure the first menu is active
	if (i == 0) {
		tempDivArray[3][i].style.color = "white";
		tempDivArray[3][i].classList.add("active");
	}

	tempDivArray[3][i].onclick = function() {

		if (i == 0) {
			computerScienceContent.innerHTML = "Hello!";
		}

		// only add iframe for steps that require an iframe
		if (i > 0) {
			let tempIFrame = document.createElement("iframe");
			tempIFrame.classList.add("sketches");
			tempIFrame.setAttribute("id", "sketch" + (i - 1));
			tempIFrame.setAttribute("src", "sketch_html/sketch" + (i - 1) + ".html");

			computerScienceContent.innerHTML = "";
			computerScienceContent.appendChild(tempIFrame);
		}

		// white or #b5d1de
		for (let j = 0; j < tempDivArray[3].length; j++) {
			if (i == j) {
				tempDivArray[3][j].style.color = "white";
				tempDivArray[3][j].classList.add("active");
			}

			else {
				tempDivArray[3][j].style.color = "#b5d1de";
				tempDivArray[3][j].classList.remove("active");
			}
		}
	}

	tempDivArray[3][i].onmouseover = function() {
		tempDivArray[3][i].style.color = "white";
	}

	tempDivArray[3][i].onmouseout = function() {
		if (tempDivArray[3][i].classList.contains("active")) {
			tempDivArray[3][i].style.color = "white";
		}

		else {
			tempDivArray[3][i].style.color = "#b5d1de";
		}
	}
}

function restoreDefault() {
	for (let i = 0; i < menuBigArray.length - 1; i++) {
		for (let j = 0; j < menuBigArray[i].length; j++) {
			if (j == 0) {
				contentBigArray[i][j].classList.remove("hidden");
				tempDivArray[i][j].classList.add("active");
				tempDivArray[i][j].style.color = "white";
			}

			else {
				contentBigArray[i][j].classList.add("hidden");
				tempDivArray[i][j].classList.remove("active");
				tempDivArray[i][j].style.color = "#b5d1de";
			}
		}
	}

	// restore default to computer science content page
	computerScienceContent.innerHTML = "Hello!";
}












