//1. Change the text of a paragraph
// First, grab the paragraph using its ID or class
let myParagraph = document.getElementById("myText");
// Then, change its text content
myParagraph.textContent = "Hey! This is the new message.";
//2. Change the style of a paragraph
// Select the paragraph
let para = document.querySelector("p");
// Change its text color to red
para.style.color = "red";

//3. Add and remove list items
// Create a new list item
let newItem = document.createElement("li");
newItem.textContent = "I am a new item!";
// Add it to the existing list
document.getElementById("myList").appendChild(newItem);

//4. Display a list of names from an array
let names = ["Ana", "Luis", "Carlos", "Marta", "Sofía", "Juan", "Lucía", "Pedro", "Elena", "Tomás"];
let ul = document.createElement("ul");

names.forEach(name => {
  let li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
});

document.body.appendChild(ul);
// This creates a list and fills it with names from the array

//5. Count elements in an array
let numbers = [1, 2, 3, 4, 5, 6];
let count = numbers.length;

let p = document.createElement("p");
p.textContent = "The array has " + count + " elements.";
document.body.appendChild(p);
// Shows how many items are in the array


//6. Create a form using JavaScript
let form = document.createElement("form");

let label = document.createElement("label");
label.textContent = "Your name: ";
let input = document.createElement("input");
input.type = "text";

let button = document.createElement("button");
button.textContent = "Submit";

form.appendChild(label);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);
// Builds a basic form with JS


//7. Create a table from an array of names
let names = ["Ana", "Luis", "Carlos"];
let table = document.createElement("table");

names.forEach(name => {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.textContent = name;
  row.appendChild(cell);
  table.appendChild(row);
});

document.body.appendChild(table);
// Each name becomes a row in the table


//8. Display objects in a table
let array = [ /* your Rick and Morty characters */ ];
let table = document.createElement("table");

array.forEach(character => {
  let row = document.createElement("tr");
  for (let key in character) {
    let cell = document.createElement("td");
    cell.textContent = character[key];
    row.appendChild(cell);
  }
  table.appendChild(row);
});

document.body.appendChild(table);
// Each object becomes a row with multiple cells


//9. Remove list item on click
let items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("click", () => {
    item.remove();
  });
});
// Click an item and it disappears


//10. Update paragraph with keyboard input
let input = document.getElementById("textInput");
let paragraph = document.getElementById("output");

input.addEventListener("keyup", () => {
  paragraph.textContent = input.value;
});
// As you type, the paragraph updates


//11. Toggle paragraph visibility
let button = document.getElementById("toggleBtn");
let paragraph = document.getElementById("togglePara");

button.addEventListener("click", () => {
  paragraph.style.display = (paragraph.style.display === "none") ? "block" : "none";
});
// Click to hide or show the paragraph


//12. Change background color with dropdown
let select = document.getElementById("colorSelect");

select.addEventListener("change", () => {
  document.body.style.backgroundColor = select.value;
});
// Pick a color and the background changes


//13. Count button clicks
let button = document.getElementById("clickBtn");
let counter = 0;
let display = document.getElementById("clickCount");

button.addEventListener("click", () => {
  counter++;
  display.textContent = "Clicked " + counter + " times";
});
// Counts how many times the button is clicked

//14. Show input length in real time
let input = document.getElementById("textInput");
let lengthDisplay = document.getElementById("lengthPara");

input.addEventListener("input", () => {
  lengthDisplay.textContent = "Length: " + input.value.length;
});
// Shows how many characters you've typed

//15. Change image on hover
let img = document.getElementById("hoverImage");

img.addEventListener("mouseover", () => {
  img.src = "new-image.jpg";
});

img.addEventListener("mouseout", () => {
  img.src = "original-image.jpg";
});
// Hover to change the image, move away to restore it

//16. Add task to a to-do list
let input = document.getElementById("taskInput");
let button = document.getElementById("addTaskBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
});
// Adds a new task to the list when you click the button

//17. Count words in real time
let textarea = document.getElementById("wordArea");
let wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", () => {
  let words = textarea.value.trim().split(/\s+/);
  wordCount.textContent = "Words: " + (textarea.value.trim() ? words.length : 0);
});
// Counts words as you type

//18. Alert when input is completed
let input = document.getElementById("alertInput");

input.addEventListener("blur", () => {
  alert("You entered: " + input.value);
});
// When you leave the input field, it shows an alert

//19. Change style on double click
let items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("dblclick", () => {
    item.style.color = "blue";
    item.style.fontSize = "20px";
  });
});
// Double-click to change the look of the item

//20. Create dropdown from array
let options = ["Red", "Green", "Blue", "Yellow"];
let select = document.createElement("select");

options.forEach(color => {
  let option = document.createElement("option");
  option.value = color.toLowerCase();
  option.textContent = color;
  select.appendChild(option);
});

document.body.appendChild(select);
// Dropdown is filled with colors from the array
