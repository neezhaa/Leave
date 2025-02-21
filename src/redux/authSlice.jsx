import data from '../data.json'
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      // Vérification basique pour ce projet
      const user = data.managers.find(
        (manager) => manager.username === username && manager.password === password
      );
      if (user) {
        state.user = user;
        window.location.href = "/";

      } else {
        alert("Invalid credentials");
      }
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;











// // src/redux/authSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// // Initialisation de l'état (utilisateur non connecté)
// const initialState = {
//   managerId: null,
//   managerName: "",
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       const { managerId, managerName } = action.payload;
//       state.managerId = managerId;
//       state.managerName = managerName;
//     },
//     logout: (state) => {
//       state.managerId = null;
//       state.managerName = "";
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
