import React from 'react';


const Header = () => {
    return (
        <section>
            {/* Start Header Section */}
            <header className='bg-indigo-50 mb-32'>
                <div className='container mx-auto px-4'>
                    <div className="lg:flex justify-between items-center pt-10 gap-x-6">
                        <div>
                            <h1 className='text-[80px] leading-[100px] font-manrope font-extrabold text-black'>One Step<br /> Closer To Your <br /><span className='text-indigo-500'>Dream Job</span></h1>
                            <p className='text-lg font-medium leading-9 py-6 font-manrope'>Explore thousands of job opportunities with all the<br/> information you need. Its your future. Come find it. Manage all<br/> your job application from start to finish.</p>
                            <button className='btn-primary mb-2'>Get Started</button>
                        </div>
                        <div>
                            <img className='object-cover' src="/assets/images/user.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
            {/* End Header Section */}
        </section>
    );
};

export default Header;