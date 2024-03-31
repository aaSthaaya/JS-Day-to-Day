console.log("Hii");


const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("This is shown only after clicking the mouse.- First");
})

btn1.addEventListener("click", () => {
    console.log("This is shown in the next line.- Second");
})


const third = (() => {
    console.log("This is shown in the next line.- Third");
})
btn1.addEventListener("click", third);

btn1.removeEventListener("click", third);


btn1.addEventListener("click", () => {
    console.log("This is shown in the next line.- Fourth");
})
btn1.removeEventListener("click", () => {
    console.log("This is shown in the next line.- Third");
})

//Create a toggle button that changes the screen to drak-mode when clicked and light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "#000";
        body.classList.add("light");
        body.classList.remove("dark");
    } else {
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "#fff";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    console.log(currMode);

});



