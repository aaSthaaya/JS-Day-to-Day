
console.log("Hie again, we can do this!");

//Array

const fruits = ["Mangoes", "Apples", "Banana", "Litchi", "Pomegranate"];
console.log(fruits[0]);

let tShirts = ["Crop", "Over-Sized", "Plain", "Florist", "Silk"];
console.log(tShirts);
tShirts[3] = "Black Over-Sized";
console.log(typeof tShirts, tShirts);
console.log(Array.isArray(tShirts));

let num = 24;
console.log(Array.isArray(num));


// Array Methods
//Push Pop Method

//push

const eyeColor = ["Brown", "Blue", "Red", "Black", "Green"];
console.log(eyeColor);
eyeColor.push("Grey");
console.log(eyeColor);

//pop

const hairColor = ["Brown", "Blue", "Red", "Black", "Green"];
console.log(hairColor);
let poppedHairColor = hairColor.pop();
console.log(hairColor);
console.log(`The popped haircolor is ${poppedHairColor}.`);

//Array.push()_Example

const animals = ["Cow", "Buffalo", "Sheep", "Goat", "Hen", "Dog"];
// const count = animals.push("Pigs", "Gorilla", "Chiuwawa");
// console.log(count);
console.log(animals);

animals.push('Ape', 'Fox', 'Bear');
console.log(animals);

const sports = ['Football', 'Badminton', 'Rugby', 'Cricket'];
const total = sports.push('Swimming', 'Relay');
console.log(total);
console.log(sports);

//Here is a simple example demonstrating the use of `count` as a counter variable.

let count = 0; //initialize the counter
const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    count++; //increment the counter
    console.log(`The processing element ${myArray[i]} with count ${count}.`);
}
console.log(`The final count is ${count}.`);

//Unshift Method

// const vegetables = ['Potato', 'Tomato', 'Zuccinni', 'Mushroom', 'Cauliflower'];
// overallVegetables = vegetables.unshift('Chilly', 'Spinach');
// console.log(`The total amount of vegetables are ${overallVegetables}.`);
// console.log(vegetables);

//Shift Method

const vegetables = ['Potato', 'Tomato', 'Zuccinni', 'Mushroom', 'Cauliflower'];
overallVegetables = vegetables.shift();
console.log(vegetables);


//Primitive Data Type

let num1 = 20;
let num2 = num1;
num1 = 40;
console.log(num1);
console.log(num2);

//Reference Data Type

let array1 = ['item1', 'item2'];
let array2 = array1;
console.log('array1', array1);
console.log('array2', array2);
array1.push('item3');
console.log('After pushing element to array1, we get:');
console.log('array1', array1);
console.log('array2', array2);

//Cloning an Array using slice(), concate and spread operator[...firstArrayName]

//Two ways to clone an array i.e
//one by using the slice() method.

let array3 = ['item4', 'item5'];
// let array4 = array3.slice(0);
// array3.push('item6');
// console.log(array3===array4);
// console.log(array3);
// console.log(array4);

//another way is by adding or concatenating empty array with array-first i.e;

// let array4 = [].concat(array3);
// array3.push('item6');
// console.log(array3 === array4);
// console.log(array3);
// console.log(array4);


//by using spread operator

let array4 = [...array3];
array3.push('item6');
console.log(array3 === array4);
console.log(array3);
console.log(array4);

// let array5 = ['a1', 'a2', 'a3', 'a4', 'a5'];
// let array6 = array5.slice(0).concat(['a7','a8']);
// array6.push('a6');
// console.log(array5);
// console.log(array6);

let array5 = ['a1', 'a2', 'a3', 'a4', 'a5'];
 let array6 =[...array5,'a6', 'a7', 'a8'];
// array6.push('a6');
 console.log(array5);
 console.log(array6);

 