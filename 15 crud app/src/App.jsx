import React, { useState } from "react";

const App = () => {
  const [inp, setinp] = useState("");
  const [cart, setcart] = useState([]);

  const add = () => {
    if (inp.trim() === "") return;

    setcart([...cart, inp]);
    setinp("");
  };

  const del = (i) => {
    const newData = [...cart];
    newData.splice(i, 1);
    setcart(newData);
  };

  const edit = (i) => {
    const value = prompt("Edit", cart[i]);

    if (value) {
      const copy = [...cart];
      copy[i] = value;
      setcart(copy);
    }
  };
  return (
    <div>
      <input type="text" value={inp} onChange={(e) => setinp(e.target.value)} />
      <button onClick={add}>Add To Cart</button>
      {cart.map((ele, i) => (
        <div key={i}>
          <h3>
            {ele}
            <button onClick={() => edit(i)}>Edit Item</button>
            <button onClick={() => del(i)}>Delete Item</button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default App;
