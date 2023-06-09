import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
