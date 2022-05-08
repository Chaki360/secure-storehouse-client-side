import React from 'react';

const Stats = () => {
    return (
        <section>
            <h1 className='text-4xl mb-4 mt-4 text-center font-extrabold text-indigo-900'>Trusted by supplier's from over 70 countries</h1>

            <div className=' text-center grid lg:grid-cols-3 sm:grid-cols-1'>
                <div className='shadow-md rounded-lg '><h1 className='text-2xl font-bold text-indigo-500 '>On time Delivery</h1><p className='text-4xl font-bold text-indigo-500'>95%</p></div>
                <div className='shadow-md rounded-lg'><h1 className='text-2xl font-bold text-indigo-500'>Customer's Support</h1><p className='text-4xl font-bold text-indigo-500'>24/7</p></div>
                <div className='shadow-md rounded-lg'><h1 className='text-2xl font-bold text-indigo-500 '>Total registered</h1><p className='text-4xl font-bold text-indigo-500 '>250k+</p></div>
            </div>

        </section>
    );
};

export default Stats;