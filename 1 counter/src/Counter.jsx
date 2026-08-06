import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setcount] = useState(0);

  const inc = () => {
    setcount(count + 1);
    if (count >= 10) {
      alert("Count can't be more than 10...");
      setcount(10);
    }
  };
  const dec = () => {
    setcount(count - 1);
    if (count <= 0) {
      alert("Count can't be less than 0...");
      setcount(0);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="count">
          <h1>Count : {count}</h1>
        </div>
        <div className="btn">
          <button onClick={inc}>Increment</button>
          <button onClick={dec}>Decrement</button>
          <button
            style={{ backgroundColor: "#475569" }}
            onClick={() => {
              setcount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
