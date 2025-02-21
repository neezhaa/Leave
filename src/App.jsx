import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LeaveProvider } from "./context/LeaveContext";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import Calendrier from "./pages/Calendrier";

function App() {
  return (
    <AuthProvider>
      <LeaveProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LeaveProvider>
    </AuthProvider>
  );
}

export default App;
