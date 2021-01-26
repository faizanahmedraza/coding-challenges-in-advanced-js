console.log("Hello World on Page 6");

// Write the program such that only the users Alice and Bob are greeted with their names.
// var name = prompt("Enter your name!");
// var fname = name.trim();
// //indexOf same as search function   :) indexOf not used with regex
// const greetSpecificName = (name) => {
//     if(name.search("Alice") !== -1){
//         return alert("Good Morning! Alice.");
//     }
//     if(name.search("Bob") !== -1){
//         return alert("Good Evening! Bob.");
//     }
// }
// greetSpecificName(fname);

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
// var num = +prompt("Enter a number!");
// const sumOfNum = (num) => {
//     let sum = 0;
//     for(var i = 1; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }
// alert(`Sum of 1 to ${num} is `+ sumOfNum(num));

/*Modify the previous program such that only multiples of three or five are considered in 
the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 */
// var num = +prompt("Enter a number!");
// const sumOfNum = (num) => {
//     let sum = 0;
//     for(var i = 1; i <= num; i++){
//         if((i % 3 == 0) || (i % 5 == 0)){
//             sum += i;
//             console.log(i);
//         }
//     }
//     return sum;
// }
// alert(`Sum of multiples of 3 and 5 are `+ sumOfNum(num));

/*Write a program that asks the user for a number n and gives them the possibility to choose 
between computing the sum and computing the product of 1,…,n. */
// var num = parseInt(prompt("Enter your number!"));
// var sum = parseInt(prompt("Choose between number till you want to compute sum?"));
// var prod = parseInt(prompt("Choose between number till you want to compute product?"));
// const possibilityOptFunc = (num,sum,prod) => {
//     let s = 0;
//     let p = 1;
//     for(var i = 1; i <= num; i++){
//         if(i <= sum){
//             s += i;
//         }
//         if(i <= prod){
//             p *= i;
//         }
//     }
//     return `The sum are: ${s} and The product are: ${p}`;
// }
// alert(possibilityOptFunc(num,sum,prod));

/*Write a program that prints a multiplication table for numbers up to 12.*/
// var table = 12;
// const tablesUpToTwelve = (table) => {
//     document.write("<pre>");
//     for(var i = 1; i <= table; i++){
//         document.write(`<strong><em>Table of ${i}</em></strong><br>`);
//         for(var j = 1; j <= 10; j++){
//             let text = `${i} x ${j} = ${i * j} <br>`;
//             document.write(text);
//         }
//     }
//     document.write("</pre>");
// }
// tablesUpToTwelve(table);

/*Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary 
size numbers, printing all primes up to the largest number you can easily represent is fine too.)*/

// const isPrimeNumbers = (num) => {
//   var isPrime = true;
//   for (var i = 2; i <= num / 2; i++) {
//     // check if number is not prime return false
//     if (num % i == 0) {
//       check = false;
//       break;
//     }
//   }
//   return isPrime;
// };
// const driverFunc = (inputNum) => {
//   var isPrime;
//   for (var i = 2; i < inputNum; i++) {
//     isPrime = isPrimeNumbers(i);
//     if (isPrime === true) {
//       var p = document.createElement("p");
//       var textnode = document.createTextNode("" + i + ", ");
//       p.appendChild(textnode);
//       document.body.setAttribute("id", "body");
//       document.getElementById("body").style.display = "flex";
//       document.getElementById("body").style.flexWrap = "wrap";
//       document.getElementById("body").appendChild(p);
//     }
//   }
// };
// var inputNum = +prompt("Enter number");
// driverFunc(inputNum);

/*Write a guessing game where the user has to guess a secret number. After every guess the program tells the user
whether their number was too large or too small. At the end the number of tries needed should be printed. 
It counts only as one try if they input the same number multiple times consecutively.*/

// const guessGame = () => {
//   var secretNum = Math.floor(Math.random() * 10 + 1);
//   alert("Enter your guess 1 - 10 \n You have only 10 tries!");
//   var tries = 0;
//   for(var i = 0; i < 10; i++) {
//     tries++;
//     var guessNum = +prompt("Enter your guess number!");
//     if (guessNum == secretNum) {
//       alert("Your Guess is correct. Congrajulations!!");
//       break;
//     } else if (guessNum < secretNum) {
//       alert("Your Guess is too Short.");
//     } else if (guessNum > secretNum) {
//       alert("Your Guess is too Large.");
//     }
//   }
//   alert("Congrajulations! You did it in " + tries + " tries.");
// };
// guessGame();

/*Write a program to check array if they have multiple values*/

// const checkDublicate = (arr) => {
//     let counts = {};
//     for(let i = 0; i < arr.length; i++){
//         if(counts[arr[i]]){
//             counts[arr[i]] += 1;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }
//     for (let prop in counts) {
//         if(counts[prop] >= 2){
//             alert(prop+" counted:"+counts[prop]+" times.");
//         }
//     }
//     console.log(counts);
// }
// const arr = [2,4,5,1,4,5,1,1,1,1];
// checkDublicate(arr);

// OR --SImple or small technique only for single duplicate values not more than 2 duplicates
// const arr = [2,2,1,1];
// alert(arr);
// const duplicateArr = [];
// const tempArr = arr.sort();
// for(let i = 0; i < tempArr.length; i++){
//     if(tempArr[i + 1] == tempArr[i] && tempArr[i + 2] != tempArr[i])
//     {
//         duplicateArr.push(tempArr[i]);
//     }
// }

// if(duplicateArr.length >= 0){
//     duplicateArr.forEach(item => {
//         alert("This "+item+" is more than 1 times.");
//     });
// }
