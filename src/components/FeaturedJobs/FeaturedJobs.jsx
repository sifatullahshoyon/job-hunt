import React, { useState } from 'react';
import FeatureSingleJob from './FeatureSingleJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const featureJobs = useLoaderData();
    const [wrap , setWrap] = useState(false);
    const itemShowAll = wrap ? featureJobs :featureJobs.slice(0,4);
    const handleSeeMoreBtn = () => {
        setWrap(true);
    };
    return (
        <div className='container mx-auto py-3 px-5 mb-32'>
            <h1 className='text-5xl font-manrope font-extrabold text-black mb-4 text-center '>Featured Jobs</h1>
            <p className='font-light text-base mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                {
                    itemShowAll?.map(job => <FeatureSingleJob key={job.id} job={job}/>)
                }
            </div>
            <div className='text-center mb-2'>
                {
                    !wrap && (
                        <button onClick={handleSeeMoreBtn} className='btn-primary'>See All Jobs</button>
                    )
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;