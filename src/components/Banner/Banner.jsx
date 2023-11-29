import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-indigo-50 h-60'>
            <div className='container mx-auto'>
                <div className='relative flex justify-center items-center'>
                    <h3 className='font-manrope font-extrabold text-black text-3xl mt-10'>Job Details</h3>
                    <div className='bannerImg-one'>
                        <img src="/assets/images/bg1.png" alt="" />
                    </div>
                    <div className='bannerImg-two'>
                        <img src="/assets/images/bg1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;