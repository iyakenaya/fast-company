import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";

const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <h5>Loading...</h5>;
};

export default LogOut;
