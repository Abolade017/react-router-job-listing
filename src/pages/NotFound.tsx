//@ts-ignore
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-[70px] font-medium">404 | NotFound</h1>
      <br />
      <button onClick={() => navigate("/")}>Got to Homepage</button>
    </div>
  );
};

export default NotFound;
