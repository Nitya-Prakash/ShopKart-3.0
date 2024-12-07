import React from 'react';
import useProductDetails from '../Utils/useProductDetails';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { singleProdDeatils } = useProductDetails();
    const navigate = useNavigate();

    const navigateToBuyNow = () => {
        navigate("/buynow");
    };

    const shopNow = () => {
        navigate("/");
    };

    return (
        <div>
            <div className='w-full h-20 m-auto flex border-b border-gray-300 px-5 md:px-16 shadow-md'>
                <div className='w-[25%] h-full flex items-center justify-center'>
                    <a href='https://shop-kart-3-0.vercel.app/' className='text-lg whitespace-nowrap font-bold md:text-2xl w-full'>ShopKart 3.0</a>
                </div>
                <div className='w-[50%] h-full flex items-center justify-center'>
                    <h1 className='text-lg md:text-2xl font-medium uppercase border-b-2 border-green-300'>My Cart</h1>
                </div>
            </div>

            {singleProdDeatils ? (
                <div className='max-w-screen-xl h-auto md:h-[75vh] m-auto mt-10 rounded-lg p-4 md:p-5 bg-none md:bg-zinc-100 flex flex-col md:flex-row md:justify-between gap-5'>
                    <div className='w-full md:w-[70%] h-auto md:h-full rounded-md overflow-y-auto flex flex-col gap-2'>
                        <div className='w-full h-auto md:h-[40%] rounded-md bg-white border border-zinc-500 px-3 flex flex-col md:flex-row gap-5 py-2'>
                            <div className='w-full md:w-[20%] h-36 md:h-full'>
                                <img className='w-full h-full object-contain object-center' src={singleProdDeatils.image} alt="" />
                            </div>
                            <div>
                                <h1 className='text-base md:text-lg font-semibold'>{singleProdDeatils.title}</h1>
                                <h2 className='mt-2 text-md font-medium text-zinc-500'>{singleProdDeatils.category}</h2>
                                <h1 className='mt-3 text-base md:text-lg font-medium text-red-600'>$ {singleProdDeatils.price}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-[28%] h-auto md:h-full bg-zinc-200 rounded-md p-4 md:p-3 flex items-end'>
                        <div className='w-full'>
                            <h1 className='flex items-center justify-between mt-2 text-base md:text-lg font-bold'>
                                Total Amount <span className='text-red-600'>$ {singleProdDeatils.price}</span>
                            </h1>
                            <button
                                onClick={navigateToBuyNow}
                                className='w-full px-3 py-2 bg-red-300 mt-4 rounded-md uppercase font-medium hover:bg-red-400 transition-colors text-md md:text-base'>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='max-w-screen-xl h-auto md:h-[75vh] m-auto mt-10 rounded-lg p-4 md:p-5 bg-zinc-100 flex flex-col items-center justify-center'>
                    <h1 className="text-xl md:text-2xl font-medium text-gray-600">Your shopping cart is empty !!</h1>
                    <button
                        onClick={shopNow}
                        className='w-36 px-3 py-2 bg-red-300 mt-4 rounded-md uppercase font-medium hover:bg-red-400 transition-colors text-md md:text-base'>
                        Shop Now
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
