// Create A program that takes a name from the user and append "Mr." at the start of the name.

/*var name = prompt("What is your name?");
alert("Mr. "+name);*/

/*Create a program that takes an input from the user as a string, count the number of characters and show it in alert
HINT =====> String is an array of characters in javascript's core*/

/*var inp = prompt("Enter something!");
alert("Number of Chars is: "+inp.length);
alert(char_count(inp,prompt("Enter character you want to count")));

function char_count(str,letter){
    let letter_count = 0;
    for(var i = 0; i < str.length; i++){
        if(letter === str.charAt(i)){
            letter_count += 1;
        }
    }
    return letter_count;
}*/

/*Create a program that takes an input from user as a string and remove any whitespaces in the input given.
HINT ====> search for "trim" in javascript*/
// join converts the elements of an Array into a string
// split Split a string into an array of substrings
// trim removes white spaces from left and right of string
// var n = prompt("Enter Full Name!");
// var a = n.trim();
// var b = a.split(" ").join("");
// alert(b);

/*
Which of the following variable names are incorrect? 
1. _name
2. $name_1
3. 1_#name
4. #name
*/
// var name = confirm("OK");

/*
Solve the equation below and the answer should not be in float point value
2 + 6 * 8 - 9 + (2/3) + 9
*/
// var eq = alert(2+6*8-9+(2/3)+9);

/*
What will be the output of the following program? 
*/
// var product1 = 200 * 3;
// var product2 = 300; 
// var discount = 20; 
// var total = (product1 + product2) / discount;
// confirm(total);

/*write a program that performs the following operations


1. data type of phone number should be a number 
2. data type of NIC should be string 
3. add a greeting before the name e.g hello mr.{name} */

// var phno = 03232322222;
// var nic = 25212121211213;
// (typeof(phno) === 'number') ? alert(true) : alert(false);
// if (typeof(nic) === 'number') alert(true);
// var greeting = person => {  //anonymous function or callback function
//     let name = person ? person.fname: "Stranger"; // it means if person is null then it can assigned name as stranger
//     return `Hello, Mr.${name}`;
// }
// alert(greeting({fname: "Faizan"}));
// function greet(person){
//     let name = (person != null) ? person.fname : "Stranger"; // it means if person is null then it can assigned name as stranger
//     return `Hello, Mr.${name}`;
// }
// alert(greet(null));



// write the following condition in a single line 
//template literals are string literals allowing embedded expressions.
// var age = 21;
// // if (age >= 20) {
// //     console.log("Eligible")
// // } 
// function checkAge(age){
//     if(age >= 20 ) return console.log(`Yes you are ${age} years old.`);
// }
// checkAge(age);

// What will be the output of the following program? 

// var product1 = 500 * 3;
// var product2 = 600;
// var discount = 20;
// var total = (product1 + product2) / discount;
// var budget = 100;

// if (total < budget) {
//     console.log("You did not exceed the budget")
// } else {
//     console.log("You are not allowed to spend this much money")
// }

// What is the output of the following program

// var SAT = 200;
// var avg = 150;
// var GPA = 3;
// var sport = "snooker";

// if (SAT > avg || GPA > 2.5 || sport === "football") {
//     console.log("You're an awesome student");
// }
// else {
//     console.log("You are not eligible");
// }

// Solve the following scenario using the code below

// You are given marks of a single student in an array, generate a loop that will "add" bonus points in each of the grade
// in the array, then compare the new marks with the criteria given if any mark is less than criteria the student will be 
// marked failed otherwise passed 

// var myMarks = [30,45,68,32,45];
// var criteria = 30; 
// var bonusPoints = 5;

// var addBonus = marks => {
//     for(var i = 0; i < marks.length; i++){
//         if(marks[i] >= criteria){
//             var arr = (marks[i] + bonusPoints).toString();
//             alert("You are passed!");
//             alert(`Your marks are ${arr}.`);
//         } else {
//             alert("You are Failed!");
//         }
//     }
// };
// addBonus(myMarks);

// What will the output at each of the console statements? 

// var array=[1,2,3,4,5];
// console.log(array.splice(2));
 
// console.log(array);
 
// var array2=[6,7,8,9,0];
// console.log(array2.splice(2,1));
 
// console.log(array2.splice(2,0));
 
// console.log(array2);
