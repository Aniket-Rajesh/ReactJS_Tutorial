import React from "react";

function App() {
  const [fullName, setFullname] = React.useState({
    fName: "",
    lName: "",
  });
  // const [fName, setfname] = React.useState("");
  // const [lName, setlname] = React.useState("");

  // function handleFname(event) {
  //   setfname(event.target.value);
  // }
  function handleFullName(event) {
    const newval = event.target.value;
    const inputName = event.target.name;
    // The line above is for pointing out which entry changed.
    // This way if only the 1st name changes then the value of the last Name
    // will remain as it is.
    // now the straight forward approach would be to setFullNmae as it is
    // but on doing that if I set just the fname then the lname gets deleted and vice-versa
    // For this reason, we will pass a function where we get the previous value
    // of our variable and only update the changed portion.
    setFullname((prevValue) => {
      if (inputName === "fName")
        return {
          fName: newval,
          lName: prevValue.lName,
        };
      else if (inputName === "lName")
        return { fName: prevValue.fName, lName: newval };
    });
  }
  // function handleLname(event) {
  //   setlname(event.target.value);
  // }

  return (
    <div className="container">
      <h1>
        {/* Hello {fName} {lName} */}
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          type="text"
          name="fName"
          onChange={handleFullName}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          type="text"
          name="lName"
          onChange={handleFullName}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
// Complex states are when we need to be able to retrieve the previous value
// of our targeted variable as well.
// The easiest way would be to simply set 2 different state variables.
// As we can see the code simply gets too tedious. for  that reason,
// we make changes where both the first and the last name are simply associated with
// a single variable.
