/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/


//Task 1
// setTimeout(function () {
//   document.body.style.background ="blue";  
// }, 5000);




//Task 2
setInterval(function ()  {
  document.body.style.background ="purple";
 
}, 5000);