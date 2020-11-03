var title =document.querySelector("h1");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function createButton(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Random"));
	body.appendChild(button);
	button.onclick=changeColours;
}

function changeColours(){
	color1.value= "#" + (Math.floor(Math.random() * (999999 - 000000)) + 000000);
	color2.value= "#" + (Math.floor(Math.random() * (999999 - 000000)) + 000000);
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
// here also interchangable with .innerHTML and .innerText
	css.innerText = body.style.background + ";";
}
createButton();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

