//@ts-ignore
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="py-10 w-full flex justify-between space-x-5">
      {jobsData.map((job: any) => {
        return (
          <Link
            to={job.id.toString()}
            key={job.id}
            className="flex-1 decoration-none p-[10px] bg-light-grayish-blue"
          >
            {" "}
            <h4 className="text-lg font-medium text-very-dark-blue capitalize">
              {job.title}
            </h4>
            <p className="text-dark-grayish-blue capitalize"> {job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;
export const jobsLoader = async () => {
  const res = await fetch("http://localhost:8080/jobs");
  if (!res.ok) {
    throw new Error("could not found job list !");
  }
  return res.json();
};
