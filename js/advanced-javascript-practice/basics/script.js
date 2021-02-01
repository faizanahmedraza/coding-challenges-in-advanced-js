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
