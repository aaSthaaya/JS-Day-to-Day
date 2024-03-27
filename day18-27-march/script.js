console.log("Hiiiii! On.");

// function myFunction(a, b) {
//     sum = a + b;
//     return sum;
// }
// let s = myFunction(12, 11);
// console.log(s);

//Arrow function

const arrowMul = (x, y, z) => {
    return x * y * z;
}
const mul = arrowMul(2, 3, 4);
console.log(mul);

//to count variable in the given string.
//By Normal function
// function countVowel(str) {
//     count = 0;
//     for (const char of str) {
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// const c = countVowel("Senorita");
// console.log(c);

//By Arrow function

const countVowel = (str) => {
    count = 0;
    for (const char of str) {
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }

    }
    return count;
}
const c = countVowel("Senorita");
console.log(c);
// console.log(countVowel("Developer"));

//forEach Loop in Arrays

//forEach Loop in Array

const arr = [12, 13, 14, 151, 16, 18, 322];
arr.forEach((val) => {
    console.log(val);
})

//

const cities = ["Mahendranagar", "Atariya", "Dhangadi", "Kohalpur", "Gulariya"];
cities.forEach((value, index, cities) => {
    console.log(value.toUpperCase(), index, cities);
})

//
// const nums = [2, 3, 4, 5, 6];
// nums.forEach((sqr) => {
//     console.log(sqr ** 2);
// })

//

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// items.forEach((item) => {
//     copyItems.push(item);
// });

// map in Array

const values = [10, 20, 30, 40, 50];
let newArrr = values.map((val) => {
    return val ** 2;
})
console.log(newArrr);

// const array1 = [1, 9, 16, 32, 27];

// const newArr = array1.map((x) => {
//      x*2;
// });
// console.log(newArr);
//

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
    { key: 4, value: 40 }

]
const newFormattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(newFormattedArray);

//filter in Array

const totalNumbers = [1, 2, 3, 4, 5, 6, 7, 34, 56, 55, 77, 88, 98, 10];
const evenNumbers = totalNumbers.filter((e) => {
    return e > 7;
})
console.log(evenNumbers);

//
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
console.log(result);


//

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(arr, query) {
    return arr.filter((el) =>
        el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, "ap"));
console.log(filterItems(fruits, "an"));


//reduce in Array
//to find average
const val1 = [1, 4, 7, 9, 99];

const newVal = val1.reduce((prev, curr) => {
    return prev + curr;
});

console.log(newVal);

//

const nums1 = [12, 34, 67, 89, 300, 120];
const newNums = nums1.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log(newNums);

//We are given array of marks of students. Filter out the marks of student that scored above 80+.

const marksOfStudents = [44, 54, 88, 90, 76, 82, 94, 70, 66, 64, 88, 89, 94, 96, 55, 54, 90];
const topMarks = marksOfStudents.filter((marks) => {

    return marks >= 90;
})
console.log(topMarks);

//Take a number n as input from a user. Create an array of numbers  from 1 to n.

const n = prompt("Enter the number: ");
const arra = [];
for (let i = 1; i <= n; i++) {
    arra[i - 1] = i;
}
console.log(arra);

//reduce method to sum all given number in an array

const sumArray = [70, 70, 80, 99, 56, 4, 56];

const newArraySum = sumArray.reduce((prev, curr) => {
    return prev + curr;
});
console.log(newArraySum);


//reduce method to calculate product of all numbers.

const productArr = [2, 5, 6, 7];
const productOfArray = productArr.reduce((prev, curr) => {
    return prev * curr;
});
console.log(productOfArray);

