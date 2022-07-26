// Import Modules
import React from "react";
import ReactDOM from "react-dom";

// Constants & Variables
const today = new Date();
const time = today.getHours();

let greeting;

const food1 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_960_720.jpg";
const food2 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg";
const food3 =
  "https://media.istockphoto.com/photos/red-iron-pot-with-farofa-traditional-brazilian-food-on-a-dark-picture-id1329420681?b=1&k=20&m=1329420681&s=170667a&w=0&h=oT7-ZVpL9T5Eca9g7PLIP0DoV0UI91vSJrjIHJdJoRQ=";

// Dynamic CSS
const customStyle = {
  color: ""
};

// Render

if (time >= 0 && time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Evening";
  customStyle.color = "green";
} else {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div className="App">
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <h2 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h2>
    <div>
      <img alt="broccoli" className="fimage" src={food1} />
      <img alt="fish" className="fimage" src={food2} />
      <img alt="farofa" className="fimage" src={food3} />
    </div>
  </div>,
  document.getElementById("root")
);
