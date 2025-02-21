import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
// import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>
  )
}

export default App








// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { loadInitialData } from "./redux/attendanceSlice";
// import data from "./data.json";

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const attendanceData = localStorage.getItem("attendanceData");
//     if (!attendanceData) {
//       dispatch(loadInitialData(data)); // Charger les données initiales
//     }
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <h1 className="text-center text-2xl font-bold my-4">Gestion des Absences</h1>
//       {/* Inclure les composants ici */}
//     </div>
//   );
// };

// export default App;








// ##############################################################






