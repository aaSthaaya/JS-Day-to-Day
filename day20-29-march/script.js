
console.log("We can do this!!");

//DOM revision session.

let para = document.querySelector("#para");
console.log(para);
para.innerText = "This is JS.";

let parag = document.querySelectorAll(".parag");
console.log(parag);
parag[1].innerText = "This is not a joke.";

//Events

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("Button was clicked.");
//     let a=9;
//     a++;
//     console.log(a);

// }

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("This button has been clicked.");
    let x = 11;
    x++;
    console.log(x);
    alert("Have a wonderful weekend.");
}


let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("This is seen when we click twice.");

}

let box = document.querySelector("#box");
box.onmouseover = () => {
    console.log("Hi how are you?");
}


