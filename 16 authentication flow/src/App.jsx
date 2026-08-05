import React, { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Logged In..</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
