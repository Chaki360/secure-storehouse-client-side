import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageStock = () => {

    const handleDelivered = (id) => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    return (
        <section className="">

            <div className="max-w-sm mt-5 mx-auto bg-white rounded-lg shadow-md dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={inventory.image} alt="product image" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-indigo-900 ">{inventory.bikeName}</h5>

                        <h5 className=" text-lg font-bold tracking-tight text-indigo-500 ">Supplier:{inventory.supplierName}</h5>
                        <h5 className=" text-lg font-bold tracking-tight text-indigo-800 ">Stock:{inventory.quantity}</h5>


                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{inventory.description}</p>

                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 ">{inventory.price}</span>
                        <button onClick={handleDelivered} className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Delivered</button>
                    </div>


                </div>

            </div>


            <div className='min-h-full flex'>

                <div className=" flex text-center mx-auto  mt-6">
                    <input className=" flex-auto w-1/2  rounded-lg rounded-r-none bg-gray-50 text-base leading-none text-black  p-5  border focus:outline-none" type="number" placeholder="Stock amount" />
                    <button className=" rounded-lg hover:bg-indigo-600 bg-indigo-700 text-base font-medium leading-none text-white p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Add to stock</button>

                </div>

            </div>

            <div className='text-center mt-8 mb-4'>
                <Link to='/manage-items' className=" rounded-tr-lg hover:bg-indigo-600 bg-indigo-700  text-base font-medium leading-none text-white p-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">Manage Items</Link>
            </div>


        </section>
    );
};

export default ManageStock;