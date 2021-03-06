import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const navigate = useNavigate()
    const navigateRegister = e => {
        navigate('/register')
    };
    const navigateResetpassword = e => {
        navigate('/reset-password')
    };

    if (user) {
        navigate(from, { replace: true });
    }

    return (

        <div>


            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-sans font-extrabold text-indigo-900">Login to your account</h2>

                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>

                                <input type="email"
                                    id="email-address" name="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email address" />
                            </div>
                            <div>

                                <input id="password" name="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>



                        <div>
                            <button onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                Login
                            </button>
                        </div>
                    </form>
                    <div>
                        <h3 className='text-lg'>New here?<button onClick={navigateRegister} className=' text-indigo-600 hover:text-red-600' >Please Register</button></h3>
                        <h3 className='text-lg'>Forgotten password?<button onClick={navigateResetpassword} className=' text-indigo-600 hover:text-red-600' >Reset Now</button></h3>
                    </div>

                    <SocialLogin></SocialLogin>
                </div >
            </div >
        </div>

    );
};

export default Login;