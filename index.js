window.onscroll = function() {myFunction()};

var header = document.getElementById("joyceLee1");
// var header2 = document.getElementById("joyceLee2");
var nav = document.getElementById("nav");

var sticky = header.offsetTop;
var sticky2 = header2.offsetTop;
var sticky3 = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    nav.classList.add("stickys2");
  } else {
    header.classList.remove("sticky");
    nav.classList.remove("stickys2");
  }

}

