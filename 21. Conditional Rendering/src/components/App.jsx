import React from "react";
import Login from "./Login";
// In the basic form at we will use a variable condition and function
var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello User</h1>;
//   } else {
//     return <Login />;
//   }
// }
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello User</h1> : <Login />}
    </div>
  );
}

export default App;
