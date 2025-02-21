import { useState, useEffect } from "react";
import AbsenceTable from "../components/AbsenceTable";
import data from "../data.json";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  const [loggedInResponsable, setLoggedInResponsable] = useState(null);



  useEffect(() => {
    const responsable = JSON.parse(localStorage.getItem("loggedIn"));
    setLoggedInResponsable(responsable);
  }, []);

  const handleStatusChange = (employeeId, date, newStatus, heureSortie) => {
    const updatedData = [...data.employes];
    const employee = updatedData.find((e) => e.id === employeeId);
    const statuts = employee.statuts.map((s) =>
      s.date === date
        ? {
            ...s,
            statut: newStatus,
            heure_sortie: heureSortie || s.heure_sortie,
            responsable: loggedInResponsable.id,
          }
        : s
    );
    employee.statuts = statuts;

    // Save the updated data to localStorage
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  return (
    <div className="app-container">
      <Sidebar/>
      <div className="container mx-auto pl-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Tableau de Suivi des Absences</h1>
        {loggedInResponsable && (
          <AbsenceTable
            employees={data.employes}
            loggedInResponsable={loggedInResponsable}
            handleStatusChange={handleStatusChange}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;




// function Dashboard() {
//     const logout = (e) => {
//         e.preventDefault()
//         localStorage.removeItem("loggedIn");
//         window.location.href = "/login";
//       };
//   return (
//     <div className="min-h-screen bg-gray-100 p-1">
//         <Header />
//         <AbsenceTable/>
//     </div>
//   )
// }

// export default Dashboard