/*  TOPICS:
 * Functions, parameters, arguments , void and return functions
 * Function expression, anonymous function and Factory Functions
 * Note:
 * 1-We use came Notation like 'oneTwoThree' for factory Functions.
 * 2-We use Pascal Notation like 'OneTwoThree' for constructor Functions.
 * In js variables or identifiers are function scope
 */

//function declaration
function showMessage() {
    console.log("Hello World");
}

// function calling
showMessage();

function multiply(num1, num2) {
    return num1 * num2;
}

var mulResult = multiply(2, 2) + 4; //8
console.log(mulResult);

function addition(num1, num2) {
    return num1 * num2;
}

console.log(addition(2, 2));
//Because Javascipt is dynamically typed language
console.log(addition("John", 20)); //John20
console.log(addition(20, "John")); //20John
console.log(addition("John", "Doe", 22)); //JohnDoe
console.log(addition()); //NaN
console.log(undefined * undefined); //NaN

//--Factory Functions---
function createCircle(radius, location) {
    /*In modern Javascript if our key and value are same
       We can make our code shorter by removing the value and
       simply adding a key*/
    return {
        radius, // = radius: radius,
        location, // =location: location,
        draw() {
            //= draw: function()
            console.log("draw");
        },
    };
}

const circle1 = createCircle(2, {x: 1, y: 1});
console.log(circle1);
const circle2 = createCircle(3, {x: 2, y: 1});
console.log(circle2);

/*
 * Constructor Functions --- ES6
 * In a constructor function this does not have a value.
 * It is a substitute for the new object. The value of
 * this will become the new object when a new object is created.
 */
function Video(title) {
    this.title = title;
    console.log(this); //this will reference to every new object that is created/instantiated
}

//when you use a new operator it creates a new empty object
const v = new Video("ABC");
const v1 = new Video("CDE");

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
    return this;
}

const circle3 = new Circle(1);

/*
 * Objects and understanding of this keyword
 * In JavaScript, the thing called this is the object that "owns" the code.
 * The value of this, when used in an object, is the object itself.
 */

const video = {
    title: "ABC",
    tags: ["a", "b", "c"],
    //play and showTags is method in video object
    play() {
        console.log(this); //this reference to this video object itself
    },
    showTags() {
        //forEach : callback function
        this.tags.forEach(function (tag) {
            console.log(this.title, tag); //this return an undefined because 'this' is used in regular function
        }, this);
    },
};
video.play(); // return {title: "ABC", play: function}
video.showTags(); //return a b c
video.stop = function () {
    console.log(this);
};
video.stop();

function playVideo() {
    //Its reference to global object
    console.log(this);
}

playVideo(); //return window object

/*
Prototypes are the mechanism by which JavaScript objects inherit features from one another.
The Object.prototype is on the top of the prototype inheritance chain,
The JavaScript prototype property allows you to add new properties to object constructors.
*/

var student = {
    name: "John Doe",
    yearOfBirth: 1999,
    job: "developer",
};

var user = {
    name: "Faizan Ahmed Raza",
    email: "faizanahmedraza35@gmail.com",
};

var User = function (user) {
    this.name = user.name;
    this.email = user.email;
};
/*Functions are not longer inside the object 
directly and it is in proto property of object*/

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, " has logged in!");
};

User.prototype.logout = function () {
    this.online = true;
    console.log(this.email, " has logged out!");
};

var faizan = new User(user);
faizan.login();

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2021 - this.yearOfBirth);
};

var osama = new Person("Osama", 1994, "Developer");
var sharjeel = new Person("Sharjeel", 1998, "Developer");
var hur = new Person("Hur", 1999, "Developer");

/*Functions: Passing Functions as arguments */

const years = [1990, 1999, 1945, 1950, 2005];

function arrayCalc(arr, func) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(func(arr[i]));
    }
    return arrRes;
}

function calcAge(arrElement) {
    return 2021 - arrElement;
}

function isFullAge(arrElement) {
    return arrElement >= 18;
}

function maxHeartRate(arrElement) {
    if (arrElement >= 18 && arrElement <= 40) {
        return 220 - arrElement;
    } else if (arrElement >= 40) {
        return Math.round(206.9 - 0.7 * arrElement);
    } else {
        return -1;
    }
}

const ages = arrayCalc(years, calcAge);
const fullAges = arrayCalc(years, isFullAge);
const rates = arrayCalc(years, maxHeartRate);

console.log(rates);
console.log(fullAges);
console.log(ages);

/*Functions: Functions returning Functions */

function hiringDepart(job) {
    if (job.toLowerCase() === "designer") {
        return function (name) {
            console.log(name + ", Can you please describe the UX design?");
        };
    } else if (job.toLowerCase() === "teacher") {
        return function (name) {
            console.log(name + ", Which subject do you to teach?");
        };
    } else {
        return function (name) {
            console.log(name + ", What do you do?");
        };
    }
}

const interviewer01 = hiringDepart("teacher");
interviewer01("Hur Abbas");
// const interviewer02 = hiringDepart('designer')('Khubaib');
// const interviewer03 = hiringDepart('matric')('XYZ');

console.log(interviewer01);

/*
  Functions: IIFE(Immediately invoked function expression) 
  is a JavaScript function that runs as soon as it is defined.

  It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
  1 - The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
  2 - The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/

let iife = function () {
    return "Immediately invoked function expression";
}();
console.log(iife);

function playGame() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}

playGame();

(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


/*Arrow Functions: behave same as normal but shorter syntax
  Array prototype methods: map and filter, find, findIndex, values, every

  Differences & Limitations:
    Does not have its own bindings to this or super, and should not be used as methods.
    Does not have new.target keyword.
    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    Can not be used as constructors.
    Can not use yield, within its body.
*/
const fruits = ["apple", "mango", "orange", "banana", "cherry", "stawbery"];
console.log(fruits);

const mapFruits = fruits.map((fruit) => "I like to eat " + fruit);
for (let value of mapFruits) {
    document.write(value, "<br>");
}

const fiterFruits = fruits.filter((fruit) => {
    if (fruit.endsWith("e")) {
        document.write(fruit, " that ends with e letter.<br>");
    }
});

const valueFruits = fruits.values();
for (let value of valueFruits) {
    console.log(value);
}

/*
The find() method returns the value of the first element in the array that satisfies the provided testing function
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function*/
const secretNumbers = [12, 11, 7, 3, 6, 2, 10, 13];

const findSecretNumbers = secretNumbers.find((element) => element > 10);
console.log(findSecretNumbers);

/*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */
const isBelowThreshold = (currentValue) => currentValue < 40;
const everySecretNumbers = secretNumbers.every(isBelowThreshold); //true

/*he fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 
  value, start, end
*/

const fillSecretNumbers = secretNumbers.fill(10, 3, 4);
console.log(fillSecretNumbers);
