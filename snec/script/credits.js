"use strict";

(function()
{
	window.addEventListener("load",main)
}());

function main()
{
	document.getElementById("button1").addEventListener("click",nextPageHandler);
}
function nextPageHandler(ev)
{
	var btn = ev.currentTarget.id;
	switch(btn)
	{
		case "button1":
			window.location.replace("../menuPrincipal.html");
			break;
		default:
			alert("Error getting next page url");
			break;
	}
}