import React from "react";
import { useState } from "react";

const App = () => {
  const [inp, setinp] = useState("Home");
  return (
    <div>
      <button onClick={() => setinp("Home")}>Home</button>
      <button onClick={() => setinp("About")}>About</button>
      <button onClick={() => setinp("Contact")}>Contact</button>
      {inp === "Home" && <h1>This is the home page</h1>}
      {inp === "About" && <h1>This is the About page</h1>}
      {inp === "Contact" && <h1>This is the Contact page</h1>}
    </div>
  );
};

export default App;
