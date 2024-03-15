
console.log("Hiee There!");

const tagline = "Resources for developers by developer";
console.log(tagline.indexOf("by"));

console.log(tagline.slice(14, 23));

const place = "countryside";
const newPlace = place.slice(7, 11);
console.log(newPlace);



//converting string to number
let subStr = +"23";
console.log(typeof subStr);


//converting number to string
let age = 21;
newAge = "" + age;
console.log(typeof newAge);

//Boolean Type
console.log(typeof false);

//Undefined Type, needs to be declared first.
console.log(typeof theundefinedname);


let a = null;
console.log(typeof a);
let s;
console.log(typeof s);

const someData = 999;
console.log(typeof someData + " Wisen"); //number Wisen
console.log(typeof (someData + "Wisen")); //string


let firstName = "Damsel";
firstName = Number(firstName);
// firstName = String(firstName);
console.log(typeof firstName);

//adding two strings
const stringFirst = "Albert";
const stringSecond = "Einstien";
const newString = stringFirst + " " + stringSecond;
console.log(newString);

//converting string to number and than adding them
const strFirst = "123";
const strSecond = "456";
const newStr = +strFirst + +strSecond;
console.log(newStr);

//Without the help of template literals (template strings)
const attendeName = "Sarah";
const ageOfAttende = 24;
console.log("The name of the attende is" + " " + attendeName + " " + "and her age is" + " " + ageOfAttende + ".");

//With the help of template strings
// `Hi` - `` These are called backticks.

const nameFirst = "Yaky";
const ageOfHer = "11";
const aboutHer = `Her name is ${nameFirst} and she is ${ageOfHer} years old.`;
console.log(aboutHer);


//undefined, null, biginit

const o = 90;
const p = 100;
const sum = `The sum is ${o + p} but not the ${2 * (o + p)}`;
console.log(sum);

const person = "Gen-Z";
console.log(typeof person, person);

console.log(Number.MAX_SAFE_INTEGER);

const numberFirst = BigInt(4287678662572682585689);
const numberSecond = 454578678678n;
console.log(numberFirst + numberSecond);

const num_1 = 34;
const num_2 = 24;
console.log(num_1 < num_2);
console.log(num_1 != num_2);
console.log(num_1 == num_2);
console.log(num_1 === num_2);

const num_3 = "22";
const num_4 = 22;
console.log(num_3 === num_4); // === - similar data value and similar data type.

// const personAge = 49;
// if (personAge < 50) {
//     console.log("He/She can play jump KTM.");

// }
// else {
//     console.log("He/She cannot play jump KTM.");
// }

const personAge = 55;
let newPersonAge = personAge <= 50 ? "Can play jump KTM." : "Cannot play jump KTM.";
console.log(newPersonAge);


// const num = 22;
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

const num = 22;
let numberr = num % 2 === 0 ? "Even" : "Odd";
console.log(numberr);


//Ternary Operator

// const agE = 14;
// let drink;
// if (agE <= 15) {
//     console.log("Drink Coffee")
// }
// else {
//     console.log("Drink Milk");
// }

let agE = 10;
let drink = agE >= 15 ? "Coffee" : "Milk";
console.log(drink);














