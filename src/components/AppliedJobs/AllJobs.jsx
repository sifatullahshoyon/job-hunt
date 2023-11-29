import React from "react";
import { Link } from "react-router-dom";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const AllJobs = ({ cart }) => {
  return (
    <div>
      <div className="container mx-auto p-5">
        <div className="">
          <div></div>
          <div className="card card-side flex flex-wrap justify-around items-center bg-base-100 shadow-xl p-5">
            <figure className="flex justify-center items-center bg-slate-200 h-60 md:mx-10 rounded">
              <img
                src={cart?.logo ? cart?.logo : "images not found"}
                className="w-full p-5"
                alt=""
              />
            </figure>
            <div className="card-body p-5">
              <h3 className="text-2xl text-black font-manrope font-bold">
                {cart?.job_title ? cart?.job_title : "Data Not Found"}{" "}
              </h3>
              <p>
                <small className="font-manrope text-2xl text-gray-500 font-semibold mb-7">
                  {cart?.company_name ? cart?.company_name : "Not Found"}
                </small>
              </p>
              <div className="flex gap-4 mb-4">
                <button className="btn btn-outline btn-info font-manrope text-base">
                  {cart?.remote_or_onsite
                    ? cart?.remote_or_onsite
                    : "Not Found"}
                </button>
                <button className="btn btn-outline btn-info font-manrope text-base">
                  {cart?.job_type ? cart?.job_type : "Not Found"}
                </button>
              </div>
              <div className="flex gap-x-6 mb-6">
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-black font-light gap-x-2" />
                  <p className="text-xl font-manrope font-semibold">
                    {cart?.location ? cart?.location : "Not Found"}
                  </p>
                </div>
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-black font-light gap-x-2" />
                  <p className="text-xl font-manrope font-semibold">
                    Salary :{cart?.salary ? cart?.salary : "Not Found"}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <Link to="/">
                <button className=" btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
