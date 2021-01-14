// Write a JavaScript program to generate a random integer.
// var a = Math.random()+1;
// console.log(a);

// Write a JavaScript program to find the lowest value in an array.
// Test data: [12,34,56,1], [-12,-34,0,-56,-1]
// var arr1 = [12,34,56,1];
// var arr2 = [12,30,1,14,0,5,6];
// function checkLower(array){
//    for(var i = 0; i <= array.length; i++){
//        if(array[i] < array[i - 1]){
//            var res = array[i];
//        }
//    }
//    return alert(res);
// }
// checkLower(arr1);
// checkLower(arr2);

/*Write a JavaScript program to check whether a value is numeric or not.
Test data: 12, "abcd", "12", '12', " ", 1.20, -200*/

// var data = [12,"abcd","12",'12'," ",1.20,-200];
// function testData(data){
//     console.log(`The data is ${data.toString()}`);
//     for(var i = 0; i < data.length; i++){
//         console.log(typeof(data[i]));
//         if(typeof(data[i]) === 'number'){
//             alert('Value is numeric');
//         }
//         else {
//             alert('Value is not numeric');
//         }
//     }
// }
// testData(data);

/*Write a JavaScript program to calculate the sum of values in an array
Test data: [1,2,3,10,20,85] */
// var arr = [1,2,3,10,20,85];
// const sumOfArray = (arr) => {
//     let sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return `The sum of array values is ${sum}.`;
// }
// alert(sumOfArray(arr));

// What is the output of the following:
// var num1 = 10;
// var num2 = -5;
// var result = --num1 + ++num2 + num2++ - num1-- + num1 - num2;
// alert(result);  //Dry run: 9 + -4 + -4 - 9 + 8 - -3 Ans = 3

/*Write a JavaScript program to check whether a string is blank or no.
Test data: "Osama", " ", ""*/
// var data = ["Faizan"," ",""];
// const checkString = data => {
//     for(var i = 0; i < data.length; i++){
//         if(data[i] === " " || data[i].length === 0){
//             alert("String is blank.");
//         } else {
//             alert("String has smthg.");
//         }
//     }
// }
// checkString(data);

/*Write a JavaScript program to capitalize the first two letters of a string.
Test data: "js exercises"*/
// var dataString = prompt("Enter your string to Captialize your first two characters!");
// const convertTwoCharacters = (data) => {
//     var d = data.slice(0,2);
//     var e = d.toUpperCase();
//     var res = d.replace(d,e);
//     var res1 = res.concat(data.substr(2));
//     // OR
//     // var char1 = data.charAt(0).toUpperCase();
//     // var char2 = data.charAt(1).toUpperCase();
//     // var res = (char1 + char2).concat(data.slice(2));
//     return res1;
// }
// alert(convertTwoCharacters(dataString));

// Write a JavaScript function to capitalize the first letter of each word in a string
// var dataString = prompt("Enter your string to Captialize first character of each word!");
// const convertFirstCharacter = (data) => {
//     str = data.split(" ");
//     for(var i = 0; i < str.length; i++){
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }
//     return str.join(" ");
// }
// alert(convertFirstCharacter(dataString));

// Write a JavaScript program to count the occurrence of a substring in a string.

/*var sentence = "The Quick Brown fox jumps over the lazy dog"
alert(sentence);
const occurenceCount = (sentence, occurWord) => {
    let arr = sentence.toLowerCase().split(" ");
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(occurWord.toLowerCase() == arr[i]){
            count += 1;
        }
    }
    if(count > 0){
        return count;
    } else {
        return "Not Exist!";
    }
}
var word = prompt("Enter your word you want to khow how many times it's repeat?");
var res = occurenceCount(sentence, word);
alert(`The occurence of ${word} is ${res}.`);*/

/*Write a JavaScript program to truncate a string to a certain number of words.
Test data: sentence = 'The quick brown fox jumps over the lazy dog'
Output:
"The quick brown fox"*/

// var sentence = 'The quick brown fox jumps over the lazy dog';
// alert(sentence);
// const truncateString = (sentence,words) => {
//     let arr = sentence.split(" ");
//     let half = arr.slice(0,words);  //returns a selected element as new Array
//     var res = half.join(" ");
//     return res;
// }
// var noOfWords = prompt("How many words you want from previous string!");
// var res = truncateString(sentence,noOfWords);
// alert(`The result is "${res}"`);




