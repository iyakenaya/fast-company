import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const LogOut = () => {
  const { logOut } = useAuth();
  useEffect(() => {
    logOut();
  }, []);
  return <h5>Loading...</h5>;
};

export default LogOut;
