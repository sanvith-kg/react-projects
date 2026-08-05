import React, { useState } from "react";
import { createContext } from "react";

export const auth = createContext();
const AuthContext = ({ children }) => {
  const [user, setuser] = useState(null);

  const login = (username) => {
    setuser(username);
  };

  const logout = () => {
    setuser(null);
  };
  return (
    <div>
      <auth.Provider value={{ user, login, logout }}>{children}</auth.Provider>
    </div>
  );
};

export default AuthContext;
