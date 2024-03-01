import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    
    let user = {rol: "user"}

  return <>
    {
        user.rol === "admin" ? <Outlet /> : <Navigate to="/" />
    }
  </>
};
