/*Write a program that writes the current date in the following format.
====> Tue Dec 03 2019*/

//------ JavaScript Date formats ----------
// var date = new Date();
// var tds = date.toDateString(); //Sun Dec 31 1899
// var tlds = date.toLocaleDateString(); //12/31/1899
// var tgmts = date.toGMTString(); //Sat, 30 Dec 1899 19:31:48 GMT
// var tlts = date.toLocaleTimeString(); //12:00:00 AM
// var tls = date.toLocaleString(); //12/31/1899, 12:00:00 AM
// var tisos = date.toISOString(); //1899-12-30T19:31:48.000Z
// var ts = date.toString('YYYY-MM-dd'); //Thu Jan 14 2021 13:07:16 GMT+0500 (Pakistan Standard Time)
// console.log(ts);
// console.log("HOUR =======>", date.getHours());
// console.log("DAY =======>", date.getDay());
// console.log("MONTH =======>", date.getMonth() + 1);
// console.log("YEAR =======>", date.getFullYear());
// console.log(new Date(date.setFullYear(2006)).toDateString())

// Write a function that takes a name as a parameter and append Mr. at the start of the name on console
// const showGreeting = (name) => {
//     return `Hi! Mr. ${name}`;
// }
// alert(showGreeting(prompt("Enter Name")));

//Determine Output
// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("Current time: " + theHr + ":" + theMin)
// }
// tellTime();

/*Write a function that takes an array as a parameter.
The function's duty is to delete the last element from the array and return the array*/

// const TakeArray = (arr) => {
//     let len = arr.length;
//     arr.pop(len); //or len-1 because len = 3
//     return arr;
// }
// alert(["ab","cd","ef"]);
// alert(TakeArray(["ab","cd","ef"]));

/*Write a function that takes an argument.
The function's duty is to check the arguments type and print the type
For example if i pass in a string the function should print string on the console
if i pass a number the console should print number
*/

// const checkTypeOfArgumnets = (arg) => {
//     if(typeof(arg) === 'number'){
//         console.log("number");
//     } else if(typeof(arg) === 'string'){
//         console.log("string");
//     } else if(typeof(arg) === 'undefined'){
//         console.log('undefined');
//     } else if(typeof(arg) === 'boolean'){
//         console.log("boolean");
//     } else if(typeof(arg) === 'object'){
//         console.log("object");
//     }
// }
// checkTypeOfArgumnets("Faizan");

/*Write a function that takes an array of numbers as a parameter and function's job
is to multiply each element of an array by 2 and print it*/

// const squareOfEach = (arr) => {
//     return arr * 2;
// }
// var num = [13,12,15,19,23];
// alert(num.map(squareOfEach));

/*Write a function that does not get any arguments but should return a random id number if called against a variable 
Example:
 
 var id = generateId();
 the generate function should generate a random id between 1 - 1000 and return it */
//  Math.random() used with Math.floor() can be used to return random integers.
// const genRanId = () => {
//     return Math.floor(Math.random() * 1000) + 1;// returns a random integer from 1 to 1000
// }
// var id = genRanId();
// console.log(id);

/*Write a function that takes in a string as an argument an the functions duty is to check the number of characters
in a string a print it on the console*/
// const stringCounter = (arr) => {
//     let arr1 = arr.split(" ").join("");
//     let count = 0;
//     for(var i = 0; i < arr1.length; i++){
//         count += 1;
//     }
//     return count;
// }
// var str = prompt("Enter your string");
// alert("Your string characters are "+ stringCounter(str));

/*write an arrow function that takes in a string as an argument and returns the string in uppercase letters.*/
// const stringUpper = (str) => {
//     let strUp = str.toUpperCase();
//     return strUp;
// }
// alert(stringUpper("faizan ahmed raza"));

/*Write a function to sort an array of numbers in ascending or descending order*/
// var arr = ["Orange","Banana","Grape","Apple"];
// alert(arr.sort()); //ascending order
// alert(arr.reverse()); //descending order

/*Write a function and the functions duty is to first check 
if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it
if the argument passed is a number then it should be multiplied by the power of 2 and return it*/

// const passArgument = (arg) => {
//     console.log(typeof(arg));
//     if(typeof(arg) === 'string'){
//         return arg + " Welcome";
//     }
//     if(typeof(arg) === 'number'){
//         return arg * 2;
//     }
// }
// alert(passArgument("Faizan Ahmed Raza"));
// alert(passArgument(5));


/*Write a function to round a number to a specified number of digits. when passed as an argument and return it
Example: 
roundNumber(4.6); 
Expected Ouput: 5 ===> The number is rounded off*/

// var rn = Math.round(4.6);
// alert(rn);











