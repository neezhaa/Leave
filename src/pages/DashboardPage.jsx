import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LeaveRequests from "../components/LeaveRequests";
// import MonthlyLeaveTable from "../components/MonthlyLeaveTable";
import RequestLeave from "../components/RequestLeave";
import Sidebar from "../components/sidebar";

const DashboardPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showRequestModal, setShowRequestModal] = useState(false);

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <Sidebar/>
    <div className="bg-[#f0f5f9] h-screen pl-20 p-6">
      <h1 className="text-xl font-bold">Bienvenue, {user.name}</h1>
      

      <div className="mt-6">
        {user.role === "manager" ? (
          <>
            <LeaveRequests />
            {/* <MonthlyLeaveTable /> */}
          </>
        ) : (
          <>
            {/* Pour un employé, filtrer ses demandes dans LeaveRequests */}
            <LeaveRequests employeeId={user.id} />
            <button
              onClick={() => setShowRequestModal(true)}
              className="mt-4 bg-blue-500 text-white p-2 rounded"
            >
              Demander un congé
            </button>
          </>
        )}
      </div>

      {showRequestModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowRequestModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <RequestLeave />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default DashboardPage;
