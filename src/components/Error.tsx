//@ts-ignore
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export const Error = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-lg font-medium text-very-dark-blue">
        An error has occurred!
      </h3>
      <p className="text-dark-grayish-blue">{error.message}</p>
      <button
        onClick={() => navigate("/")}
        className="border-none outline-none mt-[10px] cursor-pointer px-[10px] py-[5px] bg-dark-grayish-blue text-light-grayish-blue"
      >
        Go to Homepage
      </button>
    </div>
  );
};
