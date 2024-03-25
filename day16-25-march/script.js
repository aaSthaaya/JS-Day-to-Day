console.log("This is not a game.");

var a = 5;
var b = 6;
var c = "I am a human.";

a += 2;
b += 6;
c += " Yup!";

console.log(a, b, c);



const add = 20 + 70;
const sub = 20 - 20;
const mul = 5 * 5;
const div = 20 / 3;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);


let x = 40;
x--;
console.log(x);

let remainder;
remainder = 16 % 5;
console.log(remainder);


let firstName = "Shar";
let lastName = "Tomb";
console.log(firstName, lastName);


let string = "This is kinda tricky \"cause\" we have \"quotation\" inside \"quotation\"."

let anotherString = 'This is another \'chapter\' "to" learn javascript in "more" detail.'

let detail = `This is simpler than the others and we \`cannot\` "deny" 'the' fact.`


let ourName = "Dinosaur";
let ourStr = "Our site name is" + " " + ourName + " " + "and it provides free education.";
console.log(ourStr);

let someAdjective = "worthwhile.";
let someString = "Learning coding is challenging and";
console.log(someString + " " + someAdjective);

let personName = "Jasmine Senchuwan";
personNameIndex = personName[4];
console.log(personName);


let info = "This is a mere information that we should not be relying on.";
// console.log(info.length-2);
let newInfo = info[info.length - 2];
console.log(newInfo);

let describ = "Hi I hope you are having a wonderful day.";
let newDescrib = describ[describ.length - 16];
console.log(newDescrib);


function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
    let result = "";
    result += "The" + " " + myAdj + " " + myNoun + " " + myVerb + " " + "in the garden so" + " " + myAdv + ", I was unable to catch it.";
    return result;
}

console.log(wordBlanks("cat", "little", "ran", "quickly"));
console.log(wordBlanks("BMW", "huge", "rode", "slowly"));

//Arrays

const oldArray = [20, 30, 40, 50, 70, 90];
const newArray = oldArray[4];
console.log(newArray);

let typeArray = [33, 44, 55, 66];
typeArray[0] = 22;
console.log(typeArray);


let arrayFirst = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[45, 55, 77], 55, 89, 90]];
let newFirstArray = arrayFirst[1][2];
console.log(newFirstArray);

// const names = ["Shirish", "Basanta", "Barsa", "Basanta"];
// const count = names.push(["Grishma", "Sharad", "Hemanta"]);
// console.log(count);
// console.log(names); 


const animals = ['Giraffe', ' Leopard', 'Cappibara', 'Rabbit'];

const count = animals.push('hyenas');
console.log(count);
console.log(animals);

const vegetable = ["Spinach", "Carrot", "Potato", "Raddish"];
const moreVeges = ["Cauliflower", "Beetroot"];

vegetable.push(...moreVeges);
console.log(vegetable);


const fruits = ["Mangoes", "Apple", "Grapes", "Kiwi"];
const total = fruits.pop();
console.log(fruits);

const sports = [["hockey,1"], ["baseball,2"], ["swimming,3"]];
const newSports = sports.pop();
console.log(sports);


//Functions

function myFunction() {
    console.log("Working on it.");
}
myFunction();

//Arguments

