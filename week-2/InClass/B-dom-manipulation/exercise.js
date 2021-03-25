/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//Step 1:
const pElements = document.querySelectorAll("p")
console.log(pElements)
//  pElements.forEach(p => p.style.fontSize = "50px")

//Step 2:
const firstDivElement = document.querySelector(".site-header")
console.log(firstDivElement);

//Step 3:
const idJumbotronText = document.querySelector("#jumbotron-text")
console.log(idJumbotronText);

//Step 4:
const pElementsContainedPrimeryContent = document.querySelectorAll(".primary-content p")
console.log(pElementsContainedPrimeryContent);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector("#alertBtn").addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!"))




/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// document.querySelector("#bgrChangeBtn").addEventListener("click", () => document.body.style.backgroundColor = "pink")

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
// document.querySelector("#addTextBtn").addEventListener("click", () => paragraph.innerText = "LEARN MORE" + name.value )

document.querySelector("#addTextBtn").addEventListener("click", addSomeText)
function addSomeText() {
    const p = document.createElement("p")
    p.textContent = "LEARN MORE"
    document.querySelector("#mainArticles").appendChild(p)

}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector("#largerLinksBtn").addEventListener("click", () => {
    document.querySelectorAll("a").forEach(a => a.style.fontSize = "50px")
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
document.querySelector("#addArticleBtn").addEventListener("click", addNewParagraph)
function addNewParagraph() {
    const p = document.createElement("p")
    const input = document.querySelector(".form-control.addArticle")
    p.textContent = input.value
    document.querySelector("#mainArticles").appendChild(p)
    input.value = " "

}
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
// const color = ['red', 'purple', 'blue', 'yellow', 'green'];

// function changeColor() {
//     const currentColor = document.body.style.backgroundColor
//     const indexCurrent = color.findIndex(c => c === currentColor)
//     const nextColor = color[indexCurrent + 1] || color[0]
//     document.body.style.backgroundColor = nextColor

// }
const differentColors = ['red', 'purple', 'blue', 'yellow', 'green'];
let i = 0;
const changeBtn = document.querySelector("#bgrChangeBtn");
changeBtn.addEventListener("click", () => {

    document.body.style.backgroundColor = differentColors[i];

    i < differentColors.length - 1 ? i++ : i = 0;
});

