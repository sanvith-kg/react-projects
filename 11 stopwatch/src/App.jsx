import React, { useEffect, useState } from "react";

const App = () => {
  const [time, settime] = useState(0);
  const [running, setrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        settime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={() => setrunning(true)}>start</button>
      <button onClick={() => setrunning(false)}>stop</button>
      <button
        onClick={() => {
          (setrunning(false), settime(0));
        }}
      >
        reset
      </button>
    </div>
  );
};

export default App;
