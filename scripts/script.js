window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function addPadding() {
  //document.getElementById("education").style.paddingTop="100px";
}
document.getElementById("education").onmouseover = function(){mouseover("edtag")};
document.getElementById("education").onmouseout = function(){mouseout("edtag")};
document.getElementById("skills").onmouseover = function(){mouseover("sktag")};
document.getElementById("skills").onmouseout = function(){mouseout("sktag")};
document.getElementById("courses").onmouseover = function(){mouseover("cotag")};
document.getElementById("courses").onmouseout = function(){mouseout("cotag")};
document.getElementById("projects").onmouseover = function(){mouseover("prtag")};
document.getElementById("projects").onmouseout = function(){mouseout("prtag")};
document.getElementById("internship").onmouseover = function(){mouseover("intag")};
document.getElementById("internship").onmouseout = function(){mouseout("intag")};

function mouseover(x){
  //console.log(document.getElementById(x));
  //document.getElementById(x).removeAttribute("background-color");
  document.getElementById(x).style.backgroundColor="red";
}
function mouseout(x){
  document.getElementById(x).style.background = "#d6b915";
}
