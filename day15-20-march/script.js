//Switch Conditional statement
const foo = 3;
let output = "Output: ";
switch (foo) {
    case 0:
        output += "So ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output += "Your ";
    case 3:
        output += "Name";
    case 4:
        output += "?";
        console.log(output);
        break;
    case 5:
        output += "!";
        console.log(output);
        break;
    default:
        console.log("Please pick a number from 0 to 5!");
}


//Functions
//Example1
function happyBirthdaySong() {
    console.log("Happy Birthday To You.");
}
happyBirthdaySong();

//Example2
function factorialOfNumbers() {
    console.log((20 - 70) * 77 / 4);
}
factorialOfNumbers();

//Example3
function sumOfNumbers() {
    return (3 + 3);
}
// console.log(sumOfNumbers());
const returnedValue = sumOfNumbers();
console.log(returnedValue);

//Example4

function sumOfTwoNumbers(number1, number2) {
    return number1 + number2;
}
const addedValue = sumOfTwoNumbers(33, 44);
console.log(addedValue);


//Example to find modulo of a number

function moduloOfANumber(num1, num2) {
    return num1 % num2;

}
const remainder = moduloOfANumber(55, 7);
console.log(remainder);

//Example to find whether the given number is even or not.

// function isEven(givenNumber) {
//     if (givenNumber % 2 === 0) {
//         return true;
//     }
//         return false;
//     }

// const finalValue = isEven(70);
// console.log(finalValue);
// console.log(isEven(41));

//
// function divNumber(x,y){
//     if(x/y === 5){
//         return true;
//     }
//     return false;
// }

// const finalAns = divNumber(30,6);
// console.log(finalAns);

//
// function twoNumbers(number6, number7) {
//     if (number6 + number7 === 10) {
//         return true;
//     }
//     return false;
// }
// const total = twoNumbers(5, 5);
// console.log(total);
//
// function oddNumber(number3) {
//     return number3 % 2 !== 0;
// }
// console.log(oddNumber(5));

//

function firstChar(anyString) {
    return anyString[3];
}
console.log(firstChar("elephant"));


// function myFunction(string){
//     console.log("This is i me and myself.");

// }
// myFunction();




const myFunction = function () {
    console.log("Hii There, Welcome to my Blog.");
}

myFunction();

// function 
// input : array, target (number)
// output: index of target if target present in array


// function findTarget(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [4, 6, 8, 93]
// const ans = findTarget(myArray, 93);
// console.log(ans);


//With the help of function expression the above program would look like:

const findTarget = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [4, 6, 8, 99];
const ans = findTarget(myArray, 8);
console.log(ans);

// function sumOfThreeNumbers(Number1, Number2, Number3) {
//     return Number1 + Number2 + Number3;
// }
// const sum = sumOfThreeNumbers(70, 80, 90);
// console.log(sum);

//Adding Function expression to above program

const sumOfThreeNumbers = function (Number1, Number2, Number3) {
    return Number1 + Number2 + Number3;
}
const sum = sumOfThreeNumbers(30, 33, 34);
console.log(sum);

//const functionName = function(){
// return ;
//}
//const newVariableName = functionName(calculations);
//console.log(newVariableName);



//Arrow Function

const birthdayMessage = () => {
    console.log("Light travels faster than sound. This is why some people appear bright until you hear them speak.");
}
birthdayMessage();

const vegesPure = () => {
    console.log()
}