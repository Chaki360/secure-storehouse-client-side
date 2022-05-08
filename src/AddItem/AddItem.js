import React from 'react';
import { useForm } from "react-hook-form";
import Toast from '../Toast/Toast';
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm('Everything OK?');
        if (proceed) {
            const url = `http://localhost:5000/inventory`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => console.log(result))
            alert('Item successfully added')
            reset()
        }

    };
    return (
        <div className='mx-auto mt-20 w-80 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Bike name' type='text' {...register("bikeName")} />
                <input className=' mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Supplier name' type='text' {...register("supplierName")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Stock quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Description' type="text" {...register("description")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='Image URL' type="text" {...register("image")} />
                <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' placeholder='Item Price($)' type="text" {...register("price")} />
                <input className=' bg-indigo-700 hover:bg-indigo-600 text-white block w-full px-3 py-3' value='Add a Item' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;