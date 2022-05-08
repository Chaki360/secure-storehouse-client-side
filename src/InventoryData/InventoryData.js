import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InventoryData = ({ inventory }) => {
    const navigate = useNavigate();
    const navigateToManageStock = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>

            <div className="max-w-sm bg-white rounded-lg shadow-md dark:border-gray-700">

                <img className="p-8 rounded-t-lg" src={inventory.image} alt="product image" />

                <div className="p-5">

                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-indigo-900 ">{inventory.bikeName}</h5>

                    <h5 className=" text-lg font-bold tracking-tight text-indigo-500 ">Supplier:{inventory.supplierName}</h5>
                    <h5 className=" text-lg font-bold tracking-tight text-indigo-800 ">Available:{inventory.quantity}</h5>



                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{inventory.description}</p>

                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 ">{inventory.price}</span>
                        <button onClick={() => navigateToManageStock(inventory._id)} className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Manage Stock</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default InventoryData;