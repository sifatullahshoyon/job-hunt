import React from 'react';
import './ErrorPage.css';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const {error , status} = useRouteError();
    return (
        <div className='bg-gray-300 h-screen'>
            <div className='error font-manrope'>
                <div>
                    <FaceFrownIcon className="h-40 w-40 text-yellow-500 mx-auto" />
                </div>
                <h1 className='font-manrope my-5 text-7xl font-bold italic'>{status || 404}</h1>
                <p className='font-manrope font-semibold text-2xl mb-2'>{error.message ? error.message : "Page Not Found"}</p>
                <Link to='/'><button className='btn-primary my-3'>Back To Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;