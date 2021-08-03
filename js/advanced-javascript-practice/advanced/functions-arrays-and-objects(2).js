/*
* Arrow function expressions are best suited for non-method functions and Arrow functions do not have their own this.
* The call, apply and bind methods are NOT suitable for Arrow functions -- as they were designed to allow methods to execute within different scopes
* because Arrow functions establish "this" based on the scope the Arrow function is defined within.
* */

// (() => {
//     console.log('IIFE');
// })();

const person = {
    name: "Faizan Ahmed Raza",
    designation: "PHP Developer",
    info: function() {
        return this.name + ' ' +this.designation
    }
};

(() => {
   console.log(`Your name ${person.name} \b His designation is ${person.designation}`);
   console.log(person.info());
})(person);


'use strict';

var test = {};

var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this);
    }
}

obj.b();
obj.c();