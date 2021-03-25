/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */




function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(h => {
    const h1 = document.createElement("h1");
    h1.textContent = h.name;
    content.appendChild(h1)

    const h2 = document.createElement("h2");
    h2.textContent = h.job;
    content.appendChild(h2);

  })
}
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const content = document.querySelector("#content");
  shopping.forEach(s => {
    const ul = document.createElement("ul")
    ul.textContent = s;
    content.appendChild(ul)

  })


}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  //Write your code in here
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "Book list";
  content.appendChild(h1);

  const flexBoxContent = document.createElement("div")
  content.appendChild(flexBoxContent);
  
  const ul = document.createElement("ul");
  flexBoxContent.appendChild(ul);
 //style

 ul.style.display = "flex";
 ul.style.justifyContent = "space-around";





  books.forEach(book => {

    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = book.title + " - " + book.author
    li.appendChild(p)
    const image = document.createElement("img");
    image.style.height = "150px" 
    image.style.width = "160px"                   //css styles
    image.src = book.url; //for each image book taking url
    li.appendChild(image)
    li.style.backgroundColor = book.alreadyRead ? "green" : "red"
    ul.appendChild(li)




  })







}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    //i have add some url prop
    url: "https://m.media-amazon.com/images/I/416Hql52NCL.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg"
  }
];

exerciseThree(books);
