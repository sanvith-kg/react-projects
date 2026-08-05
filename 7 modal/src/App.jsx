import React from "react";
import { useState } from "react";

const App = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <button onClick={() => setshow(true)}>Show Modal</button>
      {show && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
        >
          <div
            style={{
              background: "white",
              width: "300px",
              margin: "100px auto",
              padding: "20px",
            }}
          >
            <h1>hello</h1>
            <button onClick={() => setshow(false)}>Hide Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
