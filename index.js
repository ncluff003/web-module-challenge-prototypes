// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (foodString) {
  if (this.stomach.length < 10) {
    this.stomach.push(foodString);
  }
};
Person.prototype.poop = function () {
  return (this.stomach = []);
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
Person.prototype.speak = function () {
  console.log(`This new binding`, this);
  return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
};

const nathan = new Person(`Nathan`, 34);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  return (this.tank += gallons);
};
Car.prototype.drive = function (miles) {
  if (this.tank - Math.round(miles / this.milesPerGallon) >= 0) {
    this.odometer += miles;
    this.tank -= Math.round(miles / this.milesPerGallon);
    return;
  } else if (this.tank - Math.round(miles / this.milesPerGallon) < 0) {
    this.odometer += this.tank * this.milesPerGallon;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  }
};

const ford = new Car(`Mustang`, 24);
console.log(ford);
ford.fill(30);
console.log(ford.drive(740));
console.log(ford);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const elizabeth = new Baby(`Elizabeth`, 3, `Stuffed Doggy`);
elizabeth.eat(`Beets`);
console.log(elizabeth);
console.log(elizabeth.play());
elizabeth.speak.call(nathan);
nathan.speak.apply(elizabeth);

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global Context -- This is where the `this` keyword points to, or references, the window object.

  2. Implicit Binding -- This is where the `this` keyword would reference the Object it is in, with exception being if a method is an arrow function.  Then, the `this` keyword in the method would be in a Global Context.
  
  3. New Binding -- When using the `new` keyword in creating a reference to an Object, the `this` keyword references the newly created Object.  It is how the Person, and Baby objects above would reference both nathan and elizabeth.
  
  4. Explicit Binding -- This is when we use the .call, .bind. and .apply methods.  The `this` keyword is the reference of whatever we are passing to it.  For example, if we used .call on a method of elizabeth, and pass nathan as the argument, the `this` keyword would put nathan's attributes into the method that is called, and reference nathan.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
