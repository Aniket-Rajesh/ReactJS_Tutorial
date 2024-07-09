import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  let [time, settime] = React.useState(now);
  setInterval(re, 1000);
  function re() {
    const newtime = new Date().toLocaleTimeString();
    settime(newtime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={re}>Get Time</button>
    </div>
  );
}

export default App;
