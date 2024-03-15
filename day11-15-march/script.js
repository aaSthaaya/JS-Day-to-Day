
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

const a = 0;
let finalResult = -1;
if (finalResult >= a) {
    console.log("Positive Number.");
}
else {
    console.log("Negative number");
}

//if-elseif

let tempInDegree = +prompt("Enter the temperature in celsius.");

if (tempInDegree < 0) {
    console.log("It's freaking cold outside.")
}
else if (tempInDegree < 20) {
    console.log("It's cold outside.")
}
else if (tempInDegree < 30) {
    console.log("It's mild outside.")
}
else if (tempInDegree < 40) {
    console.log("It's hot outside.")
}
else if (tempInDegree < 50) {
    console.log("It's boiling hot outside.")
}
else {
    console.log("Don't bother, You might be living in the sun.");
}

//Switch Statement

//7 days a week using switch conditional statement

const day = 7;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day.");
}

//Following is the example of a single operation sequential case statement, where four different values perform exactly the same.

const animal = "Dodo Duck";

switch (animal) {
    case "Penguin":
    case "Dog":
    case "Bear":
    case "Rabbit":
    case "Giraffe":
    case "Cow":
    case "Cat":
        console.log("The given name of the animal has not gone extinct.");
        break;
    case "Dinosaur":
    case "Mammoth":
    case "Dodo Duck":
    default:
        console.log("The given name of the animal has not gone extinct.");
}


//Loop

//While Loop

//DRY(Don't Repeat Yourself)

// const x = 0;
// while (x < 2) {
//     x++;
//     console.log(x);
// }

let x = 0;
while (x <= 5) {

    console.log(x);
    x++;
}
console.log(`The current value of x is ${x}`);
console.log("Hiii");


let c = 0;
let total = 0;
while (c <= 50) {
    total = total + c;
    c++;
}
console.log(total);

//alternative for the above problem(Mathematical way)

const num = 50;
const numTotal = (num * (num + 1)) / 2;
console.log(numTotal);


for (let z = 0; z <= 9; z++) {
    console.log(z);
}

let result = 0;
let num1 = 100;
for (let d = 1; d <= num1; d++) {
    result += d;
}
console.log(result);

