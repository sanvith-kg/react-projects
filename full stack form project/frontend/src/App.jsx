import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState([]);

  //get
  const task = async () => {
    const dt = await axios.get("http://localhost:3000/user");
    setdata(dt.data.data);
  };
  useEffect(() => {
    task();
  }, []);

  //delete
  const del = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
  };

  //post
  const [inp, setinp] = useState({ name: "", email: "", contact: "" });
  const change = (e) => {
    setinp({ ...inp, [e.target.name]: e.target.value });
  };

  //submit
  const sub = async () => {
    await axios.post("http://localhost:3000/user/", inp);
    setinp({
      name: "",
      email: "",
      contact: "",
    });
  };
  return (
    <div>
      <div className="input">
        <input
          onChange={change}
          type="text"
          name="name"
          id=""
          placeholder="enter name"
        />
        <input
          onChange={change}
          type="email"
          name="email"
          id=""
          placeholder="enter email"
        />
        <input
          onChange={change}
          type="text"
          name="contact"
          id=""
          placeholder="enter contact"
        />
        <button onClick={sub}>Submit</button>
      </div>
      {data.map((ele, i) => {
        return (
          <div className="cards" key={i}>
            <h1>{ele.name}</h1>
            <h1>{ele.email}</h1>
            <h1>{ele.contact}</h1>
            <button onClick={() => del(ele._id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
