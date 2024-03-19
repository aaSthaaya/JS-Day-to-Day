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
