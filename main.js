var slideIndex = 1;
showSlides(slideIndex);
var value = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);  
  document.getElementById("n").style.display = "none";
}

// Thumbnail image controls
function currentSlide(n) {
  value = 0;
  showSlides(slideIndex = n);
}

function toggle(id){
  var text = document.getElementById(id).style.display;
  if(text == "block"){
    document.getElementById(id).style.display = "none";
  }
  else{
    document.getElementById(id).style.display = "block";
  }
}

function show(id){
  document.getElementById(id).style.display = "block";
}

function hide(id){
  document.getElementById(id).style.display = "none";
}

function showNext(){
  document.getElementById("n").style.display = "block";
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if(slideIndex == 2){
    document.getElementById("p").style.display = "none";
    document.getElementById("n").style.display = "block";
    document.getElementById("c").style.display = "block";
  }
  else if(slideIndex == 13){
    document.getElementById("p").style.display = "block";
    document.getElementById("n").style.display = "none";
    document.getElementById("c").style.display = "block";
  }
  else{
    document.getElementById("p").style.display = "block";
    document.getElementById("n").style.display = "block";
    document.getElementById("c").style.display = "block";
  }
}

function clickNgede(){
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if(document.getElementById("firstq1").style.width == "18vw" ){
    success.play();
    document.getElementById("firstq1").style.width = "17vw";
    document.getElementById("firstq2").style.display = "block";
    document.getElementById("firstq1").style.display = "none";
    document.getElementById("firstAvatar").onclick = function(){ toggle("firstq2") };
  }
  else{
    failure.play();
  }
}

function clickG(){
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if(document.getElementById("firstq1").style.width == "18vw"){
    failure.play();
  }
  else{
    success.play();
    document.getElementById("firstq2").style.display = "none";
    document.getElementById("firstSuccess").style.display = "block";
    document.getElementById("firstAvatar").onclick = function(){ toggle("firstSuccess") };
    document.getElementById("n").style.display = "block";
  }
}