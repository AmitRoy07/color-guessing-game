var numsquares = 6;
var colors = generateRamdomColors(numsquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".resetbtn");
var modebtn = document.querySelectorAll(".mode")


for(var i = 0; i < modebtn.length; i++) {
	modebtn[i].addEventListener("click", function() {
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Hard" ?	numsquares = 6 : numsquares = 3;
		reset();
	});
}

function reset() {
	colors = generateRamdomColors(numsquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colordisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < square.length; i++) {
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.background = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function() {
	reset();
});

colordisplay.textContent = pickedColor;

for(var i = 0; i < square.length; i++){
	// add initial colors to squares
	square[i].style.backgroundColor = colors[i];

 
	//add click listeners to square
	square[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again"
			changeColors(clickColor)
			h1.style.backgroundColor = clickColor
		}else {
			this.style.backgroundColor = "#233233"
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(color){
	//loop through all aquare
	for (var i = 0; i < square.length; i++) {
	 //change each color to match given color
	 square[i].style.backgroundColor = color;
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}


function generateRamdomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get ramdom color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}