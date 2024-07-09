import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
// Here we are creating a login flow.
//Like for example if our visitor was not logged in then we would show
// a login screen.
// But if they were logged in, we would show them a different view.
//This is called conditional rendering.
