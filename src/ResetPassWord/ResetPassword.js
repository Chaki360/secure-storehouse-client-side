import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const ResetPassword = () => {
    const navigate = useNavigate()
    const handleNavigateLogIn = () => {
        navigate('/login')
    }
    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-sans font-extrabold text-indigo-900">Reset your password now</h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>

                                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email address" />
                            </div>

                        </div>



                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Reset password
                            </button>
                        </div>
                    </form>
                    <div>
                        <h3 className='text-lg'>Remember?<button onClick={handleNavigateLogIn} className=' text-indigo-600 hover:text-red-600' >Back to login</button></h3>

                    </div>

                    <SocialLogin></SocialLogin>
                </div >
            </div >
        </div>
    );
};

export default ResetPassword;