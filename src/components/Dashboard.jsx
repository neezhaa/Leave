import RequestLeave from "../components/RequestLeave";
import LeaveRequests from "../components/LeaveRequests";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RequestLeave />
        <LeaveRequests />
      </div>
    </div>
  );
};

export default Dashboard;
