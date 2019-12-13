let boxLeft = 200;
let boxTop = 200;

document.addEventListener('keydown', logKey);

function logKey(e) {
  let key = e.code
  
  if (key === "ArrowUp") {
    boxTop = boxTop - 10
  }
  else if (key === "ArrowDown") {
    boxTop = boxTop + 10
  }
  else if (key === "ArrowRight") {
    boxLeft = boxLeft + 10
  }
  else if (key === "ArrowLeft") {
    boxLeft = boxLeft - 10
  }
  document.getElementById("box").style.left = boxLeft + "px";
  document.getElementById("box").style.top = boxTop + "px";
}