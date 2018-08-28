window.onscroll = function() {myFunction()};

var header = document.getElementById("joyceLee1");
var header2 = document.getElementById("joyceLee2");

var sticky = header.offsetTop;
var sticky = header2.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (window.pageYOffset > sticky2) {
    header2.classList.add("stickys");
  } else {
    header2.classList.remove("stickys");
  }

}

