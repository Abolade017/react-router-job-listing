//@ts-ignore
import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h1 className="text-xl text-very-dark-blue font-medium">Job openings</h1>
      <p className="text-dark-grayish-blue">
        List of current Job opening in our company
      </p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
