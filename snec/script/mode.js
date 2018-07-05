"use strict";

(function()
{
	window.addEventListener("load",main)
}());

function main()
{
	document.getElementById("button1").addEventListener("click",nextPageHandler);
	document.getElementById("button2").addEventListener("click",nextPageHandler);
	document.getElementById("back1").addEventListener("click",nextPageHandler);
}
function nextPageHandler(ev)
{
	var btn = ev.currentTarget.id;
	switch(btn)
	{
		case "button1":
			window.location.replace("../html/indexClassic.html");
			break;
		case "button2":
			window.location.replace("../html/indexMaze.html");
			break;
		case "back1":
			window.location.replace("../menuPrincipal.html");
			break;
		default:
			alert("Error getting next page url");
			break;
	}
}