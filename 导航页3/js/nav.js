var body = document.querySelector("body");
var menu = document.querySelector("#menu-cb");
var nav = document.querySelector(".nav");
body.onclick = function() {
    menu.checked = false;
}
nav.onclick = function() {
    window.event ? window.event.cancelBubble = true : e.stopPropagation();
}