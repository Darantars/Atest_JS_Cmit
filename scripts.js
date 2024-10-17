var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("orange");
colorCircles[7] = document.getElementById("purple");
colorCircles[8] = document.getElementById("brown");
colorCircles[9] = document.getElementById("black");

var targetColor = "#F00";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var list = document.getElementById("list");
list.addEventListener("click", pickColor);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

var brushSize = document.getElementById("brushSize");
var brushOpacity = document.getElementById("brushOpacity");

brushSize.addEventListener("change", updateBrushSettings);
brushOpacity.addEventListener("input", updateBrushSettings);

function pickColor(e) {
    if (e.target.tagName == "LI") {
        targetColor = e.target.style.backgroundColor;
        for (var i = 0; i <= 9; i++) {
            colorCircles[i].style.height = "50px";
            colorCircles[i].style.width = "50px";
        }
        e.target.style.height = "80px";
        e.target.style.width = "80px";
        if (e.target.id=="red"){
			targetColor="#F00"
		}
		else if (e.target.id=="blue"){
			targetColor="#00F"
		}
		else if (e.target.id=="green"){
			targetColor="#0F0"
		}
		else if (e.target.id=="yellow"){
			targetColor="#FF0"
		}
		else if (e.target.id=="cyan"){
			targetColor="#0FF"
		}
		else if (e.target.id=="magenta"){
			targetColor="#F0F"
		}
        	else if (e.target.id=="orange"){
			targetColor="#FFA500"
		}
		else if (e.target.id=="purple"){
			targetColor="#800080"
		}
		else if (e.target.id=="brown"){
			targetColor="#8B4513"
		}
		else if (e.target.id=="black"){
			targetColor="#000"
		}
    }
}

function drawOnCanvas(e) {
    if (e.which == 1) {
        canvasContext.fillStyle = targetColor;
        canvasContext.globalAlpha = brushOpacity.value;
        canvasContext.beginPath();
        canvasContext.arc(e.offsetX, e.offsetY, brushSize.value, 0, Math.PI * 2);
        canvasContext.fill();
    }
}

function updateBrushSettings() {
    canvasContext.lineWidth = brushSize.value;
    canvasContext.globalAlpha = brushOpacity.value;
}
