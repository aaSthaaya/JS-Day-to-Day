
var x = 10;
while (x <= 50) {
    document.write(x);
    x++;
    document.write("<br>");

}
document.write("<br>");
let y = 51;
while (y <= 70) {
    document.write(y);
    y++;
    document.write("<br>");

}
document.write("<br>");
let i = 16;
let j = 1;
while (i <= 160) {
    document.write("16" + "*" + j + "=" + i);
    i = i + 16;
    j++;
    document.write("<br>");

}

document.write("<br>");


let s = 32;
let t = 1;
while (s <= 320) {
    document.write("32" + "*" + t + "=" + s);
    // document.getElementById("demo").innerHTML = "32" + "*" + t + "=" + s;
    s = s + 32;
    t++;
    document.write("<br>");

}

// alert("Hii Thereee!!!!!!!!!!");

let text = "";
let u = 0;
do {
    text += "<br> The number is " + u;
    u++;
}
while (u < 10);

document.getElementById("demo").innerHTML = text;

document.write("<br>");
let verse = "";
for (let h = 999; h < 1005; h++) {
    verse += "The number is " + h + "<br>";
}
document.getElementById("demo2").innerHTML = verse;

