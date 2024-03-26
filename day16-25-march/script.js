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

function myMultiplications(a, b) { //(a,b) -> parameters
    return a * b;
}
const answer = myMultiplications(33, 55); // (33,55) -> arguments
console.log(answer);

function mySubtraction(s, t) {
    return s - t;
}
const subt = mySubtraction(33, 22);
console.log(subt);




function myAddition(s, t) {
    return s + t;
}
const result = myAddition(2, 3);
console.log(result);

//Global Scopes and Functions

var firstPersonName = "Sasha";
function stringName() {
    console.log(firstPersonName);
}
stringName();

// function findLargest(numbers){
//     return Math.max(...numbers);
// }
// console.log(findLargest([2, 5, 7, 9, 60, 4, 1]));

function smallestNumber(number) {
    return Math.min(...number);
}
console.log(smallestNumber([1, 3, 7, 9, 34, 56, 0, -5]));

let y = 12;
let age = (y <= 16) ? "Cannot vote" : "Can Vote"; //ternary operator : variable = (condition) ? 'value1' : 'value2';
console.log(age);

function minusNumber(num) {
    return num - 50;
}
console.log(minusNumber(45));

let changedNumber = 8;

function changableNumber(numb) {
    return (numb + 5) / 4;
}
changedNumber = changableNumber(10);
console.log(changedNumber);

//Stand In Line or We can say nextInLine

// const testArray = [11, 22, 33, 44, 55, 66];
// const testItem = [88, 99];
// const removedItem = nextInLine(testArray, testItem);
// console.log(testArray);
// console.log(removedItem);

// const testArr = [1, 2, 3, 4, 5];
// const newItem = 10;
// const removedItem = nextInLine(testArr, newItem);

// console.log("Before:", testArr); // [2, 3, 4, 5, 10]
// console.log("After:", testArr); // [2, 3, 4, 5]
// console.log("Removed item:", removedItem); // 1
// function nextInLine(arr, item) {
//     return item;
// }
// let arr = [4, 5, 6];
// console.log(nextInLine(arr, 7));


function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After:" + JSON.stringify(testArr));



function testNum(a) {
    let result;
    if (a > 0) {
        result = "Positive Number."
    } else {
        result = "Negative Number."
    }
    return result;
}
console.log(testNum(-8));




function thisFunction(isItTrue) {
    if (isItTrue) {
        return "It's true."
    }

    return "No, It's not true."
}

console.log(thisFunction(false));

function testEqual(val) {
    if (val == 12) {
        return "Equal!";

    }
    return "Not Equal!";
}
console.log(testEqual(13));


function testStrictEqual(num2) {
    if (num2 !== 10) {
        return "The new number is not equal to given existing number."
    }
    return "The new number is equal to given existing number."
}
console.log(testStrictEqual(10));

//And, Or Operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 20) {
        return "Yup, The answer is correct.";
    }
    return "Nope, The answer is incorrect.";
}
console.log(testLogicalAnd(25));


//Chaining If..Else Statement

function testSize(numberFirst) {
    if (numberFirst < 5) {
        return "Tiny.";
    } else if (numberFirst < 10) {
        return "Small.";
    } else if (numberFirst < 15) {
        return "Medium.";
    } else if (numberFirst < 20) {
        return "Large.";
    } else if (numberFirst < 25) {
        return "Huge.";
    }
}
console.log(testSize(22));



