var eventKey = localStorage.getItem("eventKey") || "`",
    panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";
document.addEventListener("keydown", (function(e) {
    e.key === eventKey && (window.self !== window.top ? window.parent.location.href = panicLink : window.location.href = panicLink)
}));
var eventKeyInput = document.getElementById("eventKeyInput");
eventKeyInput.addEventListener("input", (function() {
    eventKey = eventKeyInput.value
}));
var linkInput = document.getElementById("linkInput");

function saveEventKey() {
    eventKey = eventKeyInput.value, localStorage.setItem("eventKey", eventKey), localStorage.setItem("panicLink", panicLink)
}
linkInput.addEventListener("input", (function() {
    panicLink = linkInput.value
}));