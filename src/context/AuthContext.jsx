import { createContext, useContext, useState } from "react";
import employeesData from "../data/employees.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  
  const login = (email, password) => {
    const foundUser = employeesData.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (foundUser) {
      setUser({ ...foundUser });
    } else {
      setError("Email ou mot de passe incorrect.");
      setLoading(false)
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
