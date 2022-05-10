import React, { useEffect, useState } from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom';
import InventoryData from '../InventoryData/InventoryData';
import Stats from '../Stats/Stats';
import Banner from './Banner/Banner';


const Homepage = () => {
    const [inventories, SetInventories] = useState([]);
    useEffect(() => {
        fetch('https://calm-badlands-08364.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => SetInventories(data))
    }, []);

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl mb-4 mt-4 text-center font-bold text-indigo-900'>Available Inventories</h1>
            <div className='inventory-items'>

                {inventories.slice(0, 6).map(inventory =>
                    <InventoryData key={inventory._id} inventory={inventory}></InventoryData>
                )}
            </div>
            <div className='text-center mt-4 mb-4'>
                <Link to='/manage-items' className=" rounded-tr-lg hover:bg-indigo-600 bg-indigo-800  text-base font-medium leading-none text-white p-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 shadow-xl">Manage Items</Link>
            </div>
            <Stats></Stats>


        </div>
    );
};

export default Homepage;