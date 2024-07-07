import React from "react";
import ReactDOM from "react-dom";
// The main reason we are looking at this is because we often find
// it easier if the code is modularized.
// Step 1:
import Pi, { doublePi, triplePi } from "./math.js";
// Now because Pi is the default export of math.js we can use any
// identifier like pi,PI,Pi,pI, etc.
// But because the other data being exported is not default we will have to
// use the same names that we used in math.js if we want to access those values.

// Step 2:
// Another way of writing the above line of code would be to write it as:
import * as pi from "./math";

// Step 1:
ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// Step 2:
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
// Now in the above lines we have to remember that because doublePi and triplePi
// return values they have to be enclosed within {} as the browser will
// interpret them as expressions.
// But at the same time bcos they are functions we will have to add parentheses
// at the end of each function call.
