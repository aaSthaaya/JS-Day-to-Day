
const num1 = 123;
const num2 = 456;
const sub = 1000 - num1;
document.write(sub);
console.log(sub);

const firstName = "Aastha";
const lastName = "Mishra";
document.write("<br>");
document.write(firstName + " " + lastName);
console.log(firstName + " " + lastName);

document.write("<br>");
let num4 = 45;
num4 *= 40;
document.write(num4);

document.write("<br>");
let marks = 79.88 + "%";

if (marks >= 90 + "%") {
    document.write("Congratulations, You are extraordinary.");
} else {
    document.write("Congratulations! You are as extraordinary as others, marks doesnot define your future.");
}

document.write("<br>");
let x = "68";
let y = 68;
if (x === y) {
    document.write("These are similar datas.");
}
else {
    document.write("These are different datas.");
}

function myfunc() {

    var choice = document.getElementById("choices").value;

    // alert(choice);

    switch (choice) {
        case "add": var a = 200;
            var b = 300;
            var sum = a + b;
            document.write("The sum of two numbers is : " + sum);
            break;


        case "sub": var a = 200;
            var b = 300;
            var sub = a - b;
            document.write("The subtraction of two numbers is : " + sub);
            break;


        case "mul": var a = 200;
            var b = 300;
            var mul = a * b;
            document.write("The multiplication of two numbers is : " + mul);
            break;


        case "div": var a = 200;
            var b = 300;
            var div = a / b;
            document.write("The division of two numbers is : " + div);
            break;

        default: alert("Not a valid input");
    }

}


