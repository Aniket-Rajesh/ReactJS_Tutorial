var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);
// Will return the double of all numbers.
// console.log(numbers);
// Will return the original array.

// Another way of doing the same would be using forEach.
// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// As we can see above the method of using a map is much more concise.
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
// console.log(newNumbers);
// [
//     6,
//     112,
//     4,
//     96,
//     10
// ]

//Filter - Create a new array by keeping the items that return true.
// For eg:

const newNumbers2 = numbers.filter(function (x) {
  return x > 10;
});
// console.log(newNumbers2);
// O/p:[
//     56,
//     48
// ]

//Reduce - Accumulate a value by doing something to each item in an array.

var newNumber = numbers.reduce(function (accumulator, currentnumber) {
  return accumulator + currentnumber;
});
// console.log(newNumber);
// OP: 114

//Find - find the first item that matches from an array.
// Find and FindIndex were releases relatively recently.
const numb = numbers.find(function (num) {
  return num > 10;
});
// console.log(numb);
// OP: 56
//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const pedia = emojipedia.map(function (x) {
  return x.meaning.substring(0, 100);
});
console.log(pedia);
// [
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing spo",
//     "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenm",
//     "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The "
// ]
// console.log(emojipedia);
