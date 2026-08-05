import React from "react";
import { useContext } from "react";
import { auth } from "./AuthContext";

const Home = () => {
  const { user, login, logout } = useContext(auth);
  return (
    <div>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <h2>Welcome {user}</h2>
        </>
      ) : (
        <>
          <button onClick={() => login("Sanvith")}>Login</button>
          <h2>Please Login</h2>
        </>
      )}
    </div>
  );
};

export default Home;
