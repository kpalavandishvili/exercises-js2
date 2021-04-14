// Write your code here
let images = ["images/kitten1.jpg", "images/kittens2.jpg", "images/kitty3.png", "images/kitty4.jpg", "images/kitty5.jpg"]
let img = document.querySelector(".slideShow img")
let i = 0;

uploadImages();
function uploadImages() {
  img.src = images[i];
  
}

function moveBack() {
  if (i === 0) {
    i = images.length - 1 ;
   
  } else {
     i = i-1; 
  }
  uploadImages();
}


function moveForward() {
  if (i === images.length - 1) {
    i = 0 ;
   
  } else {
     i = i+1; 
  }
  uploadImages();
  
}

let interval;
function moveAutoForward() {
  interval = setInterval(moveForward, 3000);
}

 

function moveAutoBack() {
 interval = setInterval(moveBack,3000);
}
function stopIt() {
  clearInterval(interval)
  
  
}

let buttonBack = document.getElementById("back").addEventListener("click", moveBack);
let buttonForward = document.getElementById("forward").addEventListener("click", moveForward);
let buttonAutoForward = document.getElementById("auto-forward").addEventListener("click", moveAutoForward);
let buttonAutoBack = document.getElementById("auto-back").addEventListener("click", moveAutoBack);
let buttonStop = document.getElementById("stop").addEventListener("click", stopIt);







