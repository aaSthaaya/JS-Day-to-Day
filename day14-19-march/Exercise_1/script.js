//String Indexing and Template Strings:
// Write a program that takes a user's name as input and greets them with a personalized message using template literals.

// Ask the user for their name
const personName = prompt("Enter your name:");

// Check if the name is null or undefined
if (personName) {
    // Check if the name is an empty string
    if (personName.trim() === '') {
        console.log("Please enter your name.");
    } else {
        // Greet the user with a personalized message using template literals
        console.log(`Hello, ${personName}! Welcome to our website.`);
    }
} else {
    console.log("Please enter a valid name.");
}

const string = "     The trim will help to remove the white spaces from left and right sides.        "
console.log(string.trim());


//to check wheather given number is even or odd.

const i = 20;
const j = 2;
if (i % j === 0) {
    console.log("Given number is even number.");
} else {
    console.log("Given number is odd number.");
}

//to display 12months a year

// const year = prompt("Enter the month");
// switch (year) {
//     case "January": console.log("The month is January");
//         break;
//     case "Feburary": console.log("The month is Feburary");
//         break;
//     case "March": console.log("The month is March");
//         break;
//     case "April": console.log("The month is April");
//         break;
//     case "May": console.log("The month is May");
//         break;
//     case "June": console.log("The month is June");
//         break;
//     case "July": console.log("The month is July");
//         break;
//     case "August": console.log("The month is August");
//         break;
//     case "September": console.log("The month is September");
//         break;
//     case "October": console.log("The month is October");
//         break;
//     case "November": console.log("The month November");
//         break;
//     case "December": console.log("The month December");
//         break;
//     default: console.log("Invalid year");
// }

// Ask the user to enter a month
const month = prompt("Enter a month (e.g., January, February, etc.):");

// Initialize variables to store the number of days in the month
let daysInMonth;

// Use a switch statement to determine the number of days based on the month
switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysInMonth = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInMonth = 30;
        break;
    case "february":
        daysInMonth = 28; // Assuming non-leap year
        break;
    default:
        daysInMonth = "Invalid month";
}

// Display the number of days in the month
console.log(`The number of days in ${month} is: ${daysInMonth}`);

//Write a JS program that takes an array of numbers as input and calculates the average of all the numbers.

//Incorrect
// const arrayFirst = [12, 13, 14];
// const arraySecond = [122, 133, 144];

// newArray = [(arrayFirst + arraySecond) / 2];
// console.log(`The average of given arrays are ${newArray}`);

//define the array first 
const totalNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//Initialize the variables to store the sum and the average
let sum = 0;
let average;

//Loop through the array to calculate the sum of all the number

for(let i=0; i<=length.totalNumbers;i++)










