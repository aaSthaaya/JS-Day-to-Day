

let firstName, lastname;
firstName = "Rosy";
lastname = "Camel";
document.getElementById("demo1").innerHTML = firstName;
document.getElementById("demo2").innerHTML = lastname;

let x, y;
x = 7;
y = x - 7;
document.getElementById("demo3").innerHTML = y;


document.getElementById("myH").innerHTML = "MAIN HEADING";
document.getElementById("myP").innerHTML = "paragraph";

const k = 4;
const l = 5;
const m = k * l;
document.getElementById("demo4").innerHTML = "The value of m is " + m;



const price_acerlaptop = 87000;
const price_delllaptop = 92000;
let total_price = price_acerlaptop + price_delllaptop;
document.getElementById("demo5").innerHTML = "The total price of the laptop is: " + total_price;


const pi = 3.1415;
let person = "John Doe";
let message = "Hi, Yup I am unknown for your information.";
document.getElementById("demo6").innerHTML = pi + "<br>" + person + "<br>" + message;

var p = 3777;
{
    var p = 873645;
}
document.getElementById("demo7").innerHTML = p;
// We can redeclare using var as it is global scope
let r = 5634;
{
    let r = 84530;
}
document.getElementById("demo7").innerHTML = r;
// We cannot redeclare using let or const keywords


let z = 39204;
let q = (200 * 5) - z;
document.getElementById("demo8").innerHTML = q;

{
    let x = 88;
    x += 7;
    document.getElementById("demo9").innerHTML = x;

}

document.getElementById("header").innerHTML = "This is Another Header Topic";
document.getElementById("header_p").innerHTML = "hi, this is kinda fun.";

console.log("helowrrrrrrrrrr");
console.log(9);

let text_first = "Y";
let text_second = "Z";
let result = text_first < text_second;
document.getElementById("demo10").innerHTML = "Is Y less than Z? " + result;