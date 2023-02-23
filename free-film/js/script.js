//disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());
//disable F12
document.onkeypress = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onmousedown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 123) {
    return false;
  }
}
//disable ctrl+u
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault()
  }
});
//disable ctrl+shift+i
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }
});