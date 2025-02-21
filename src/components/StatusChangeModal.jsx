import { useState } from "react";

const StatusChangeModal = ({
  employeeId,
  date,
  loggedInResponsable,
  handleClose,
  handleStatusChange,
}) => {
  const [newStatus, setNewStatus] = useState("Présent");
  const [heureSortie, setHeureSortie] = useState("");

  const handleSubmit = () => {
    handleStatusChange(employeeId, date, newStatus, heureSortie);
    handleClose();
  };

  return (
    <div className="modal bg-white p-6 rounded-lg shadow-md fixed top-1/4 left-1/2 transform -translate-x-1/2 w-1/3">
      <h3 className="text-xl mb-4">Changer le statut pour {date}</h3>
      <div className="mb-4">
        <label>Status:</label>
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="form-select mt-1 block w-full p-2 border rounded"
        >
          <option value="Présent">Présent</option>
          <option value="Absent">Absent</option>
          <option value="En retard">En retard</option>
          <option value="En sortie autorisée">En sortie autorisée</option>
        </select>
      </div>
      {newStatus === "En sortie autorisée" && (
        <div className="mb-4">
          <label>Heure de sortie:</label>
          <input
            type="time"
            value={heureSortie}
            onChange={(e) => setHeureSortie(e.target.value)}
            className="form-input mt-1 block w-full p-2 border rounded"
          />
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Valider
        </button>
        <button
          onClick={handleClose}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default StatusChangeModal;
