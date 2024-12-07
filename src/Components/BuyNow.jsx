import React, { useContext, useMemo, useState } from 'react';
import BNNavbar from './BNNavbar';
import { MdOutlineModeEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { productContext } from '../Utils/Context';
import useProductDetails from '../Utils/useProductDetails';
import { toast } from 'react-toastify';

const BuyNow = () => {
    const { val } = useContext(productContext);
    const { singleProdDeatils } = useProductDetails();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const placeOrder = () => {
        Object.values(val).some(value => !value)
            ? toast.error("Please add your address!")
            : navigate("/paymentGateway") || toast.success("Thank You For Visiting !!");
    };

    const generateQuantityOptions = () => {
        return [...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
                {i + 1}
            </option>
        ));
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value, 10));
    };

    const platformFee = useMemo(() => Math.floor(Math.random() * (70 - 55 + 1)) + 60, []);
    const shippingFee = useMemo(() => Math.floor(Math.random() * (90 - 60 + 1)) + 60, []);

    const totalPrice = singleProdDeatils ? singleProdDeatils.price * quantity : 0;

    if (!singleProdDeatils) {
        return <div>Loading...</div>;
    }



    return (
        <div>
            <BNNavbar borderbt={"border-b-2 border-green-300 text-green-600"} />
            <div className='max-w-screen-xl min-h-28 m-auto mt-3 px-3 py-1 bg-zinc-200 rounded-lg'>
                <div className='flex items-center gap-2'>
                    <h1 className='h-[23%] text-2xl font-semibold'>Your Address</h1>
                    <Link to={"/address"} className='cursor-pointer border border-gray-400 rounded-md bg-zinc-300 text-xl'><MdOutlineModeEdit /></Link>
                </div>
                {Object.values(val).some(value => !value) ? (
                    <p className='leading-5 pt-3 px-7'>Please add your address by clicking the above pen icon.</p>
                ) : (
                    <div className='w-full h-[77%] leading-5 pt-3 pb-1 px-7 '>
                        <h1 className='font-medium'>{val.userName}</h1>
                        <p className='mt-1 text-sm w-[45%]'>{val.house}, {val.colony}, {val.city}, {val.state} - {val.pin}</p>
                        <p className='text-sm'>{val.mobile}</p>
                    </div>
                )}

            </div>
            <div className='max-w-screen-xl h-[65vh] m-auto mt-4 rounded-lg p-5 bg-zinc-100 flex justify-between'>
                <div className='w-[70%] h-full rounded-md overflow-y-scroll flex flex-col gap-2'>
                    <div className='w-[98%] h-[40%] rounded-md bg-white border border-zinc-500 px-3 flex gap-5 py-1'>
                        <div className='w-[20%] h-full'>
                            <img className='w-full h-full object-contain object-center' src={singleProdDeatils.image} alt="" />
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold'>{singleProdDeatils.title}</h1>
                            <h2 className='mt-2 text-sm font-medium text-zinc-500'>{singleProdDeatils.category}</h2>
                            <div className='mt-2 flex items-center gap-2'>
                                <span>Qty : </span>
                                <select
                                    onChange={handleQuantityChange}
                                    className='border border-gray-300 rounded px-2 py-1'>
                                    {generateQuantityOptions()}
                                </select>
                            </div>
                            <h1 className='mt-3 text-lg font-medium text-red-600'>$ {totalPrice}</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[28%] h-full bg-zinc-200 rounded-md p-3 flex items-end'>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium'>Total Price Breakdown (1 item)</h2>
                        <div className='mt-4 border-b border-zinc-400 py-3 flex flex-col gap-1'>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Total MRP <span className='font-semibold'>$ {totalPrice}</span></h3>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Platform Fee <span className='font-semibold'>$ {platformFee}</span></h3>
                            <h3 className='flex items-center justify-between font-medium text-sm'>Shipping Fee <span className='font-semibold'>$ {shippingFee}</span></h3>
                        </div>
                        <h1 className='flex items-center justify-between mt-2 text-lg font-bold'>Total Amount <span className='text-red-600'>$ {totalPrice + platformFee + shippingFee}</span></h1>
                        <button onClick={placeOrder} className='w-full px-3 py-2 bg-red-300 mt-4 rounded-sm uppercase font-medium hover:bg-red-400 transition-colors'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNow