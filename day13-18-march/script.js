
console.log('Hii There, Change should be constant.');

//for loop in array

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// let fruits = ['Pineapple', 'Avacardo', 'Kiwi', 'Litchi', 'Apple'];
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]); 

let fruits = ['Pineapple', 'Avocardo', 'Kiwi', 'Litchi', 'Apple'];
let fruits1 = [];
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i].toUpperCase());
    fruits1.push(fruits[i].toUpperCase());
}
console.log(fruits1);

//using const for creating array
//Use const for Reference data type

//Using while loop in array

const games = ['Swimming', 'Yoyo', 'Skying', 'UFC', 'NFC'];
const games2 = [];
let i = 0;
while (i < games.length) {
    // console.log(games[i].toUpperCase());
    games2.push(games[i].toUpperCase());
    i++;

}
console.log(games2);

//For of loop in Javascript

const season = ['Summer', 'Autumn', 'Winter', 'Spring'];
const seasons = [];

for (let list of season) {
    seasons.push(list.toUpperCase());
}
console.log(seasons);

//For in loop in Javascript

const emotions = ['Empathy', 'Sympathy', 'Apathy'];
const emotions1 = [];
for (let feels in emotions) {
    // console.log(emotions[feels]);
    emotions1.push(emotions[feels].toUpperCase());
}
console.log(emotions1);

//Here's another example of for of loop and for in loop

const myArray = [1, 2, 3, 4, 5];

//for in loop

for (const key in myArray) {
    console.log(`Index : ${key}, Value : ${myArray[key]}`);
}

for (const value of myArray) {
    console.log(`Value : ${value}`);
}

//example

const iterable = [10, 20, 30];
for(let value of iterable) {
    value /= 2;
console.log(value);
}

//Array Destructing - helps to extract values from array and assign them to individual variable.

//Without array destructuring
// const totalArray = ['value_1', 'value_2'];
// let var1 = totalArray[0];
// let var2 = totalArray[1];
// console.log('The first variable is :', var1);
// console.log('The second variable is :', var2);

//With array destructuring

const totalArray = ['valueOne', 'valueTwo', 'valueThree', 'valueFour'];
[var1, , var2, ...newArray] = totalArray;
// let newArray = totalArray.slice(2);
console.log(`Value is ${var1}.`);
console.log(`Value is ${var2}.`);
console.log(newArray);

