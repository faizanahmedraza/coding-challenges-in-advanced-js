// Write some code that checks for double spaces in a string and displays an alert if they're found
// var str = prompt("Enter some text!");
// const checkSpaces = (str) => {
//     for(var i = 0; i < str.length; i++){
//         if(str.slice(i,i+2) === "  "){
//             alert("White Space Found!");
//             break;
//         }
//     }
// }
// checkSpaces(str);

// Write a program to search for banned characters and replace the with phrase

// var text = prompt("Enter your text");
// const searchBannedChars = (text) => {
//   for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "the") {
//       text = text.slice(0, i) + "the World by me" + text.slice(i + 3);
//     }
//   }
//   return alert(text);
// };
// searchBannedChars(text);
// //--Alternate--
// var firstChar = text.indexOf("World");
// if(firstChar !== -1){
//   text = text.slice(0,firstChar) + "THE SECOND WORLD WAR" + text.slice(firstChar + 5);
// }
// alert(text);
//--Advance Method--
// var newText = text.replace(/Hello World/g, "Hey Im Replace");
// alert(newText);

/*Write a program that cycles through a string looking for an exclamation point. If the
character is found, an alert displays.*/

// var text = prompt("Enter your Text");
// for(var i = 0; i < text.length; i++){
//   if(text.charAt(i) === "!")
//   {
//     alert("Exclamation mark found");
//   }
// }

//Random number generator from 1 - 10
// var mynum = Math.random();
// var firstnum = mynum * 10 + 1;
// alert(Math.floor(firstnum));
// alert(Math.ceil(firstnum));

// var num = String(123333);   //toString(12345)
// var text = Number("12345"); // ParseInt("12345") // ParseFloat("12345");
// var d = new Date();
// var dat = d.toDateString();
// var date = d.toString();
// var total = 123.5435 + 123.4;
// var tofix = total.toFixed(2);
// var str = total.toString();
// if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// alert(str);
// console.log(num,typeof(num));
// console.log(text,typeof(text));
// console.log(d, typeof(date));
// console.log(total,tofix);

//All about Dates
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var now = new Date();
var getDay = now.getDay(); //return day from 0 - 6
var getMonth = now.getMonth(); //return month from 0 - 12
var getDate = now.getDate(); //day of Month 1 - 31
var getyear = now.getFullYear(); //year
var tostr = now.toDateString(); //Tue Jan 19 2021
var currhrs = now.getHours();
var currtim = now.getTime();
var getmin = now.getMinutes();
var getsec = now.getSeconds();
var getmill = now.getMilliseconds();
//Changing elements of date and time
var sfy = now.setFullYear("2020");
var gfy = now.getFullYear();
// window.alert(now);
// alert(dayNames[getDay]);
// alert(monthNames[getMonth]);
// alert(getDate);
// alert(`Todays date is ${dayNames[getDay]} ${monthNames[getMonth]} ${getDate} ${getyear}`); ///Tue Jan 19 2021
// alert(tostr);
// alert(getmill);
//Specify Date and Time
// var doomsday = new Date("June 30, 2035");
// var msdoomday = doomsday.getTime();
// var msdiff = msdoomday - doomsday;
// alert(gfy);

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }
// console.log(fullNames);
