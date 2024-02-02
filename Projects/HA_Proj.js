function openup() {
  var dropdown = document.getElementById('Sprint1_container');
  var arrow1 = document.getElementById('Enlarge');
  var arrow_down = document.getElementById('Arrow_down')
  var arrow2 = document.getElementById('Enlarge-close');
  var arrow_up = document.getElementById('Arrow_up')
  dropdown.style.visibility = "visible";
  dropdown.style.display = "block";
  dropdown.style.height = "fit-content";
  dropdown.style.width = "100%";
  dropdown.style.transition = "max-height 0.2 ease-out"
  arrow1.style.visibility = "hidden";
  arrow1.style.display = "none";
  arrow_down.style.visibility = "hidden";
  arrow_down.style.display = "none";
  arrow2.style.visibility = "visible";
  arrow2.style.display = "block";
  arrow_up.style.visibility = "visible";
  arrow_up.style.display = "block";
}

function closeup() {
  var dropdown = document.getElementById('Sprint1_container');
  var arrow1 = document.getElementById('Enlarge-close');
  var arrow_down = document.getElementById('Arrow_up')
  var arrow2 = document.getElementById('Enlarge');
  var arrow_up = document.getElementById('Arrow_down')
  dropdown.style.visibility = "hidden";
  dropdown.style.display = "none";
  dropdown.style.transition = "max-height 0.2 ease-out"
  arrow1.style.visibility = "hidden";
  arrow1.style.display = "none";
  arrow_down.style.visibility = "hidden";
  arrow_down.style.display = "none";
  arrow2.style.visibility = "visible";
  arrow2.style.display = "block";
  arrow_up.style.visibility = "visible";
  arrow_up.style.display = "block";
}

function alternate() {
  var dropdown = document.getElementById('Sprint1_container');
  if (dropdown.style.visibility = "hidden") {
    openup();
  }
  else {
    closeup();
  }
}

var coll = document.getElementsByClassName("Enlarge");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = doxument.getElementById('Sprint1_container');
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}