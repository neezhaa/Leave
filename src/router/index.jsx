import { createBrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
// import Profile from "../pages/Profile.jsx";
import Dashboard from "../pages/Dashboard.jsx";
// import Layout from "../layouts/Layout.jsx";
import ProtectedRoute from './ProtectedRoute';

export const LOGIN_ROUTE = '/login'
export const EMPLOYEE_DASHBOARD_ROUTE = '/dashboard'
const ADMIN_BASE_ROUTE = '/admin'
export const ADMIN_DASHBOARD_ROUTE = ADMIN_BASE_ROUTE + '/dashboard'
export const redirectToDashboard = (roleType) => {
    switch (roleType){
        case 'employee':
            return (EMPLOYEE_DASHBOARD_ROUTE)
        case 'admin' :
            return (ADMIN_DASHBOARD_ROUTE)
    }
}
export const router = createBrowserRouter([
    
    {
        path: '/',
        element: <ProtectedRoute element={<Dashboard />} />
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
])