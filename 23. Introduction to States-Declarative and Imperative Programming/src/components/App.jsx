import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}
// The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.
function App() {
  // var isstruck = true;
  const struckThrough = { textDecoration: "line-through" };
  // return <p style={isstruck ? struckThrough : null}>Buy Milk</p>;
  return (
    <div>
      <p style={isDone ? { struckThrough } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}
// This code should theoretically work but it won't bcos it has to be rendered on a screen
// And the code that is to be rendered on a screen can't be changeable.
export default App;
