// Trying it out while learning:

import animals from "./data";

// console.log(animals);

const [cat, dog] = animals;
// Right now bcos animals is actually an array of objects,we can use it this way.
const {
  name,
  sound,
  feedingreq: { food, water },
} = cat;
console.log(food);
// But bcos cat itaself is an object, if we want access to the values
// stored within cat we will have to pass the names as an array.
//
// console.log(cat)
// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
