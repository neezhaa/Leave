import { createContext, useContext, useState } from "react";
import employeesData from "../data/employees.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = employeesData.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (foundUser) {
      setUser({ ...foundUser });
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
