var slideIndex = 1;
showSlides(slideIndex);
var value = 0;

// Next/previous controls
function plusSlides(n) {
  if(window.value == 0){
    var sound = new Audio("/sounds/error.mp3");
    sound.play();
    document.getElementById("firstSuccess").style.display = "none";
    document.getElementById("firstError").style.display = "block";
  }
  else{
    showSlides(slideIndex += n);  
  }
}

// Thumbnail image controls
function currentSlide(n) {
  value = 0;
  showSlides(slideIndex = n);
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
  if(document.getElementById("part2").style.display == "none"){
    success.play();
    document.getElementById("part2").style.display = "block";
    document.getElementById("firstSuccess").style.display = "block";
  }
  else{
    failure.play();
  }
}

function clickG(){
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if(document.getElementById("part2").style.display == "none"){
    failure.play();
  }
  else{
    success.play();
    document.getElementById("firstSuccess").style.display = "block";
    value = 1;
  }
}