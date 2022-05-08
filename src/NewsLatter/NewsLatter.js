import React from 'react';

const NewsLatter = () => {
    return (
        <section>
            <div>
                <h1 className='text-4xl mb-4 mt-4 mx-auto text-center font-extrabold text-indigo-900'>Want to hear more from us...?</h1>
                <p className='text-medium font-medium text-center text-indigo-500'>If you want to hear from us when we add something new to our platform please Sign up for our newsletter and we'll notify you through your email.</p>
            </div>
            <div className='min-h-full flex items-center justify-center'>

                <div className=" flex text-center  mt-6">
                    <input className=" flex-auto w-3/4  rounded-lg rounded-r-none bg-gray-50 text-base leading-none text-black  p-5  border focus:outline-none" type="email" placeholder="example@email.com" />
                    <button className=" rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                </div>

            </div>

        </section>
    );
};

export default NewsLatter;