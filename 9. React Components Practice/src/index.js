import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./Heading.jsx";
// import List from "./List.jsx";
// What you see above is the most basic approach.
// Most professional web developers tend to call only one single file as shown below:
import App from "./components/App.jsx";

// The more you scroll through the code, the lesser you understand it.
// For this reason we have components in React that enable us to keep
// our code structured,simple and understandable.

// function Heading() {
//   return <h1>My Favourite Foods</h1>;
// }
// See how replacing the header tags with the Heading function works.
// We just hav eto enclose the function name in the opening and closing tags.
// But then again it is still in index.js
// For that reason we will create a new file in src folder and then do the inporting
// in the index.js file.

ReactDOM.render(
  <div>
    {/* <Heading></Heading>
    <List /> */}
    <App />
  </div>,
  document.getElementById("root")
);

// Now what we see in the directory structure is only for basic projects
// As the complexity of the project increases, the no. of components will
// also increase.
// For this purpose, it is considered a good practice to have a separate
// directory meant to only store components.
