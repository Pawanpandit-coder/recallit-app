import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../auth/auth";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const PrivateRoute = ({ children }) => {

  const { setIsLoggedIn} = useContext(LoginContext)
  const data = localStorage.getItem("data");

  if (isTokenExpired()) {
    localStorage.clear();
    setIsLoggedIn(false)
    return <Navigate to="/auth/login" />;
  }

  setIsLoggedIn(true)
  return children;
};

export default PrivateRoute;
