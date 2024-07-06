import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1 style="color:red">Hello World!</h1>, document.getElementById("root"));
// Using the above line of code will give us an error bcos
// we cannot use the syntax of html in JSX, Instead we will have to use:
// If we want to do inline styling then the style elements should be in the
// form of Javascript objects. So in this case: {color:"red"}
// But bcos the above {color:"red"} is interpreted as a Javascript expression, we will
// have to enclose it within another pair of curly braces like:{{color:"red"}} for it to work
// as intended.
// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );
const custStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// Now if at some point I want to change a property I can simply do:
custStyle.color = "blue";
// and the style will change.

ReactDOM.render(
  <h1 style={custStyle}>Hello World!</h1>,
  document.getElementById("root")
);
