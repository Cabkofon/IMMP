function save()
{
	var inputElement = document.getElementById("inputText");
	var userString = inputElement.value;

	localStorage.setItem("userText" , userString);
}


function getInputElement()
{
	return document.getElementById("inputText");
}

function load()
{
	var inputElement = document.getElementById("inputText");
	inputElement.value = localStorage.getItem("userText");
}