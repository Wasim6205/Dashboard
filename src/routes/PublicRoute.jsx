import { Navigate, Outlet } from "react-router";
import { useContextData } from "../context/AuthContext";

const PublicRoute = () => {
  let { loggedInUser } = useContextData();

  if (loggedInUser) return <Navigate to={"/main"} />;

  return <Outlet />;
};

export default PublicRoute;