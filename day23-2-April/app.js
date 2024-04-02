//Prototype in JS 
//All JavaScript objects inherit properties and methods from a prototype.
console.log("Hie, Here are we...");


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