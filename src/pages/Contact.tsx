//@ts-ignore
import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text[70px] text-dark-grayish-blue font-medium">
        Contact Page
      </h1>
      <div className="flex space-x-10 items-center justify-center">
        <button onClick={() => navigate("info")} className="pb-5 w-full">
          Contact Info
        </button>
        <button onClick={() => navigate("form")} className="pb-5 w-full">
          Contact form
        </button>
      </div>
    </div>
  );
};

export default Contact;
