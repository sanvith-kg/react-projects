import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [n_error, set_n_error] = useState("");
  const [e_error, set_e_error] = useState("");

  const sub = (e) => {
    e.preventDefault();
    set_e_error("");
    set_n_error("");

    let valid = true;

    if (name === "") {
      set_n_error("name is required");
      valid = false;
    }
    if (!email.includes("@")) {
      set_e_error("email is invalid");
      valid = false;
    }

    if (valid) {
      alert("Submitted");
    }
  };
  return (
    <div>
      <div className="form">
        <form action="" onSubmit={sub}>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            name=""
            id=""
            value={name}
            placeholder="Enter Name"
          />
          <h1>{n_error}</h1>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            name=""
            id=""
            value={email}
            placeholder="Enter Email"
          />
          <h1>{e_error}</h1>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
