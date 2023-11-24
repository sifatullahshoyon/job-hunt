import React from "react";
import { MapPinIcon , CurrencyDollarIcon} from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
const FeatureSingleJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card w-full h-[420px] border">
        <div className="pl-10 pt-8">
          <img
            src={logo ? logo : 'Image Not Found'}
            alt="Company Logo"
            className="object-cover"
          />
        </div>
        <div className="card-body  ">
          <h2 className="card-title font-manrope font-extrabold text-2xl mb-2">{job_title ? job_title : 'Not Found'}</h2>
          <p><small className="font-manrope text-xl text-gray-500 font-semibold mb-7">{company_name ? company_name : 'Not Found'}</small></p>
          <div className="flex gap-4 mb-4">
          <button class="btn btn-outline btn-info font-manrope text-base">{remote_or_onsite ? remote_or_onsite : "Not Found"}</button>
          <button class="btn btn-outline btn-info font-manrope text-base">{job_type ? job_type : 'Not Found'}</button>
          </div>
          <div className="flex gap-x-6 mb-6">
            <div className="flex items-center">
            <MapPinIcon className="h-6 w-6 text-black font-light gap-x-2" />
            <p className="text-xl font-manrope font-semibold">{location ? location : 'Not Found'}</p>
            </div>
            <div className="flex items-center">
            <CurrencyDollarIcon className="h-6 w-6 text-black font-light gap-x-2" />
            <p className="text-xl font-manrope font-semibold">Salary :{salary ? salary : 'Not Found'}</p>
            </div>
          </div>
          <Link to={`/appliedJobs/${id}`}>
            <button className="btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSingleJob;
