var i = 0;
var add = 5;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var textupdate = document.getElementById("myProgress");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 95) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        textupdate.innerHTML = width + add + "% This Can Take A Few Minutes";
      }
    }
  }
}
