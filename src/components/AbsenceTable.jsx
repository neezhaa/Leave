import { useState } from "react";
import StatusChangeModal from "./StatusChangeModal";

const AbsenceTable = ({ employees, loggedInResponsable, handleStatusChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  const handleOpenModal = (employeeId, date) => {
    setCurrentEmployeeId(employeeId);
    setCurrentDate(date);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Nom</th>
            <th className="border p-2">Lun.</th>
            <th className="border p-2">Mar.</th>
            <th className="border p-2">Mer.</th>
            <th className="border p-2">Jeu.</th>
            <th className="border p-2">Ven.</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className={employee.conges.includes("2025-02-10") ? "bg-yellow-200" : ""}
            >
              <td className="border p-2">{employee.nom}</td>
              {employee.statuts.map((status, index) => (
                <td
                  key={index}
                  className={`border p-2 cursor-pointer ${
                    status.statut === "Absent"
                      ? "bg-red-300"
                      : status.statut === "Présent"
                      ? "bg-green-300"
                      : status.statut === "En retard"
                      ? "bg-orange-300"
                      : status.statut === "En sortie autorisée"
                      ? "bg-blue-300"
                      : ""
                  }`}
                  onClick={() => handleOpenModal(employee.id, status.date)}
                >
                  {status.statut}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <StatusChangeModal
          employeeId={currentEmployeeId}
          date={currentDate}
          loggedInResponsable={loggedInResponsable}
          handleClose={handleCloseModal}
          handleStatusChange={handleStatusChange}
        />
      )}
    </>
  );
};

export default AbsenceTable;
