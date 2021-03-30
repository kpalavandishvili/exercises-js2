

// const blueButton = document.querySelector("#blueBtn"); // find me an ID blueBtn 
// blueButton.addEventListener("click", changeBackGroundColor); // add method *addEventListener* for "click"
// function changeBackGroundColor() { //create function 

//  const changeColorInClass = document.querySelector(".jumbotron"); // searching for the class "jumbotron"
//  changeColorInClass.style.backgroundColor = "#588fbd"; // changes color
// }
document.querySelector("#blueBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd"
  document.querySelector(".buttons .btn-primary").style.backgroundColor = "#ffa500";
  document.querySelector(".buttons .btn-secondary").style.backgroundColor = "black";
  document.querySelector(".buttons .btn-secondary").style.color = "white";


})

document.querySelector("#orangeBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e"
  document.querySelector(".buttons .btn-primary").style.backgroundColor = "#5751fd"
  document.querySelector(".buttons .btn-secondary").style.backgroundColor = "#31b0d5";
  document.querySelector(".buttons .btn-secondary").style.color = "white";

})

document.querySelector("#greenBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a"
  document.querySelector(".buttons .btn-primary").style.backgroundColor = "black"
  document.querySelector(".buttons .btn-secondary").style.backgroundColor = "#8c9c08";

})

// document.querySelector("form").addEventListener("click", addNewParagraph)
// function addNewParagraph() {
//   const p = document.createElement("p")
//   const input = document.querySelector(".form-group")
//   p.textContent = input.value
//   input.value = "Your name"

// }

document.querySelector(`button[type="submit"]`).addEventListener("click", (element) => {
  element.preventDefault()

  const email = document.querySelector("#exampleInputEmail1");
  const name = document.querySelector("#example-text-input");
  const description = document.querySelector("#exampleTextarea");

  const isEmailValid = email.value.length > 0 && email.value.includes("@")
  const isNameValid = name.value.length > 0
  const isdescriptionValid = description.value.length > 0


  email.style.backgroundColor = isEmailValid ? " " : "red"
  name.style.backgroundColor = isNameValid? " " : "red"
  description.style.backgroundColor =isdescriptionValid ? " " : "red"


if (isNameValid && isEmailValid && isdescriptionValid){
  alert("thank you for filling out the form")
  console.log(email.value.length > 0);
  console.log(name.value.length > 0);
  console.log(description.value.length > 0);
  
}
})

