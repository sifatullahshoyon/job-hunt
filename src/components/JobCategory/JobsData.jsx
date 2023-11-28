import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';


const JobsData = () => {
    const [jobs , setJobs] = useState();
    useEffect(() => {
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , []);
    return (
        <div className='container mx-auto py-3 px-5 mb-32'>
            <h1 className='text-5xl font-manrope font-extrabold text-black mb-4 text-center '>Job Category List</h1>
            <p className='font-light text-base mb-8 text-center '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    jobs?.map(job => <SingleJob key={job.id} job={job}/>)
                }
            </div>
        </div>
    );
};

export default JobsData;