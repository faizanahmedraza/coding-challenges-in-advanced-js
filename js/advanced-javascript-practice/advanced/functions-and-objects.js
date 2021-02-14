/*
 * Functions , parameters, arguments , void and return functions
 * and Factory Functions
 * Note: 
 * 1-We use came Notation like 'oneTwoThree' for factory Functions.
 * 2-We use Pascal Notation like 'OneTwoThree' for constructor Functions.
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
    location, // = location,
    draw() {
      //= draw: function()
      console.log("draw");
    },
  };
}
const circle1 = createCircle(2, { x: 1, y: 1 });
console.log(circle1);
const circle2 = createCircle(3, { x: 2, y: 1 });
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
      this.draw = function() {
          console.log('draw');
      }
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
    email: "faizanahmedraza35@gmail.com"
};

var User = function(user) {
    this.name = user.name;
    this.email = user.email;
}
/*Functions are not longer inside the object 
directly and it is in proto property of object*/

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, ' has logged in!');
}

User.prototype.logout = function() {
    this.online = true;
    console.log(this.email, ' has logged out!');
}

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

var osama = new Person("Osama",1994,"Developer");
var sharjeel = new Person("Sharjeel",1998,"Developer");
var hur = new Person("Hur",1999,"Developer");


