
console.log("Hie, Here are we...");

//Prototype in JS 
//All JavaScript objects inherit properties and methods from a prototype.

const employee = {
    calcTax() {
        console.log("Tax rate is 10%.");
    },
};

const newEmployee = {
    salary: 600000,
    calcTax() {
        console.log("tax rate is 20%.");
    },
};

newEmployee.__proto__ = employee;

//Classes in Javascript
//These are the blueprints to create various objects.

class ToyotaCar {
    start() {
        console.log("Start");
    }

    stop() {
        console.log("End");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortunerCar = new ToyotaCar();
fortunerCar.setBrand("Fortuner");
console.log(fortunerCar.brandName);
// Output: Fortuner

let lexus = new ToyotaCar();
lexus.setBrand("Lexus");
console.log(lexus.brandName);
// Output: Lexus


//Constructor
//The constructor method is a special method of a class for creating and initializing an object instance of that class.

//Constructor do look like functions however they are not functions, they are method of class.

class Polygon {
    constructor() {
        this.name = 'Polygon is my name.';
    }
}

const poly1 = new Polygon();

console.log(poly1.name);


//

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

//Inheritance -  Parent-Child relationship

class person {
    constructor() {
        this.species = "We are homo sapien sapien.";
    }
    eat() {
        console.log("Eats Food.");
    }

    sleep() {
        console.log("Sleep Nicely.");
    }
}
class Engineer extends person {
    work() {
        console.log("Work Wisely.");
    }
}
class Painter extends person {
    canva() {
        console.log("Work With Colors");
    }
}
let myObj = new Engineer();



//Super Keyword



//Create a class User with 2 properties  name & email. It has a method called viewData() that allows the user to view website data.

let DATA = "Victoria's Secret."

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data : ", DATA);
    }
}

let student1 = new User("Albert", "albert@mail.com");
let student2 = new User("Aristotle", "aristotle@mail.com");
console.log(student1, student2);
console.log(student1.viewData());
console.log(student2.viewData());


//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows to edit website data.

class Admin extends User {
    constructor(name, email) {
        super(name, email);    //User class constructor got invoked by the super key in the derived class.
    }
    editData() {
        DATA = "We have new value in the existing data.";
    }
}
let admin1 = new Admin("Admin", "admin@mail.com");
console.log(admin1);




//Error Handling in JavaScript.

let a = 33.3;
let b = 55.9;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

try {
    console.log(a - c);
} catch (err) {
    console.log(err);
}

console.log(a + b);