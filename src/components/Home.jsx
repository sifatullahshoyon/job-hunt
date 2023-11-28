import React from "react";
import JobsData from "./JobCategory/JobsData";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import Header from "./Header/Header";
import { useLoaderData } from "react-router-dom";


const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      {/* <jobDataContext.Provider value={data}> */}
        <Header />
        {/* Start Job Category List Section */}
        <JobsData />
        {/* End Job Category List Section */}

        {/* Start Featured Jobs Section */}
        <FeaturedJobs />
        {/* End Featured Jobs Section */}

    </div>
  );
};

export default Home;
