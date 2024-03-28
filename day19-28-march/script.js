console.log("Hey There...Let's do this.");


//DOM -Document Object Model.


//Create a H2 heading element with text - "Hello JavaScript" . Append something to this text using JS.

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +" "+ "We have many exciting things on our way."

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = `${h2.innerText} This is the best programming language ever.`


//Create 3 divs with common class name - "box". Access them and add some unique text to each of them.

// let box = document.querySelectorAll(".box");

// console.log(box);
// box.innerHTML = `${box.innerHTML} This is the first box in the webpage.`

// box[0].innerText = "This is first box.";
// box[1].innerText = "This is another box.";
// box[2].innerText = "This is the third box.";

let divBoxes = document.querySelectorAll(".box");

// idx = 1;
// for (box of divBoxes) {
//     box.innerText = `This is box number ${idx}.`;
//     idx++;
// }
idx = 1;
for (const box of divBoxes) {
    box.innerText = `This box's number is assigned as ${idx}.`;
    idx++;
}



// divBoxes[0].innerText = "First Box.";
// divBoxes[1].innerText = "Second Box.";
// divBoxes[2].innerText = "Third box.";


// DOM Manipulation

//Attributes

let div = document.querySelector("#nav-bar");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let mainNav = document.querySelector("#main-nav");

let identity = mainNav.getAttribute("id");
console.log(identity);

let newName = mainNav.getAttribute("name");
console.log(newName);


//Alternative

let paragraph = document.querySelector("p");
// console.log(paragraph.getAttribute("class"));

console.log(paragraph.setAttribute("class", "aside-left"));

paragraph.style.backgroundColor = "purple";
paragraph.style.color = "#fff";
paragraph.style.fontSize = "2em";


paragraph.innerText = " This is replaced paragraph.";


// let newBtn = document.querySelector("button");
// newBtn.innerText = "Click Here";
// console.log(newBtn);

// let newBox = document.querySelector("new-box");
// document.querySelector("button").prepend(newBtn);

// newBox.append(newBtn);


//Added the new heading at the top of the body.
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hiii, I am new.</i>"

document.querySelector("body").prepend(newHeading);




//created new button and added at the bottom of the body.
var button = document.createElement("button");
button.innerText = "Click Me";

    document.body.append(button);



    