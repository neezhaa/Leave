import { useState } from "react";
import { useLeaves } from "../context/LeaveContext";
import { useAuth } from "../context/AuthContext";

// Fonction utilitaire pour obtenir le numéro de semaine d'une date donnée
const getWeekNumber = (dateString) => {
  const date = new Date(dateString);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDay.getDay(); // 0 (Dimanche) à 6 (Samedi)
  const adjustedDate = date.getDate() + dayOfWeek;
  return Math.ceil(adjustedDate / 7);
};

const MonthlyLeaveTable = () => {
  const { leaves, employees } = useLeaves();
  const { user } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const currentYear = new Date().getFullYear();

  // Si l'utilisateur est manager, on récupère ses employés gérés
  // Sinon, on prend uniquement l'utilisateur connecté
  const filteredEmployees =
    user.role === "manager"
      ? employees.filter((emp) =>
          user.managedEmployees?.includes(emp.id)
        )
      : employees.filter((emp) => emp.id === user.id);

  // Filtrer les congés du mois sélectionné
  const filteredLeaves = leaves.filter((leave) => {
    const start = new Date(leave.startDate);
    return (
      start.getMonth() + 1 === Number(selectedMonth) &&
      start.getFullYear() === currentYear
    );
  });

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="month" className="mr-2 font-medium">
          Sélectionner le mois :
        </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="border p-1 rounded"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {new Date(currentYear, month - 1).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Employé</th>
              {[1, 2, 3, 4, 5].map((week) => (
                <th key={week} className="border p-2">
                  Semaine {week}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => {
              // Pour chaque employé, filtrer ses demandes pour le mois sélectionné
              const employeeLeaves = filteredLeaves.filter(
                (leave) => leave.employeeId === employee.id
              );
              // Regrouper par semaine
              const weeksData = {};
              employeeLeaves.forEach((leave) => {
                const week = getWeekNumber(leave.startDate);
                if (!weeksData[week]) {
                  weeksData[week] = [];
                }
                weeksData[week].push(leave);
              });

              return (
                <tr key={employee.id}>
                  <td className="border p-2">{employee.name}</td>
                  {[1, 2, 3, 4, 5].map((week) => (
                    <td key={week} className="border p-2">
                      {weeksData[week] ? (
                        weeksData[week].map((leave) => (
                          <div
                            key={leave.id}
                            className={`p-1 mb-1 text-sm rounded ${
                              leave.status === "Approuvé"
                                ? "bg-green-200"
                                : leave.status === "Refusé"
                                ? "bg-red-200"
                                : "bg-yellow-200"
                            }`}
                          >
                            {leave.startDate} - {leave.endDate} (
                            {leave.status})
                          </div>
                        ))
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyLeaveTable;
