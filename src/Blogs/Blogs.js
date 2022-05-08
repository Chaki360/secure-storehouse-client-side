import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <section className=' mt-10 blog-items'>


            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 ">Difference between Javascript and NodeJs?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900">What is the purpose of JWT and how does it work?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
            <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 ">Differences between SQL and NoSQL databases?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

        </section>
    );
};

export default Blogs;