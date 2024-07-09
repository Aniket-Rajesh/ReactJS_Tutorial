import React from "react";

function App() {
  const [lis, setlis] = React.useState("");
  const [items, setItems] = React.useState([]);

  function updateLis(event) {
    const newvalue = event.target.value;
    setlis(newvalue);
  }

  function addItem() {
    setItems((prev) => {
      return [...prev, lis];
    });
    setlis("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateLis} value={lis} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
