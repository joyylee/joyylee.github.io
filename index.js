window.onscroll = function() {myFunction()};

var header = document.getElementById("joyceLee1");
// var header2 = document.getElementById("joyceLee2");
var nav = document.getElementById("nav");

var everything = document.getElementById("everything");

var sticky = header.offsetTop;
var sticky3 = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
  	everything.classList.add("fadeOutTransition");
    header.classList.add("sticky");
    nav.classList.add("stickys2");
  } else {
    header.classList.remove("sticky");
    nav.classList.remove("stickys2");
    everything.classList.remove("fadeOutTransition");
  }

}

// document.getElementById('proj').addEventListener('click',function() {
//   var c = document.getElementsByClassName('circle');
//   for (var i = 0; i < c.length; i++) {
//   	c[i].classList.add('animate');
//   }
// })

