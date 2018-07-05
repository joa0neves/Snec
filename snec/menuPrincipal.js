"use strict";

(function()
{
	window.addEventListener("load",main)
}());

function main()
{
	document.getElementById("button1").addEventListener("click",nextPageHandler);
	document.getElementById("button2").addEventListener("click",nextPageHandler);
	document.getElementById("button3").addEventListener("click",nextPageHandler);
	document.getElementById("button4").addEventListener("click",nextPageHandler);
}
function nextPageHandler(ev)
{
	var btn = ev.currentTarget.id;
	switch(btn)
	{
		case "button1":
			window.location.replace("html/mode.html");
			break;
		case "button2":
			window.location.replace("html/instructions.html");
			break;
		case "button3":
			window.location.replace("html/credits.html");
			break;
		case "button4":
			window.location.replace("html/rankings.html");
			break;
		default:
			alert("Error getting next page url");
			break;
	}
}


















