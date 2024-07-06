import React from "react";
import ReactDOM from "react-dom";
// So far all the websites we built looked plain. The reason for
// that is the fact that there is no CSS involved.
// We can resolve this by simply adding some css in the styles.css
// Another thing we need to remember is that we use className instead
// of class. We use class only for HTML and CSS.
// className is used for React.
// Another change has been made in the index.html file.
// Another point to remember is that most of the HTML attributes are simple
// in their naming conventions like contenteditable or spellcheck.
// The moment they get converted to JSX, we have to camel-case the netire name.
// Like contenteditable in html becomes contentEditable in JSX.
// Similarly spellcheck in HTML becomes spellCheck in JSX.
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    {/* <div>
      <img
        className="food-img"
        src="https://miro.medium.com/v2/resize:fit:1400/1*eGylbteKGLepWGU0HNJAKw.jpeg"
        alt="pav bhaji"
      />
      <img
        className="food-img"
        src="https://myfoodstory.com/wp-content/uploads/2022/01/Misal-Pav-1.jpg"
        alt="misal pav"
      />
      <img
        className="food-img"
        src="https://cdn.cdnparenting.com/articles/2020/03/07132448/Spring-Onion-Thalipeeth-Recipe.webp"
        alt="thalipeeth"
      />
    </div> */}
    <img src={img} />
  </div>,
  document.getElementById("root")
);
// Above in the last example we have to remember to add the closing tag
// otherwise our JSX code will not work
// We can only write the image tag without the closing slash in html
// as html can be said to be really forgiving but the same is not true for
// JSX.
