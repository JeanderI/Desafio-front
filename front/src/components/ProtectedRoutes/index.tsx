import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { user, setCurrentRoute } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      const pathname = window.location.pathname;
      if (pathname !== "/") {
        setCurrentRoute(pathname);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{user && <Outlet />}</>;
};

export default ProtectedRoutes;
