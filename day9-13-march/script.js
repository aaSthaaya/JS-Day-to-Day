
console.log("Hello There!!");

let lastName = "  Gallileo     ";
console.log(lastName.length); //length before trimming
lastName = lastName.trim();  //unnecessary length got trimmed
console.log(lastName); //trimmed string 
console.log(lastName.length); //trimmed actual length of the string


let city = "    Kathmandu    ";
console.log(city.length);
city = city.trim();
console.log(city);
console.log(city.length);



let text = "  A BC  DEF GH I JK LM N OPO Q RS TUV W X Y Z";
// let length = text.length;  
console.log(text.length);

let grade = " A B C D E F"

console.log(grade.at(-1)); //how at() works

console.log(grade.charAt(7));  //how charAt() works

console.log(grade.charCodeAt(1)); //how charCodeAt() works

console.log(grade[1]); //or we can directly use bracked notation [] that returns an indexed element from a string.

const fruits = "Banana, Grapes, Litchi, Apple, Kiwi, Avocardo";
// console.log(fruits);

// console.log(fruits.trim());

console.log(fruits.length);

console.log(fruits.slice(8, 22)); //slice(start,end)

console.log(fruits.substring(31, 45)); //substring(start,end)

console.log(fruits.substr(23, 6)); // substr(start,length)

console.log(fruits.substr(-8)); //if the first parameter is negative, the position counts from the end of the string.

console.log(fruits.substring(0, 6));

const country = "The USA is the richest country in the world."
console.log(country.toUpperCase());

console.log(country.toLowerCase());

function myFunction() {

    let text = document.getElementById('demo1').innerHTML;
    document.getElementById('demo1').innerHTML = text.toUpperCase();

    console.log(text.toLowerCase());
    console.log(text.toUpperCase());
}


const textFirst = "Gorkha";
const textSecond = "Patan";
const textThird = textFirst.concat(" " + textSecond); //concat string method joins two or more strings.

console.log(textThird);

let place = "  Huwai  ";
console.log(place.trimStart());
console.log(place.trimEnd());

let continent = 7;
let earth = continent.toString(); //if the variable is not string we need to convert it to the string like we did in this example. It is important to see the program we are writing are browser supportive or not.
document.write(earth.padStart(4, "6"));

console.log(earth.padStart(4, "6"));

let newWord = "Euphoric";
newWord = newWord.repeat(2);
console.log(newWord);

let resto = "Hyatt";
console.log(resto.replace("Hyatt", "Mystic"));


let phrase = "I like Dogs so much that i always have had more than 5 dogs with me since my childhood. Dogs are really cute and it is safe to have dogs around. Dogs are more reliable than people.";
phrase = phrase.replaceAll("Dogs", "Cats");
phrase = phrase.replaceAll("dogs", "cats");

console.log(phrase);


let area = "BackStreet_02 trunk garden";
console.log(area.split(""));



