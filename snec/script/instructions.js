"use strict";

(function() {
    window.addEventListener("load",main)
}());

function main() {
    document.getElementById("button1").addEventListener("click", nextPageHandler);
}

function nextPageHandler(ev) {
    var btn = ev.currentTarget.id;
    window.location.replace("../menuPrincipal.html");
}