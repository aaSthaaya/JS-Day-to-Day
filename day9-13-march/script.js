
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

