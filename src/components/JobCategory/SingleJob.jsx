import React from 'react';

const singleJob = ({job}) => {
    const {logo , category_name , availability} = job;
    return (
        <div className='mx-auto'>
            {/* Card Section */}
            <div className='w-80 lg:w-72  h-60 rounded-lg bg-indigo-50 p-10'>
                <div className='w-4/5'>
                    <img className='object-cover p-4 bg-indigo-100 rounded' src={logo ? logo : 'Image Not Found'} alt="icon" />
                </div>
                <h4 className='mt-8 text-xl font-manrope font-extrabold'>{category_name ? category_name : 'Not Found'}</h4>
                <p><small className='text-base font-manrope font-thin mt-1'>{availability ? availability : 'Not Found'}</small></p>
            </div>
        </div>
    );
};

export default singleJob;