import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const Fruits = ["Apple", "Banana", "Mango", "Coconut", ...citrus];
// const Fruits = ["Apple", ...citrus, "Banana", "Mango", "Coconut"];
// Now if we go by this arrangement, we have the contents of citrus array
// coming before Banana.
// console.log(Fruits);

// const citrus = ["Lime", "Lemon", "Orange"];
// const Fruits=["Apple","Banana","Mango","Coconut"];
// Now this is the original arrays.
// Now what if I want to add the contents of the citrus array into the
// Fruits array.Here is where we make use of the spread operator.
// The spread operator syntax is ...
// Now look at the console, we have added all the elements in citrus to
// Fruits which is what we wanted.

// We can also use this on objects
const fullname = {
  fName: "James",
  lName: "Bond",
};

const user = {
  id: 1,
  ...fullname,
  username: "jamesbond007",
};
// console.log(user);
// And voila it works.
// Now we do the same in App.jsx
