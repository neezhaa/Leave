import { useState } from "react";
import { useLeaves } from "../context/LeaveContext";
import { useAuth } from "../context/AuthContext";

const RequestLeave = () => {
  const { addLeave } = useLeaves();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      alert("Veuillez sélectionner des dates.");
      return;
    }

    const newLeave = {
      id: Date.now(), // Génération d'un ID unique
      employeeId: user.id,
      startDate,
      endDate,
      status: "En attente",
    };

    addLeave(newLeave);
    setStartDate("");
    setEndDate("");
    alert("Demande envoyée !");
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Demande de congé</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label>
          Date de début :
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <label>
          Date de fin :
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Soumettre la demande
        </button>
      </form>
    </div>
  );
};

export default RequestLeave;
