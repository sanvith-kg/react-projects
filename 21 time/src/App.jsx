import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hour=time.getHours()
  const minutes=time.getMinutes()
  const seconds=time.getSeconds()
  return (
    <div>
      <div>
        <h1>{hour}</h1>
        <h1>{minutes}</h1>
        <h1>{seconds}</h1>
      </div>
    </div>
  );
};

export default App;
