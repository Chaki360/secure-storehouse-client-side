import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';

const Header = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const handleLogOut = () => {
        signOut(auth)
        navigate('/login')
    }

    return (

        <nav className="bg-indigo-500 sticky z-50 top-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 gap-3 flex items-center">
                            <img width={42} src='https://i.ibb.co/fNB7nds/sheeponbike-ovejas-en-13451.png' alt='' />
                            <div><Link to='/' className='text-3xl font-sans font-extrabold text-gray-800 hover:text-red-50'>Secure StoreHouse</Link></div>
                        </div>
                        <div className="hidden sm:block absolute inset-x-0 left-0  sm:ml-6">
                            <div className="hidden sm:block absolute inset-y-0 right-0 items-center sm:ml-6">
                                <div className=" flex  items-center justify-center space-x-4">

                                    <Link to='/home' className=" hover:text-blue-100 text-white px-3 py-2 rounded-md text-md font-medium" aria-current="page">Home</Link>
                                    <Link to='/blogs' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>

                                    <Link to='/about' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                    {user ? <Link to='/manage-items' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Manage Items</Link> : <Link to='/' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium"></Link>}
                                    {user ? <Link to='/add-item' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium">Add Item</Link> : <Link to='/' className=" text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium"></Link>}

                                    {
                                        user ?
                                            <button onClick={handleLogOut} className=" border bg-slate-100 text-indigo hover:text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Logout</button> : <Link to='/login' className=" border bg-slate-100 text-indigo hover:text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Register/Login</Link>
                                    }






                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">

                        <Link to='/home' className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

                        <Link to='/blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>

                        <Link to='/about' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>

                        {
                            user ?
                                <button onClick={handleLogOut} className=" border bg-slate-100 text-indigo hover:text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Logout</button> : <Link to='/login' className=" border bg-slate-100 text-indigo hover:text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Register/Login</Link>
                        }



                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;