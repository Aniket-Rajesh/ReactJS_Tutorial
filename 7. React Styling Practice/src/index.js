//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let greeting = "";
let dat = new Date(2024, 1, 1, 10);
const shade = { color: "red" };

if (dat.getHours() < 12) {
  greeting = "Good Morning";
} else if (dat.getHours() < 18) {
  greeting = "Good Afternoon";
  shade.color = "green";
} else {
  greeting = "Good evening";
  shade.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={shade}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
