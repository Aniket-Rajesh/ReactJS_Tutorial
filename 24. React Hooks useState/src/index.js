import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";
import App from "./components/App";

// var count = 0;

// function increase() {
//   count++;
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

// As we see the code below is for rendering.
// So we can't actually make any changes to it.
// One way of solving this problem would be to re-render it inside the function.
// But that is simply a functional way of getting what we want, not the optimal one.
// We can solve this problem using hooks.
// But one of the rules of using a hook is that it must be used within a
// functional component, in this case:App
//
ReactDOM.render(<App />, document.getElementById("root"));
