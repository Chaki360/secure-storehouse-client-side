import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';
import './ManageInventories.css'

const ManageInventories = () => {
    const [inventories, SetInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => SetInventories(data))
    }, [inventories]);
    return (
        <div>
            <div className='inventory-items'>

                {inventories.map(inventory =>
                    <ManageInventory key={inventory._id} inventory={inventory}></ManageInventory>
                )};
            </div>
            <div className='text-center mt-4 mb-4'>
                <Link to='/add-item' className=" rounded-tr-lg hover:bg-indigo-600 bg-indigo-800  text-base font-medium leading-none text-white p-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 shadow-xl">Add more Items</Link>
            </div>
        </div>
    );
};

export default ManageInventories;