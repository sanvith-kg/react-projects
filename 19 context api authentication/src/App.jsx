import React from "react";
import AuthContext from "./AuthContext";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <AuthContext>
        <Home />
      </AuthContext>
    </div>
  );
};

export default App;
