// Get the button:
let mybutton = document.getElementById("topbutton");

//when scrolling detected
addEventListener("scroll", (event) => {
  if (window.scrollY > 20) {
    //if scrolled pass current px
    mybutton.style.display = "block"; //displays button to go to top
  } else {
    mybutton.style.display = "none"; //if near top of screen no need to show button
  }
});

// when click scroll to the top of the document
function scrolltotop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//show all frames
var frames = document.getElementsByTagName("iframe");
function showall() {
  frames.forEach((element) => {
    element.style.display = "inline-block"; //display inline block
  });
}

//clears frames from main
function shownone() {
  frames.forEach((element) => {
    element.style.display = "none";
  });
}

//show frames created with math
var math = document.getElementsByClassName("math");
function showmath() {
  shownone(); //clears all frames in main before displaying so undisplay non related frames
  math.forEach((element) => {
    element.style.display = "inline-block";
  });
}

//displays frames that are representational of real life things
var rep = document.getElementsByClassName("rep");
function showrep() {
  shownone();
  rep.forEach((element) => {
    element.style.display = "inline-block";
  });
}

//displays abstract art that doesn't mean anything
var abstract = document.getElementsByClassName("abstract");
function showabstract() {
  shownone();
  abstract.forEach((element) => {
    element.style.display = "inline-block";
  });
}
