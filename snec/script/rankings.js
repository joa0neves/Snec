"use strict";

var globalNames = [];
var globalScoresC = [];
var globalScores = [];
var globalNamesSize = 0;
var usedNames = [];

(function()
{
	window.addEventListener("load",main)
}());

function main()
{
	presentScores();
	document.getElementById("button1").addEventListener("click",nextPageHandler);
	document.getElementById("clearButton").addEventListener("click",nextPageHandler);
}
function nextPageHandler(ev)
{
	var btn = ev.currentTarget.id;
	switch(btn)
	{
		case "button1":
			window.location.replace("../menuPrincipal.html");
			break;
		case "clearButton":
			clearFunc();
			break;
		default:
			alert("Error getting next page url");
			break;
	}
}

function clearFunc(){
	for(var i=0;i<globalNamesSize;i++){
		localStorage.removeItem(globalNames[i]);
	}
	window.location.reload();
}

function maxScores(){
	for(var i=0;i<globalNamesSize;i++){

	}
}

function presentScores(){
	var sizeTemp = localStorage.length;
	if(sizeTemp!=0){
		var j=0;
		var nameTemp;
		var scoreTemp;
		var arrayTemp = new Array(sizeTemp);
		var resArray;
		for(var i=0;i<sizeTemp;i++){	
			arrayTemp[i] = new Array("",0);
			nameTemp=localStorage.key(i);
			scoreTemp=localStorage.getItem(nameTemp);
			arrayTemp[i][0]=nameTemp;
			arrayTemp[i][1]=scoreTemp;
			globalNames[globalNamesSize]=nameTemp;
			globalScores[globalNamesSize]=scoreTemp;
			globalScoresC[globalNamesSize]=scoreTemp;
			globalNamesSize++;
		}
		globalScoresC.sort();
		var temp2=globalNamesSize-1;
		while(j<globalNamesSize){
			var um;
			var dois;
			var temp;
			try{
				var list = document.getElementById("score"+j.toString());
				dois = globalScoresC[temp2];
				for(var z=0;z<globalNamesSize;z++){
					if(globalScores[z]==dois && !usedNames.includes(globalNames[z])){
						temp=z;
						break;
					}
				}
				um = globalNames[temp];
				usedNames.push(um);
				list.innerHTML=um+" --- "+dois;
				j++;
				temp2--;
				console.log(1,j);
				console.log(2,globalNamesSize);

			}catch(e){
				break;
			}
		}
	}
}