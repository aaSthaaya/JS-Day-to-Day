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
const nums = [2, 3, 4, 5, 6];
nums.forEach((sqr) => {
    console.log(sqr ** 2);
})

//

const items = ["item1", "item2", "item3"];
const copyItems = [];

items.forEach((item) => {
    copyItems.push(item);
});

// map in Array

const values = [10, 20, 30, 40, 50];
let newArr = values.map((val) => {
    return val;
})
console.log(newArr);