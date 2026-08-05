import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;
    if (light === "red") {
      timer = setTimeout(() => setLight("yellow"), 2000);
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("green"), 2000);
    } else {
      timer = setTimeout(() => setLight("red"), 3000);
    }
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="box">
      <div className={light === "red" ? "red active" : "red"}></div>
      <div className={light === "yellow" ? "yellow active" : "yellow"}></div>
      <div className={light === "green" ? "green active" : "green"}></div>
    </div>
  );
};

export default App;
