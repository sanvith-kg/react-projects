import React from "react";
import { useState } from "react";
const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1016/500/300",
  "https://picsum.photos/id/1018/500/300",
];
const App = () => {
  const [index, setindex] = useState(0);

  const next = () => {
    setindex((index + 1) % images.length);
  };
  const prev = () => {
    setindex((index - 1 + images.length) % images.length);
  };
  return (
    <div>
      <h1>Slider</h1>
      <img src={images[index]} alt="slider" width="500" />
      <br></br>
      <button onClick={next}>next</button>
      <button onClick={prev}>prev</button>
    </div>
  );
};

export default App;
