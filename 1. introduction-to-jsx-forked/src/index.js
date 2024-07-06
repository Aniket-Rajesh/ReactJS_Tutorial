import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(What to show, where to show it);
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
// The aabove code is for rendering only one statement on the screen.
// If we want to render more, we use div

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);
