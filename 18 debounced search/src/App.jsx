import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [inp, setinp] = useState("");
  const [text, settext] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      settext(inp);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inp]);

  return (
    <div>
      <input
        placeholder="Search..."
        value={inp}
        onChange={(e) => setinp(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <h2>Searching: {text}</h2>
    </div>
  );
};

export default App;
