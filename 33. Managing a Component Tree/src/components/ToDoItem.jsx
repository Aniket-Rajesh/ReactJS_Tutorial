import React from "react";

// function ToDoItem(props) {
//   const [isDone, setIsDone] = React.useState(false);
//   function handleClick() {
//     setIsDone((prevValue) => !prevValue);
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.text}
//       </li>
//     </div>
//   );
// }

export default ToDoItem;
// The current ToDoItem is a stateless component as it is not trying to
// change the state of the component.
// This is because we cannot modify our props
// as they are read only.
// Striking things that have been done are all well and good.
// But how do we ensure that once a task has been completed, we are able to
// strike it out from the array of items in App.jsx?
// Check the code below for that.
// It is not necessary that we only pass data or values through props.
// We can also pass functions through it.
function ToDoItem(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>
    </div>
  );
}
// We have to write a function for onClick bcos that is the only way we can pass
// data back to the App.jsx
