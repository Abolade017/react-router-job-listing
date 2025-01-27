//@ts-ignore
import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  return (
    <div className="py-[50px]">
      <p className="capitalize max-w[800px] py-[10px]">
        <b>Job Title:</b>
        {jobDetails.title}
      </p>
      <p className="capitalize max-w[800px] py-[10px]">
        <b>Job Salary:</b>
        {jobDetails.salary}
      </p>
      <p className="capitalize max-w[800px] py-[10px]">
        <b>Job Location:</b>
        {jobDetails.location}
      </p>
      <p className="capitalize max-w[800px] py-[10px]">
        <b>Description</b>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias
        commodi aut ducimus, deleniti delectus necessitatibus natus hic
        cupiditate error molestiae minus tempore quo deserunt quae laudantium
        reiciendis, sit id?
      </p>
      <button className="border-none outline-none mt-[10px] cursor-pointer px-[10px] py-[5px] bg-very-dark-blue text-light-grayish-blue">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
export const JobDetailsLoader = async ({ params }: any) => {
  const { id } = params;
  const res = await fetch("http://localhost:8080/jobs/" + id);
  if (!res.ok) {
    throw new Error("could not found job details");
  }
  console.log(res);
  return res.json();
};
