// Import Modules
import React from "react";
import * as FoodList from "./FoodList";

// Constants & Variables
const today = new Date();
const time = today.getHours();
const customStyle = {
  color: ""
};
let greeting;

// Dynamic Title Setup
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

// App
function App() {
  return (
    <div className="App">
      <h1 style={customStyle}>{greeting}</h1>
      <FoodList.Title />
      <FoodList.Items />
    </div>
  );
}

export default App;
