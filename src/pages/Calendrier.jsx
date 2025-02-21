import MonthlyLeaveTable from "../components/MonthlyLeaveTable";
import Sidebar from "../components/sidebar";

function Calendrier() {
  return (
    <div>
      <Sidebar />
      <div className="bg-[#f0f5f9] h-screen pt-20 pl-20 p-6">
        <MonthlyLeaveTable />
      </div>
    </div>
  );
}

export default Calendrier;
