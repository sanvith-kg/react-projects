import React from "react";
import { useState } from "react";
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];
const App = () => {
  const [cart, setcart] = useState([]);

  const addToCart = (product) => {
    let newItem = [...cart];
    newItem.push(product);
    setcart(newItem);
  };

  const del = (d) => {
    let rem = [...cart];
    rem.splice(d, 1);
    setcart(rem);
  };

  const total = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div>
      <h1>Items List</h1>
      {products.map((item, i) => {
        return (
          <div key={i}>
            <p>
              {item.name} - {item.price}$
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </p>
          </div>
        );
      })}

      <hr />

      <h1>Cart Items</h1>
      {cart.map((ele, i) => {
        return (
          <div key={i}>
            <p>
              {ele.name} - {ele.price}$
              <button onClick={() => del(i)}>Remove From Cart</button>
            </p>
          </div>
        );
      })}
      <hr />
      <h3>Total: {total}$</h3>
    </div>
  );
};

export default App;
