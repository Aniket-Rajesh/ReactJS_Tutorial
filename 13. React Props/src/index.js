import React from "react";
import ReactDOM from "react-dom";

// Now as we see below the code is repetitive and long and doesn't really match our perception of React.
// To make the code simpler we will use React Props.

// function Card(){
//   return <div><h2>Beyonce</h2>
//   <img
//     src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//     alt="avatar_img"
//   />
//   <p>+123 456 789</p>
//   <p>b@beyonce.com</p>
// </div>
// }
// In the above function again a problem arises that is the function has hardcoded values which we do not want.
// If only there was a way to pass user values to the function.
// Oh wait there is:
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {/* Now using the above line of code,we passed a value to the function */}
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.emailid}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      emailid="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      emailid="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      emailid="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);

// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// React Props are like function arguments in JavaScript and attributes in HTML.
