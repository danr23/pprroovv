function init() {
sec = 0;
setInterval(tick, 1000);
}
function tick() {
sec++;
document.getElementById("timer").childNodes[0].nodeValue = sec;
}
init();
function copy() {
getId = document.getElementById("command");
document.getElementById("textforcopy").childNodes[0].nodeValue = getId.value;
getId.select();
document.execCommand('copy');
}
function cut() {
getId = document.getElementById("command");
document.getElementById("textforcut").childNodes[0].nodeValue = getId.value;
getId.select();
document.execCommand('cut');
}
function selecttext() {
getId = document.getElementById("command");
getId.select();
document.getElementById("textforselect").childNodes[0].nodeValue = getId.value;
}
