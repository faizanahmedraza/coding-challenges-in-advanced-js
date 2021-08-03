/**
 * Varialbles and Data types
 */
var firstname = "John";
console.log(firstname);

var lastname = "Doe";
console.log(lastname);

var fullname = true;
console.log(fullname);

var job;
console.log(job);

job = "Developer";
console.log(job);

// Variable naming rules
var _3years = 3;
var $years = 12;
var full_name = "John Doe";
var fullname = "John and Doe";
console.log(fullname);

/**
 * Basic Operators
 */

var year, yearJohn, yearDoe;
now = 2021;
ageJohn = 22;
ageDoe = 18;

//Math operators
yearJohn = now - ageJohn;
yearDoe = now - ageDoe;

console.log("Date of birth: " + yearJohn);
console.log("Age in days " + ageJohn * 365);
console.log(now + 2);
console.log(now / 2);
console.log(now % 10);
var a = 5;
var b = 4;

//Logical Operators
var johnOlder = ageJohn < ageDoe;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof fullname);
console.log(typeof c);

/**
 * Operator Precedence
 * visit this:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 */
console.log(3 * 4 + 3); //15
console.log(3 + 4 ** 2); //19
console.log((3 + 2) * 5); //25

//More Operators
var x = 2;
x += 1;
console.log(x); //3
x -= 2;
console.log(x); //1
x *= 2;
console.log(x); //2
x /= 2;
console.log(x); //1
//postfix and prefix operator
var c = a++ - --b + --a + b++; //5 - 3 + 5 + 3;
console.log(c); //10

/*
  Use of let, var and const,
  Type coercion and mutation in js

  ES6(ES2015):
  introduced let and const in js
*/
//var is Function-scoped
//let and const provide Block Scope
//const is also provide Block Scope but they cannot be reassigned

// function start() {
//   for (var i = 0; i < 5; i++){
//     console.log(i);
//   }
//   console.log(i); //error for let, but not in var
// }
// console.log(i); //error because var is function scoped
// start();

// function check() {
//   for(var i = 0; i < 5; i++){
//     if(true){
//       let color = 'red';
//     }
//   }
//   console.log(color);//error for let, but not for var
// }
// check();

/*
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
A global variable, window, representing the browser's window in which the script is running.

All global JavaScript objects, functions, and variables automatically become members of the window object.
1-Global variables are properties of the window object.
2-Global functions are methods of the window object. 
3-Even the document object (of the HTML DOM) is a property of the window object:
*/

var glVar = "Hi"; //Its a global Vairable you access it by window object
let glLet = "Hi"; //You cannot access it by window object

function sayHi() {
  //global func
  console.log("Hi");
}
sayHi();

//Some Conditions
var x = 1; //allowed
let x = 2; //not allowed
{
  var x = 2; //allowed
  let x = 3; //not allowed
}

let y = 1;
let y = 2; //not allowed;
{
  let y = 2; //allowed
  let y = 3; //not allowed
}

let z = 1; //allowed
{
  let z = 2; //allowed
}
{
  let z = 3; //allowed
}

let r = 1; //allowed
var r = 2; //not allowed
{
  let r = 2; //allowed
  var r = 2; //not allowed
}

/*Note: JavaScript const variables must be assigned a value when they are declared 
        It does NOT define a constant value. It defines a constant reference to a value.
        Because of this, we cannot change constant primitive values, but we can change the 
        properties of constant objects and constant arrays.
*/

const pi;
pi = 3.14; //incorect
const pi = 3.14; //correct

const car = {type: "Fiat", model: "500", color: "white"};
car.color = "red";//change property :) allowed
car.owner = "Jon Doe";//add property :) allowed

const truck = ["mercidies","tesla","toyota"];
truck[0] = "suzuki";//change an element :) allowed
truck.push("Ferrari");//add an element :) allowed

car = {type: "Volvo",model: "400"}; //reassigned not allowed
truck = ["tesla","hundi"];//reassigned not allowed


/*
  Value(primitive) vs References Types
  Primmitives are copied by their value
  Objects are copied by their reference 

  1-Value types: Number,String,Boolean,Symbol,Undefined,Null
  2-Reference types(Objects): Object, Function and Array
*/

// value type example
let x = 10;
let y = x;  //independently variables right x copy to new variable y
x = 20;
console.log(x); //20
console.log(y); //10

// reference type example
/*When we use an object they not store in variable, 
  object is stored somewhere else in the memory and address
  of that memory location stored inside that variable.
  When we copy the variable to new variable, they both store
  address of same memory location or both variables pointing to
  the same object in memory and when we modify that object using
  either f or r its changes immediately visible to the other object.
  */
let f = { value: 10 };
let r = f;
console.log(f); //{ value: 10 }
console.log(r); // { value: 10 }

/* Template Literals */
const person = {
  name: "Faizan Ahmed Raza",
  message: "I'm a Full stack Web Develper",
  greeting() {
    console.log("Hello World");
  }
};
let result = `${person.name} and ${person.message} and ${person.greeting()}`

//Type coercion in js to change datatypes:
let bird = "Sparrow";
let bird = 123;
let bird = true;

//Variable mutation in Javascript allows to change the value of a variable.
let animal = "Cat";
animal = "Dog";
animal = "Sheep";

/*Hoisting is a js mechanism where variables and function declarations are moved
to the top of their scope before the code execution. */

//functions
sum(2, 2);

function sum(a, b) {
  let add = a + b;
  console.log(a + b);
}

//variables
carname = "Volvo";
alert(carname);
var carname;

/*Destructuring
  you can extract data from arrays and objects into distinct variables using destructuring
*/
const circle = {
  radius: 10,
  color: 'orange',
  belongs: {
    shapes: {
      edges: 0
    }
  },
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius,belongs: {shapes: {edges: numOfEdges}},getArea, getCircumference} = circle;
console.log(radius,numOfEdges,getArea());
const fruits = ["Apples","Bananas","Grapes","Orange"];
let [a,b,c] = fruits;
console.log(a,b,c);

const car = {name: "Ferrari", model: "500"};
let { name,model } = car;
console.log(name,model);

/*Object Literal Shorthand 
  You’ve probably written code where an object is being 
  initialized using the same property names as the variable names being assigned to them.
*/
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

// const gemzone = {
//   type: type,
//   color: color,
//   carat: carat
// }
// same as
const gemzone = { type,color,carat };
console.log(gemzone.carat);


/*Iteration:
  Iterable protocol allows js to define or customize their iteration behavior
  Note:
  1-for..in returns a list of keys on the object being iterated
  2-for..of returns a list of values of the numeric properties of the object being iterated.
  */
 const digits = [1, 2, 3, 4, 5, 10, 7, 8, 9, 6];


 for (const index in digits) {
   console.log(digits[index]);
 }
 
 for (const digit of digits) {
   if (digit % 2 === 0) {
     continue;
   }
   console.log(digit);
 }
 
 for (let i = 0; i < digits.length; i++) {
   console.log(digits[i]);
 }
 
 digits.forEach(element => console.log(element));
 

/*Spread Operator 
  The Set object lets you store unique values of any type, whether primitive values or object references.
*/
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
const primes = new Set([2, 3, 5, 7, 11, 13, 17, {a:1, b:2}, 23, 29]);
console.log(...primes);

/*Rest Operator */
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

/*Short Circuit using Logical Operator in JS*/
function shortCircuitEvaluation() {
  let givenAge = 20;
  let age = givenAge && givenAge != '';
  document.write(age);
  document.write(typeof age);
  if(age || typeof age === "boolean"){
    document.writeln(`age is ${givenAge}.`);
  }else if(typeof age === 'boolean' && age){
    document.writeln(`age is less than and equal to 20.`);
  }
}
shortCircuitEvaluation();

document.write(false && false || true && false || false && true);//false
document.write(true || false && true);//true
