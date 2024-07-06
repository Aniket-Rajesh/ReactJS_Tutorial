//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Aniket";
const lname = "Rajesh";
ReactDOM.render(
  <div>
    <p>Created by {`${fname} ${lname}`}.</p>
    <p>Copyright {new Date().getFullYear()}.</p>
  </div>,
  document.getElementById("root")
);
