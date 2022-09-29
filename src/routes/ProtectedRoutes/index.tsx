import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Preload from "../../components/Preload";
import { LoginContext } from "../../contexts/LoginProvider";

const ProtectedRoutes = () => {
  const { loading, user } = useContext(LoginContext);

  return loading ? (
    <Preload />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
