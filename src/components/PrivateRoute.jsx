import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
