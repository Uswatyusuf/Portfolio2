// JavaScript function to toggle the display of navigation links for smaller screens
function displaynav(icon){
  icon.classList.toggle('bi-x-lg')
  var x = document.getElementById("navbar");
  
  if (x.style.display === "block"){
  x.style.display = "none"
  
  }
  else{
  x.style.display = "block"
  
  }
  }
  
// Get references to HTML elements with IDs 'slide1', 'slide2', and 'slide3'
var slide1  = document.getElementById('slide1')
var slide2  = document.getElementById('slide2')
var slide3  = document.getElementById('slide3')

// Get references to HTML elements with class 'video_demo'
let videos = document.getElementsByClassName("video_demo")

// Event handler for when 'slide1' video ends
slide1.onended= function(){
    slide2.play(); // Play 'slide2'
    slide1.style.opacity = 0; // Set opacity of 'slide1' to 0 (hide)
    slide2.style.opacity = 1; // Set opacity of 'slide2' to 1 (show)
    videos[1].className += " active";//Add 'active' class to the second video indicator
    videos[0].className = videos[0].className.replace(" active", "")
}

// Event handler for when 'slide2' video ends
slide2.onended= function(){
    slide3.play(); // Play 'slide3'
    slide2.style.opacity = 0; // Set opacity of 'slide2' to 0 (hide)
    slide3.style.opacity = 1; // Set opacity of 'slide3' to 1 (show)
    videos[2].className += " active";// Add 'active' class to the third video indicator
    videos[1].className = videos[1].className.replace(" active", "")
}

// Event handler for when 'slide3' video ends
slide3.onended= function(){
    slide1.play();// Play 'slide1'
    slide3.style.opacity = 0; // Set opacity of 'slide3' to 0 (hide)
    slide1.style.opacity = 1; // Set opacity of 'slide1' to 1 (show)
    videos[0].className += " active";// Add 'active' class to the first video indicator
    videos[2].className = videos[2].className.replace(" active", "")
}

// Function to play the video based on the given index
function currentVideo(n){
  if (n==1){
       slide1.play()
       slide1.style.opacity = 1
       slide2.style.opacity = 0;
       slide3.style.opacity = 0;
       videos[0].className += " active";
       videos[1].className = videos[1].className.replace(" active", "")
       videos[2].className = videos[2].className.replace(" active", "")
  }
  else if (n==2) {
    slide2.play()
    slide2.style.opacity = 1
    slide1.style.opacity = 0;
    slide3.style.opacity = 0;
    videos[1].className += " active";
    videos[0].className = videos[0].className.replace(" active", "")
    videos[2].className = videos[2].className.replace(" active", "")
  }
  else if (n==3){
    slide3.play()
    slide3.style.opacity = 1
    slide1.style.opacity = 0;
    slide2.style.opacity = 0;
    videos[2].className += " active";
    videos[1].className = videos[1].className.replace(" active", "")
    videos[0].className = videos[0].className.replace(" active", "")
  }
}

// Initialize slideIndex and show the slides
let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show slides and handle slideshow logic
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");// Get slides
  let dots = document.getElementsByClassName("demo"); // Get slide indicators
  
  if (n > slides.length) {slideIndex = 1}// Reset slideIndex if it exceeds the numb
  if (n < 1) {slideIndex = slides.length} // Set slideIndex to the last slide if it goes below 1

      // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all slide indicators
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Reset slideIndex if it exceeds the number of slides
  if (slideIndex > slides.length) {slideIndex = 1}

  // Display the current slide and set 'active' class for the corresponding slide indicator
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Set a timeout to call the showSlides function after 5000 milliseconds (5 seconds)
  setTimeout(showSlides, 5000); 
  slideIndex++;
}

