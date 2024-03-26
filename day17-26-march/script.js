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


