// Import Modules
import React from "react";
import "/public/styles.css";

// Constants & Variables
const food1 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_960_720.jpg";
const food2 =
  "https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg";
const food3 =
  "https://media.istockphoto.com/photos/red-iron-pot-with-farofa-traditional-brazilian-food-on-a-dark-picture-id1329420681?b=1&k=20&m=1329420681&s=170667a&w=0&h=oT7-ZVpL9T5Eca9g7PLIP0DoV0UI91vSJrjIHJdJoRQ=";

// Render
function Title() {
  return (
    <h2 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h2>
  );
}

function Items() {
  return (
    <div>
      <img alt="broccoli" height="50%" width="50%" src={food1} />
      <img alt="fish" height="50%" width="50%" src={food2} />
      <img alt="farofa" height="50%" width="50%" src={food3} />
    </div>
  );
}

// Exports
export { Title };
export { Items };
