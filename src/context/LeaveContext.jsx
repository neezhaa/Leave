import { createContext, useContext, useState, useEffect } from "react";
import leavesData from "../data/leaves.json";
import employeesData from "../data/employees.json";

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [employees] = useState(employeesData);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const storedLeaves = localStorage.getItem("leaves");
    if (storedLeaves) {
      setLeaves(JSON.parse(storedLeaves));
    } else {
      setLeaves(leavesData);
      localStorage.setItem("leaves", JSON.stringify(leavesData));
    }
  }, []);

  const updateLocalStorage = (updatedLeaves) => {
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
  };

  const addLeave = (newLeave) => {
    const updatedLeaves = [...leaves, newLeave];
    setLeaves(updatedLeaves);
    updateLocalStorage(updatedLeaves);
  };

  const updateLeaveStatus = (id, status) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status } : leave
    );
    setLeaves(updatedLeaves);
    updateLocalStorage(updatedLeaves);
  };

  return (
    <LeaveContext.Provider value={{ leaves, employees, addLeave, updateLeaveStatus }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaves = () => useContext(LeaveContext);
