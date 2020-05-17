// stick nav
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

// curtain nav
function openNav() {
  document.getElementById("navbar").style.width = "80%";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0%";
}

/* create function where if you you click outside
the "myNav" id, you invoke the closeNav() function*/

/*
function closeNav2() {
  var x = document.getElementById("myNav");
  if (x.id !== "myNav") {
    document.getElementById("myNav").style.width = "0%";
  }
}
*/

/*
var modal = document.getElementById("myNav");
window.onclick = function (event) {
  if (event.target == modal) {
    document.getElementById("myNav").style.width = "0%";
  }
};
*/
