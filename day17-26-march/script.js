console.log("Hii again, Let's do this!");


//switch statement within the function

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "None";
            break;

    }
    return answer;
}
console.log(caseInSwitch(8));



//

function switchOfStuff(val) {
    let answer = "";

    switch (val) {
        case "a":
            answer = "Aristotle";
            break;
        case "b":
            answer = "Bat";
            break;
        case "c":
            answer = "Carribean";
            break;
        case "d":
            answer = "Dumbledor";
            break;
        case "e":
            answer = "Esophagus";
            break;
        default:
            answer = "Nothing";
            break;
    }

    return answer;
}
console.log(switchOfStuff("e"));

//

function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
        case 4:
            answer = "Low";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            answer = "Medium";
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            answer = "High";
            break;
        default:
            answer = "Not true value."
            break;
    }
    return answer;
}
console.log(sequentialSizes(6));

//
function convertTo12Hour(time) {
    const [hour, minute] = time.split(":");

    let amPm = "AM";
    let newHour = parseInt(hour);

    if (newHour >= 12) {
        amPm = "PM";
        newHour -= 12;
    }

    if (newHour === 0) {
        newHour = 12;
    }
    return `${newHour}:${minute} ${amPm}`;

}

console.log(convertTo12Hour("00:00"));

//Returning Boolean Values from the function

function greaterThan(a, b) {
    if (a < b) {
        return true;
    }
    return false;
}
console.log(greaterThan(60, 40));

//
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow((Math.sqrt(a) + Math.sqrt(b)), 2));
}
console.log(abTest(32, 16));



//Objects

const myDog = {
    name: "Puddle",
    age: 3,
    leg: 4,
    bff: "me"
};
console.log(myDog.name);
myDog.name = "Shiro";
console.log(myDog.name);
myDog["bark"] = "woof";
delete myDog.leg;
console.log(myDog);


function phoneticLookUp(val) {
    let result = "";
    let lookup = {
        "alpha": "Santa",
        "beta": "Owl",
        "gamma": "Deer",
        "delta": "Wolf"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookUp("delta"));

let heroes = ["Spider-man", "Hulk", "Iron-man", "Captain-America", "Doctor-Strange"];

/* for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
*/

for (let keys of heroes) {
    console.log(keys.toLowerCase());
}
document.write("<br>");
const cities = ["Pokhara", "Kathmandu", "Dharan", "Lalitpur", "Mahendranagar"];
for (let element of cities) {
    console.log(element.toUpperCase());
}

//Nested object
const myStorage = {
    car: {
        inside: {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        outside: {
            trunk: "jack"
        }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


