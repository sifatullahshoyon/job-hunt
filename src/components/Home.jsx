import React from 'react';
import JobsData from './JobCategory/JobsData';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';




const Home = () => {
    return (
        <section>
            <div>
                {/* Start Job Category List Section */}
                    <JobsData />
                {/* End Job Category List Section */}

                {/* Start Featured Jobs Section */}
                    <FeaturedJobs />
                {/* End Featured Jobs Section */}
            </div>
        </section>
    );
};

export default Home;