import { configureStore } from "@reduxjs/toolkit";
import attendanceReducer from "./attendanceSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    auth: authReducer,
  },
});

export default store;
