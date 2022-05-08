import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>

            <p className='mb-2 text-xl font-bold tracking-wide text-gray-500 uppercase'>
                Error 404
            </p>
            <h1 className='mb-4 text-2xl font-extrabold text-gray-900 md:text-4xl'>
                Oops! The page you're looking for isn't here.
            </h1>
            <p className='mb-5 text-bold text-gray-800 text-xl'>
                You might have the wrong address, or the page may have moved.
            </p>
            <Link to='/' className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                Back to Homepage

            </Link>

        </div>
    );
};

export default NotFound;