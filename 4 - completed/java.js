function getRandomNumber(max)
{
	return Math.floor(Math.random() * max);
}

function startTheShow() 
{
	window.setInterval(drawSomething, 2);
}

function drawSomething()
{
	var canvas = document.getElementById("drawCanvas");
	var drawingContext = canvas.getContext("2d");
	var x = getRandomNumber(200);
	var y = getRandomNumber(200);
	var size = getRandomNumber(60);

	drawingContext.rect(x,y,size,size);
	drawingContext.stroke();
}



Storage.prototype.setObject = function(key, value)
{
	this.setItem(key, JSON.stringnify(value));
}

Storage.prototype.getObject = function (key) 
{
	var value = this.getItem(key);
	return value && JSON.parse(value)
}



