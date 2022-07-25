// Import Modules
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/'

// Constants
const food1 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_960_720.jpg";
const food2 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg";
const food3 =
  "https://media.istockphoto.com/photos/red-iron-pot-with-farofa-traditional-brazilian-food-on-a-dark-picture-id1329420681?b=1&k=20&m=1329420681&s=170667a&w=0&h=oT7-ZVpL9T5Eca9g7PLIP0DoV0UI91vSJrjIHJdJoRQ=";

// Document Render, Front-End
const container = document.getElementById('app')
const root = createRoot(container)
ReactDOM.render(
  <div className="App">
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt="broccoli" className="food-img" src={food1} />
      <img alt="fish" className="food-img" src={food2} />
      <img alt="farofa" className="food-img" src={food3} />
    </div>
  </div>,
  document.getElementById("root")
);

// Export
export default function App() {
  return <div></div>
}
