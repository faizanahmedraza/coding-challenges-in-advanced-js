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
 * Variable mutation and type coercion
 */
var firstname = "John";
var age = 22;
console.log(firstname + " " + age);

var job, isMarried;
job = "Developer";
isMarried = false;

console.log(
  firstname +
    " is a " +
    age +
    " years old. Its job is " +
    job +
    ". Is he Married? " +
    isMarried
);

//variable mutation
age = "twenty two";
job = "cadet";

console.log(
  firstname +
    " is a " +
    age +
    " years old. Its job is " +
    job +
    ". Is he Married? " +
    isMarried
);

// var lastname = prompt("Enter your Last name");
// alert(firstname+' '+lastname);

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
