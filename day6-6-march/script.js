
let a = 890;
a++;
let numb = a;
document.write("The incremented number is " + numb);

document.write("<br>");
var x = 40;
var y = 567;
var z = 734;
const r = x + y / z;
document.write(r);

console.log(r);

document.write("<br>");
let s = "Benz" + 75 + 76;
document.write(s);


document.write("<br>");
const cars = ["Royace", " Volvo", " BMW"];
document.write(cars);


document.write("<br>");
function myFunction(a1, a2) {
    return a1 * a2;
}


let result = myFunction(4, 3);
document.write(result);

// let y = myFunction(33, 44);
// document.getElementById("demo").innerHTML = y;

// function myFunction(s, t) {
//     return s % t;
// }

document.write("<br>");

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
let value = toCelsius(97);
document.getElementById("demo2").innerHTML = value;



