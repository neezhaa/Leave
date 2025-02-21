import { useLeaves } from "../context/LeaveContext";
import { useAuth } from "../context/AuthContext";

const LeaveRequests = ({ employeeId }) => {
  const { leaves, employees, updateLeaveStatus } = useLeaves();
  const { user } = useAuth();

  // Si une prop employeeId est fournie, on filtre uniquement pour cet employé
  const filteredLeaves = employeeId
    ? leaves.filter((leave) => leave.employeeId === employeeId)
    : leaves;

  // Pour manager, on récupère les employés gérés
  const managedEmployeeIds = user.managedEmployees || [];

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">Demandes de congés</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Employé</th>
            <th className="border p-2">Début</th>
            <th className="border p-2">Fin</th>
            <th className="border p-2">Statut</th>
            {user.role === "manager" && <th className="border p-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredLeaves.map((leave) => {
            const employee = employees.find((e) => e.id === leave.employeeId);
            // Pour manager, vérifier que l'employé est géré par le manager connecté
            const isManagedByCurrentManager =
              user.role === "manager"
                ? managedEmployeeIds.includes(leave.employeeId)
                : true;

            return (
              <tr key={leave.id} className="text-center">
                <td className="border p-2">{employee ? employee.name : "Inconnu"}</td>
                <td className="border p-2">{leave.startDate}</td>
                <td className="border p-2">{leave.endDate}</td>
                <td
                  className={`border p-2 ${
                    leave.status === "Approuvé"
                      ? "text-green-500"
                      : leave.status === "Refusé"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {leave.status}
                </td>
                {user.role === "manager" && (
                  <td className="border p-2">
                    {isManagedByCurrentManager ? (
                      <>
                        <button
                          onClick={() => updateLeaveStatus(leave.id, "Approuvé")}
                          className="bg-green-500 text-white px-2 py-1 rounded mx-1"
                        >
                          Approuver
                        </button>
                        <button
                          onClick={() => updateLeaveStatus(leave.id, "Refusé")}
                          className="bg-red-500 text-white px-2 py-1 rounded mx-1"
                        >
                          Refuser
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500 text-sm">Non autorisé</span>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;
