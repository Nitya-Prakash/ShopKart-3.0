import React from 'react';
import useProductDetails from '../Utils/useProductDetails';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { singleProdDeatils } = useProductDetails();
    const navigate = useNavigate();

    const navigateToBuyNow = () => {
        navigate("/buynow")
    }

    const shopNow = () => {
        navigate("/");
    }

    return (
        <div>
            <div className='max-w-screen-xl h-20 m-auto flex border-b border-gray-300'>
                <div className='w-[25%] h-full flex items-center justify-center'><a href='https://shop-kart-3-0.vercel.app/' className='text-2xl w-full'>ShopKart 3.0</a></div>
                <div className='w-[50%] h-full flex items-center justify-center'>
                    <h1 className='text-2xl font-medium uppercase'>My Cart</h1>
                </div>
            </div>

            {singleProdDeatils ?
                <div className='max-w-screen-xl h-[75vh] m-auto mt-10 rounded-lg p-5 bg-zinc-100 flex justify-between'>
                    <div className='w-[70%] h-full rounded-md overflow-y-scroll flex flex-col gap-2'>
                        <div className='w-[98%] h-[40%] rounded-md bg-white border border-zinc-500 px-3 flex gap-5 py-1'>
                            <div className='w-[20%] h-full'>
                                <img className='w-full h-full object-contain object-center' src={singleProdDeatils.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold'>{singleProdDeatils.title}</h1>
                                <h2 className='mt-2 text-sm font-medium text-zinc-500'>{singleProdDeatils.category}</h2>
                                <h1 className='mt-3 text-lg font-medium text-red-600'>$ {singleProdDeatils.price}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[28%] h-full bg-zinc-200 rounded-md p-3 flex items-end'>
                        <div className='w-full'>
                            <h1 className='flex items-center justify-between mt-2 text-lg font-bold'>Total Amount <span className='text-red-600'>$ {singleProdDeatils.price}</span></h1>
                            <button onClick={navigateToBuyNow} className='w-full px-3 py-2 bg-red-300 mt-4 rounded-sm uppercase font-medium hover:bg-red-400 transition-colors'>Buy Now</button>
                        </div>
                    </div>
                </div>
                : <div className='max-w-screen-xl h-[75vh] m-auto mt-10 rounded-lg p-5 bg-zinc-100 flex flex-col items-center justify-center'>
                    <h1 className="text-2xl font-medium text-gray-600">Your shopping cart is empty !!</h1>
                    <button onClick={shopNow} className='w-36 px-3 py-2 bg-red-300 mt-4 rounded-md uppercase font-medium hover:bg-red-400 transition-colors'>Shop Now</button>
                </div>
            }


        </div>
    )
}

export default Cart