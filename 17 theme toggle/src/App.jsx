import React from "react";
import { useState } from "react";

const App = () => {
  const [dark, setdark] = useState(false);
  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        width: "100%",
      }}
    >
      <button onClick={() => setdark(!dark)}>Theme Toggel</button>
      <h1>Hello User</h1>
    </div>
  );
};

export default App;
