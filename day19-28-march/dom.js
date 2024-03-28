console.log("hi")

//Create a new button element. Give it a text "click me",background color of red and text color of white.

//Insert the button as the first element inside the body tag.


// let newBtn = document.createElement("Button");
// newBtn.innerText = "Click Here";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "#fff";

// document.body.prepend(newBtn);


let newBtn = document.createElement("button");
newBtn.innerText = "Submit";
newBtn.style.backgroundColor = "pink";
newBtn.style.color = "green";

document.body.appendChild(newBtn);


//Create a <p> tag in html, give it a class and some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
//Notice how we overwrite the class name when you add a new class . Solve this problem using classList.


let para = document.querySelector("p");
// console.log(para);
// para[0].innerText = "This is new";
// para[1].innerText = "This is second new.";

para.getAttribute("class");
// para.setAttribute("class","newClass");


// Using classList
para.classList.add("newClass");

para.classList.remove("newClass");


