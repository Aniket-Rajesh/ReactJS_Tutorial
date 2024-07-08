import React from "react";
import Card from "./Card";
import contacts from "../contacts";

{
  /* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      /> */
}
// As you can see above how many times the code gets repeated for a
// simple allotment of data to each react component.
// While React Props does make it easy for us to code, when used for
// components with a higher count, it doesn't really match the use.
// For that purpose, we will now be using loops for our needs.

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
// Every time we use a map we have to make sure that the data
// being passed over has to have a unique property.
// The key property is something expected by React.
// The syntax of using a map property is to pass a function within a function.
// In this case, we pass createCard as the function for each individual contact.

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
