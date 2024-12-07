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
            alert("No field should left empty !")
            return;
        }
        if (
            val.pin.trim().length < 1 || val.pin.trim().length > 6
        ) {
            alert("Please enter a valid PIN code (must be 6 digits)")
            return;
        }
        if (
            val.mobile.trim().length < 1 || val.mobile.trim().length > 10
        ) {
            alert("Please enter a valid mobile number (must be 10 digits)")
            return;
        }
        navigate("/buynow");
        toast.success("Address Saved Successfully !")
    }


    const goBack = () => navigate(-1);
    return (
        <>
            <BNNavbar Aborderbt={"border-b-2 border-green-300 text-green-600"} />
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center mt-5'>
                <div className='w-[55%] h-[85%] rounded-lg p-5'>
                    <h1 className='text-3xl font-semibold'>Add Delivery Address</h1>
                    <div className='flex flex-col gap-3 mt-7'>
                        <input onChange={(event) => setVal({ ...val, userName: event.target.value })} value={val.userName} className='text-xl bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='Full Name(Required)*' />
                        <div className='flex gap-4 mb-2'>
                            <input onChange={(event) => setVal({ ...val, city: event.target.value })} value={val.city} className='text-xl bg-zinc-200 rounded-md p-3 outline-none w-1/2' type="text" placeholder='City(Required)*' />
                            <input onChange={(event) => setVal({ ...val, state: event.target.value })} value={val.state} className='text-xl bg-zinc-200 rounded-md p-3 outline-none w-1/2' type="text" placeholder='State(Required)*' />
                        </div>
                        <input onChange={(event) => setVal({ ...val, house: event.target.value })} value={val.house} className='text-xl bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='House No., Building Name(Required)*' />
                        <input onChange={(event) => setVal({ ...val, colony: event.target.value })} value={val.colony} className='text-xl bg-zinc-200 rounded-md p-3 mb-2 w-full outline-none' type="text" placeholder='Road Name, Area, Colony(Required)*' />
                        <div className='flex gap-4'>
                            <input onChange={(event) => setVal({ ...val, mobile: event.target.value })} value={val.mobile} className='text-xl bg-zinc-200 rounded-md p-3 w-1/2 outline-none' type="number" placeholder='Mobile Number(Required)*' />
                            <input onChange={(event) => setVal({ ...val, pin: event.target.value })} value={val.pin} className='text-xl bg-zinc-200 rounded-md p-3 2 w-1/2 outline-none' type="number" placeholder='Pin Code(Required)*' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            type="button"
                            onClick={goBack}
                            className='w-1/4 text-xl bg-blue-300 mt-3 rounded-md p-3 mb-2 outline-none hover:bg-blue-400 transition-colors'>
                            Back
                        </button>
                        <button
                            type="submit"
                            className='w-1/4 text-xl bg-red-300 mt-3 rounded-md p-3 mb-2 outline-none hover:bg-red-400 transition-colors'>
                            Save Address
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Address