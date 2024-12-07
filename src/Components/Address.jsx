import React, { useContext, useState } from 'react'
import BNNavbar from './BNNavbar'
import { useNavigate } from 'react-router-dom';
import { productContext } from '../Utils/Context';
import { toast } from 'react-toastify';

const Address = () => {
    const navigate = useNavigate();
    const { val, setVal } = useContext(productContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (
            val.userName.trim().length < 1 || val.city.trim().length < 1 || val.state.trim().length < 1 || val.house.trim().length < 1 || val.colony.trim().length < 1
        ) {
            toast.error("No field should left empty !");
            return;
        }
        if (
            val.pin.trim().length < 1 || val.pin.trim().length > 6
        ) {
            toast.error("Please enter a valid PIN code (must be 6 digits)");
            return;
        }
        if (
            val.mobile.trim().length < 1 || val.mobile.trim().length > 10
        ) {
            toast.error("Please enter a valid mobile number (must be 10 digits)");
            return;
        }
        navigate("/buynow");
        toast.success("Address Saved Successfully !")
    }


    const goBack = () => navigate(-1);
    return (
        <>
            <BNNavbar Aborderbt={"border-b-2 border-green-300 text-green-600"} />
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center md:mt-5 mt-12 px-4 md:px-6 lg:px-8'>
                <div className='w-full max-w-xl h-auto rounded-lg p-5 bg-white shadow-md'>
                    <h1 className='text-2xl font-semibold text-center'>Add Delivery Address</h1>
                    <div className='flex flex-col gap-3 mt-7'>
                        <input onChange={(event) => setVal({ ...val, userName: event.target.value })} value={val.userName} className='text-lg bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='Full Name(Required)*' />
                        <div className='flex flex-col md:flex-row gap-4 mb-2'>
                            <input onChange={(event) => setVal({ ...val, city: event.target.value })} value={val.city} className='text-lg bg-zinc-200 rounded-md p-3 outline-none w-full md:w-1/2' type="text" placeholder='City(Required)*' />
                            <input onChange={(event) => setVal({ ...val, state: event.target.value })} value={val.state} className='text-lg bg-zinc-200 rounded-md p-3 outline-none w-full md:w-1/2' type="text" placeholder='State(Required)*' />
                        </div>
                        <input onChange={(event) => setVal({ ...val, house: event.target.value })} value={val.house} className='text-lg bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='House No., Building Name(Required)*' />
                        <input onChange={(event) => setVal({ ...val, colony: event.target.value })} value={val.colony} className='text-lg bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='Road Name, Area, Colony(Required)*' />
                        <div className='flex flex-col md:flex-row gap-4'>
                            <input onChange={(event) => setVal({ ...val, mobile: event.target.value })} value={val.mobile} className='text-lg bg-zinc-200 rounded-md p-3 w-full md:w-1/2 outline-none' type="number" placeholder='Mobile Number(Required)*' />
                            <input onChange={(event) => setVal({ ...val, pin: event.target.value })} value={val.pin} className='text-lg bg-zinc-200 rounded-md p-3 w-full md:w-1/2 outline-none' type="number" placeholder='Pin Code(Required)*' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-4'>
                        <button
                            type="button"
                            onClick={goBack}
                            className='w-1/4 text-lg bg-blue-300 mt-3 rounded-md p-3 mb-2 outline-none hover:bg-blue-400 transition-colors'>
                            Back
                        </button>
                        <button
                            type="submit"
                            className='w-2/4 text-lg bg-red-300 mt-3 rounded-md p-3 mb-2 outline-none hover:bg-red-400 transition-colors'>
                            Save Address
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Address