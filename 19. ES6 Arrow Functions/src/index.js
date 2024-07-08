import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];
// The most basic way of writing a javascript function is:
// function square(x) {
//   return x * x;
// }
// const newNumb = numbers.map(square);
// console.log(newNumb);

// The next way would be to make use of an anonymous function
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

// Arrow functions go a step further when it comes to reducing the amt of code that we have to write
// const newNumbers = numbers.map((x)=> {
//   return x * 2;
// });
// console.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x=> x * 2 );

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num=>  num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber)=> accumulator + currentNumber)

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(num=> num > 10)

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num=>num > 10)
