import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeading] = React.useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick} action="">
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
//Just like we have onClick,onMouseOver and onMouseOut for buttons,
// similarly we have events like onChange for input controls in the
// React forms.
// In event.target.value : event is used to describe the event that triggered
// the event, the target is used to refer to the variable that triggered the event
// and value is used to refer to the changed value of the variable.

// The reason we have used a event.preventDefault is because every time we
// submit a form , the formn tends to refresh and we lose our work.
