// import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage = () => {
//   const data = localStorage.getItem("attendanceData");
//   return data ? JSON.parse(data) : { employees: [] };
// };

// const saveToLocalStorage = (data) => {
//   localStorage.setItem("attendanceData", JSON.stringify(data));
// };

// const attendanceSlice = createSlice({
//   name: "attendance",
//   initialState: loadFromLocalStorage(),
//   reducers: {
//     updateAttendance(state, action) {
//       const { employeeId, date, status, managerId } = action.payload;
//       const employee = state.employees.find((e) => e.id === employeeId);
//       if (!employee.attendance[date]) {
//         employee.attendance[date] = {};
//       }
//       employee.attendance[date][managerId] = status;
//       saveToLocalStorage(state); // Sauvegarder après chaque modification
//     },
//     loadInitialData(state, action) {
//       state.employees = action.payload;
//       saveToLocalStorage(state); // Sauvegarder les données initiales
//     },
//   },
// });

// export const { updateAttendance, loadInitialData } = attendanceSlice.actions;
// export default attendanceSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

// Charger les données depuis localStorage au démarrage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("attendance");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (e) {
    console.error("Erreur lors du chargement des absences :", e);
    return {};
  }
};

// Sauvegarder les données dans localStorage
const saveState = (state) => {
  try {
    localStorage.setItem("attendance", JSON.stringify(state));
  } catch (e) {
    console.error("Erreur lors de la sauvegarde des absences", e);
  }
};

const initialState = loadState();

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    recordAttendance: (state, action) => {
      const { employeeId, date, status, exitTime, managerId } = action.payload;
      if (!state[employeeId]) {
        state[employeeId] = {};
      }
      state[employeeId][date] = { status, exitTime, managerId };
      saveState(state); // Sauvegarde dans localStorage
    },
  },
});

export const { recordAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
