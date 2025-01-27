//@ts-ignore
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex justify-center items-center h-[80vh] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
