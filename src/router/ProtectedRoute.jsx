import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
