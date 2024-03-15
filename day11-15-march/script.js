
console.log("Hii There..Let's get this.");

// const age = 17;
// let drink;
// if (age <= 18) {
//     drink = "Milk";
// }
// else {
//     drink = "Coffee";
// }
// console.log(drink);


const age = 17;
let drink = age >= 18 ? "Drink Coffee" : "Drink Milk";
console.log(drink);

const ageOfPerson = 21;
const beverage = ageOfPerson >= 21 ? "Can have hard drinks" : "Cannot have harad drinks";
console.log(beverage);

const firstName = "Gelileo";
const ageOfGelileo = 38;

//And (&&) operator

// if(firstName[0] === "G" && ageOfGelileo >= 30){
//     console.log("You are free.");
// }
// else{
//     console.log("You are not free.");
// }

// console.log(Number.MAX_SAFE_INTEGER);

//Or (||) operator

if (firstName === "g" || ageOfGelileo >= 30) {
    console.log("True");
}
else {
    console.log("False");
}



//Nested If else


const winningNumber = 20;
const userGuess = +prompt("Guess the number!");

if (userGuess === 20) {
    console.log("Congratulations, Your guess was correct!");
}
else {

if (userGuess < 20) {
    console.log("Your guess was lower than the actual number.");

} else {
    console.log("Your guess was more than the actual number.");
}
}
















