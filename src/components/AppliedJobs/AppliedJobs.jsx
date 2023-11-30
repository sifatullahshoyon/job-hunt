import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AllJobs from "./AllJobs";

const AppliedJobs = () => {
  const { cartArray } = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="mt-30">
        {cartArray?.map((cart) => (
          <AllJobs key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
