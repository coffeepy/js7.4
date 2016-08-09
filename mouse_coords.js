coords_div = document.getElementById('print-coords');
document.onmousemove = function (event) {
  var x = event.clientX;
  var y = event.clientY;
  coords = "X: " + x + ";" + "Y: " + y + "; Time:" + new Date() + "\n"
  coords_div.value += coords
}
