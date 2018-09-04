

document.getElementById("words").onclick=function() {
	var canvas = document.getElementById("words");
	var context = canvas.getContext("2d");

	context.lineWidth = 30;
	context.strokeStyle = "blue";

	//draw line with standard butt ending

	// context.moveTo(25, 50); //horizontal, vertical
	context.lineTo(400, 150);
	context.lineCap = "butt";
	context.stroke();


	//draw second line change color etc

	
}