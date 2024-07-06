import React from "react";
import ReactDOM from "react-dom";

const fname = "Aniket";
const lname = "Rajesh";
const num = 9;

// ReactDOM.render(
//   <div>
//     <h1>Hello {name}</h1>
//     <p>My lucky number is {num}.</p>
//   </div>,
//   document.getElementById("root")
// );
// Putting mathematical statements into {}, we can basically write any mathematical expression
// that we want to display on the screen.
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>My lucky number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
// The only problem is that we can write and represent only JS expressions and not
// JS statements.
// Hello {fname+" "+lname}! is another way of writing the same sentence.
