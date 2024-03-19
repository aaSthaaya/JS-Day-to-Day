console.log("We can do this!");

//Revising Objects

// person = {
//     name: "Ankita Bhatta",
//     age: 23,
//     interests: ["Listening music", " Travelling."]
// }

//Iterating object using for in loop

// for(const key in person){
//     //console.log(key, ":", person[key]);
//     console.log(`${key} : ${person[key]}`);
// }

//Iterating object using Object.key

// console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// Computed properties

// const key1 = "object1";
// const key2 = "object2";

// const value1 = "val1";
// const value2 = "val2";

// const obj = {
//     object1: "val1",
//     object2: "val2"
// }

// const obj = {

//     [key1] : value1,
//     [key2] : value2
// }

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;


// console.log(obj);


//spread operator in array


const array1 = [34, 35, 36, 37];
const array2 = [38, 39, 32, 33];
const newArray = [...array1, ...array2];
console.log(newArray);

//spread operator in object

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "uniqueValue",
    key3: "value3",
    key4: "value4"
}
// const newObject = { ...obj2, ...obj1, key70 : "value70", key80 : "value80"};
// const newObject = {..."1242353456436"};
const newObject = { ..."qwjdweoifhwroigfhero" };

console.log(newObject);
console.log(Array.isArray(newObject));

//Array Destructuring

const colorArr = ["red", "blue", "green", "white", "black", "brown", "purple", "yellow", "indigo"];
const [first, second] = colorArr;
console.log(first, second);

//Object Destructuring

const game = {
    gameName: "Skating",
    ageRequired: "18 above",
    timeLimit: "2 hours"
};
const { gameName, timeLimit } = game;
console.log(gameName, ":", "For", timeLimit);

// swapping values of variables
const edibles = ["fruits", "drinks"];
let [positionOne, positionTwo] = edibles;
const temp = positionOne;

positionOne = positionTwo;
positionTwo = temp;

console.log(positionOne, positionTwo);

//Another example for Destructuring in object

const veges = {
    vegeName: "spinach",
    color: "green",
    amount: "onekg",
    available: "market",

};

let { vegeName, color, ...restProps } = veges;
console.log(vegeName, color, restProps);


//

const band = {
    bandName: "Blackpink",
    famousSong: "All",
    yearStarted: "2016",
    memberName: ["Jisoo", "Jennie", "Rose", "Lisa"]
};

let { bandName, memberName, ...restProp } = band;
console.log(bandName, memberName, restProp);


//Objects in Array.
//Very useful in real World.
//Syntax
// const arrName = [
//     {},
//     {},
//     {},
//     {}
// ]

const users = [
    { userId: 1, firstName: "Saili", gender: "female" },
    { userId: 2, firstName: "Sam", gender: "male" },
    { userId: 3, firstName: "Fai", gender: "male" },
    { userId: 4, firstName: "Lily", gender: "female" }
]
for (const user of users) {
    console.log(user);
}

//Nested Destructuring

// const chocolate = [
//     { type: 1, chocolateName: " DarkChocalate" },
//     { type: 2, chocolateName: " RubyChocalate" },
//     { type: 3, chocolateName: " MilkChocalate" },
//     { type: 4, chocolateName: " WhiteChocalate" }
// ]
// const [type1, type2, type3, type4] = chocolate;
// console.log(type1);


//Another Example for nested Destructuring

const people = [
    { userId: 1, firstName: "Aarash", gender: "Male" },
    { userId: 2, firstName: "Aarohi", gender: "Female" },
    { userId: 3, firstName: "Rush", gender: "XMale" },
]
// const [firstName] = people;
// console.log(firstName,gender);
// console.log(firstName);
const [user1, user2, user3] = people;
console.log(user1, user2, user3);




